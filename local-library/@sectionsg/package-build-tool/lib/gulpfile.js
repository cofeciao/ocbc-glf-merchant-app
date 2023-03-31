const { getProjectPath, getConfig } = require('./utils/helper');

const merge2 = require('merge2');
const through2 = require('through2');
const webpack = require('webpack');
const babel = require('gulp-babel');
const argv = require('minimist')(process.argv.slice(2));

const gulp = require('gulp');
const concat = require('gulp-concat');
const stripCode = require('gulp-strip-code');
const fs = require('fs');
const rimraf = require('rimraf');
const getBabelCommonConfig = require('./getBabelCommonConfig');
const transformScss = require('./transformScss');
const selfPackage = require('../package.json');
const replaceLib = require('./replaceLib');
const { cssInjection } = require('./utils/styleUtil');

const packageJson = require(getProjectPath('package.json'));

const cwd = process.cwd();
const libDir = getProjectPath('lib');
const esDir = getProjectPath('es');
const distDir = getProjectPath('dist');

function dist(done) {
  rimraf.sync(getProjectPath('dist'));
  process.env.RUN_ENV = 'PRODUCTION';
  const webpackConfig = require(getProjectPath('webpack.config.js'));
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    const buildInfo = stats.toString({
      colors: true,
      children: true,
      chunks: false,
      modules: false,
      chunkModules: false,
      hash: false,
      version: false,
    });
    console.log(buildInfo);

    // Additional process of dist finalize
    const { dist: { finalize } = {} } = getConfig();
    if (finalize) {
      console.log('[Dist] Finalization...');
      finalize();
    }

    done(0);
  });
}

gulp.task(
  'dist',
  gulp.series(done => {
    dist(done);
  })
);

gulp.task('compile-with-es', done => {
  console.log('[Parallel] Compile to es...');
  const options = {
    scss: {
      source: ['components/**/*.scss'],
    },
    assets: {
      source: ['components/**/*.@(png|svg)'],
    },
    js: {
      source: ['components/**/*.@(jsx|js)', '!components/**/__tests__/**'],
    },
  };
  compileWrapper(options)(false).on('finish', done);
});

gulp.task('compile-with-lib', done => {
  console.log('[Parallel] Compile to js...');
  const options = {
    scss: {
      source: ['components/**/*.scss'],
    },
    assets: {
      source: ['components/**/*.@(png|svg)'],
    },
    js: {
      source: ['components/**/*.@(jsx|js)', '!components/**/__tests__/**'],
    },
  };
  compileWrapper(options)().on('finish', done);
});

gulp.task('jscompile-with-es', done => {
  console.log('[Parallel] Compile to es...');
  const options = {
    js: {
      source: ['index.js', 'src/**/*.js'],
    },
  };
  compileWrapper(options)(false).on('finish', done);
});

gulp.task('jscompile-with-lib', done => {
  console.log('[Parallel] Compile to js...');
  const options = {
    js: {
      source: ['index.js', 'src/**/*.js'],
    },
  };
  compileWrapper(options)().on('finish', done);
});

gulp.task('compile-finalize', done => {
  // Additional process of compile finalize
  const { compile: { finalize } = {} } = getConfig();
  if (finalize) {
    console.log('[Compile] Finalization...');
    finalize();
  }
  done();
});

gulp.task(
  'compile',
  gulp.series(gulp.parallel('compile-with-es', 'compile-with-lib'), 'compile-finalize')
);

gulp.task(
  'jscompile',
  gulp.series(gulp.parallel('jscompile-with-es', 'jscompile-with-lib'), 'compile-finalize')
);

gulp.task('compile:scss', done => {
  console.log('Compile scss...');
  compileScss().on('finish', done);
});

function compileWrapper({ scss = {}, assets = {}, js = {} }) {
  const { source: scssSrc } = scss;
  const { source: assetsSrc } = assets;

  const { source: jsSrc } = js;

  return function compile(modules) {
    function scssGulp() {
      return scssSrc
        ? gulp
            .src(scssSrc)
            .pipe(
              through2.obj(function (file, encoding, next) {
                this.push(file.clone());
                if (file.path.match(/(\/|\\)style(\/|\\)index\.scss$/)) {
                  transformScss(file.path)
                    .then(css => {
                      file.contents = Buffer.from(css);
                      file.path = file.path.replace(/\.scss$/, '.css');
                      this.push(file);
                      next();
                    })
                    .catch(e => {
                      console.error(e);
                    });
                } else {
                  next();
                }
              })
            )
            .pipe(gulp.dest(modules === false ? esDir : libDir))
        : undefined;
    }

    function assetsGulp() {
      return assetsSrc
        ? gulp.src(assetsSrc).pipe(gulp.dest(modules === false ? esDir : libDir))
        : undefined;
    }
    rimraf.sync(modules !== false ? libDir : esDir);
    let error = 0;
    const jsResult = gulp.src(jsSrc);

    function check() {
      if (error && !argv['ignore-error']) {
        process.exit(1);
      }
    }

    jsResult.on('finish', check);
    jsResult.on('end', check);
    const jsFilesStream = babelify(jsResult, modules, scssSrc && assetsSrc);
    const mergedStream = [scssGulp(), jsFilesStream, assetsGulp()];
    return merge2(mergedStream.filter(stream => !!stream));
  };
}

function babelify(js, modules, jsCompile) {
  const babelConfig = getBabelCommonConfig(modules);
  delete babelConfig.cacheDirectory;
  if (modules === false) {
    babelConfig.plugins.push(replaceLib);
  }
  let stream = js.pipe(babel(babelConfig)).pipe(
    through2.obj(function z(file, encoding, next) {
      this.push(file.clone());
      if (!jsCompile && file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
        const content = file.contents.toString(encoding);
        file.contents = Buffer.from(cssInjection(content));
        file.path = file.path.replace(/index\.js/, 'css.js');
        this.push(file);
        next();
      } else {
        next();
      }
    })
  );
  if (modules === false) {
    stream = stream.pipe(
      stripCode({
        start_comment: '@remove-on-es-build-begin',
        end_comment: '@remove-on-es-build-end',
      })
    );
  }
  return stream.pipe(gulp.dest(modules === false ? esDir : libDir));
}

function compileScss() {
  rimraf.sync(distDir);
  return gulp
    .src(['components/**/*.scss'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        if (file.path.match(/(\/|\\)style(\/|\\)index\.scss$/)) {
          transformScss(file.path)
            .then(css => {
              file.contents = Buffer.from(css);
              file.path = file.path.replace(/\.scss$/, '.css');
              this.push(file);
              next();
            })
            .catch(e => {
              console.error(e);
            });
        } else {
          next();
        }
      })
    )
    .pipe(concat(packageJson.name))
    .pipe(gulp.dest(distDir));
}
