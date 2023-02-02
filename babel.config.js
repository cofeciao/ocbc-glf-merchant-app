const presets = [
  ['@babel/preset-env', { 
    targets: ">0.2%, not dead, not op_mini all",
    "useBuiltIns": "entry",
    "corejs": 3
    }
  ],
  '@babel/preset-react',
];

const plugins = [
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-proposal-class-properties',
  ['@babel/plugin-transform-runtime', {
    useESModules: true,
    regenerator: false,
  }],
  '@babel/plugin-transform-arrow-functions',
  '@babel/plugin-transform-template-literals',
  [
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathSuffix: './src',
          rootPathPrefix: '@/',
        },
      ],
    },
  ],
];

module.exports = { presets, plugins };
