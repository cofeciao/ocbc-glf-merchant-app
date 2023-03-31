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
    infoStatusComponent: {
      width: '100%',
      height: '100%',
      padding: '40px 20px',
      borderRadius: '5px',
      background: theme.palette.$lightWhite,
      boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02)',
      '@media screen and (max-width: 768px)': {
        padding: '20px 10px'
      }
    },
    blockImage: {
      width: '80px',
      margin: '0 auto',
      '@media screen and (max-width: 768px)': {
        width: '55px'
      },
      '& img': {
        width: '100%',
        height: 'auto'
      }
    },
    blockContent: {
      marginTop: '20px',
      '@media screen and (max-width: 768px)': {
        marginTop: '10px'
      }
    },
    blockHeading: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1',
      height: 'calc(100% - 50px)'
    }
  };
});

var InfoStatus = function InfoStatus(_ref) {
  var imgSrc = _ref.imgSrc,
      children = _ref.children,
      contentFooter = _ref.contentFooter;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.infoStatusComponent
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.blockHeading
  }, imgSrc && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.blockImage
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: imgSrc,
    alt: "test"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.blockContent
  }, children)), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.blockFooter
  }, contentFooter));
};

InfoStatus.defaultProps = {
  imgSrc: ''
};
InfoStatus.propTypes = {
  imgSrc: _propTypes["default"].string
};
var _default = InfoStatus;
exports["default"] = _default;