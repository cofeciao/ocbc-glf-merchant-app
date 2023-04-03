"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    title: {
      fontSize: theme.typography.$fzH2,
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.42',
      letterSpacing: 'normal'
    },
    description: {
      fontSize: theme.typography.$fzH4,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.67',
      letterSpacing: 'normal',
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH6,
        '& br': {
          display: 'none'
        }
      }
    },
    mb40: {
      marginBottom: '40px'
    },
    blockTitle: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px'
    },
    ml20: {
      marginLeft: '20px'
    },
    buttonWrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    image: {
      marginRight: '20px',
      '@media (max-width: 768px)': {
        flex: '0 0 55px',
        maxWidth: '55px'
      },
      ' & img': {
        width: '100%',
        height: 'auto'
      }
    }
  };
}, 'main-content');

var MainContent = function MainContent(_ref) {
  var srcImage = _ref.srcImage,
      title = _ref.title,
      content = _ref.content;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.blockTitle
  }, srcImage && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.image
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: srcImage,
    alt: "#"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.title
  }, title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.content
  }, content));
};

MainContent.defaultProps = {
  srcImage: '',
  title: ''
};
MainContent.propTypes = {
  srcImage: _propTypes["default"].string,
  title: _propTypes["default"].string
};
var _default = MainContent;
exports["default"] = _default;