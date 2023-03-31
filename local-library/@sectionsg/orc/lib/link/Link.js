"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ArrowBackIos = _interopRequireDefault(require("@material-ui/icons/ArrowBackIos"));

var _ArrowForwardIos = _interopRequireDefault(require("@material-ui/icons/ArrowForwardIos"));

var _clsx = _interopRequireDefault(require("clsx"));

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    linkComponent: {
      color: theme.palette.$clearBlue,
      fontWeight: 'normal',
      transition: 'all 0.5s ease',
      textDecoration: 'none !important',
      cursor: 'pointer',
      display: 'inline',
      alignItems: 'center'
    },
    linkNotUnderLine: {
      '& .rightIcon': {
        marginLeft: '3px',
        transition: 'all 0.8s ease',
        width: '12px',
        height: 'auto'
      },
      '& .leftIcon': {
        marginRight: '3px',
        transition: 'all 0.8s ease',
        width: '12px',
        height: 'auto'
      },
      '&:hover': {
        color: theme.palette.$linkHover,
        '& .rightIcon': {
          color: theme.palette.$linkHover,
          transform: 'translateX(-5px)'
        },
        '& .leftIcon': {
          color: theme.palette.$linkHover,
          transform: 'translateX(-5px)'
        }
      },
      '&.battleship-grey': {
        color: theme.palette.$battleshipGrey,
        '&:hover': {
          color: theme.palette.$linkHover
        }
      },
      '&.cool-grey': {
        color: theme.palette.$coolGrey,
        '&:hover': {
          color: theme.palette.$linkHover
        }
      }
    },
    linkUnderline: {
      background: "linear-gradient( 180deg, transparent 1px, ".concat(theme.palette.$linkHover, " 1px, ").concat(theme.palette.$linkHover, " 2px, transparent 2px)"),
      backgroundPosition: 'left bottom',
      backgroundSize: '0% 3px',
      transition: 'background-size 0.3s ease-in-out',
      backgroundRepeat: 'no-repeat',
      paddingBottom: '2px',
      borderBottom: '3px solid transparent',
      fontSize: theme.typography.$fzH4,
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5,
        '@media (max-width: 768px)': {
          fontSize: function fontSize(fontSizeMB) {
            return fontSizeMB > 0 ? fontSizeMB : theme.typography.$fzH5;
          }
        }
      },
      '&:hover': {
        backgroundSize: '100% 3px',
        color: '#0056b3'
      }
    },
    fH4: {
      fontSize: theme.typography.$fzH4
    },
    fH5: {
      fontSize: theme.typography.$fzH5
    },
    fH6: {
      fontSize: theme.typography.$fzH6
    },
    clearBlue: {
      color: theme.palette.$clearBlue
    },
    leftIcon: {
      margin: '0 5px -2px 0'
    },
    rightIcon: {
      margin: '0 0 -2px -5px'
    },
    icon: {
      fontSize: function fontSize(fontSizeIcon) {
        return fontSizeIcon > 0 ? fontSizeIcon : theme.typography.$fzH5;
      }
    },
    linkUnderlineDefault: {
      fontSize: theme.typography.$fzH5,
      background: "linear-gradient( 180deg, transparent 1px, ".concat(theme.palette.$greyishBrown, " 1px, ").concat(theme.palette.$greyishBrown, " 2px, transparent 2px)"),
      backgroundPosition: 'right bottom',
      backgroundSize: '100% 3px',
      transition: 'background-size 0.3s ease-in-out',
      backgroundRepeat: 'no-repeat',
      paddingBottom: '2px',
      borderBottom: '3px solid transparent',
      color: theme.palette.$greyishBrown,
      lineHeight: '24px',
      '&:hover': {
        backgroundSize: '0% 3px'
      }
    },
    disabled: {
      cursor: 'no-drop',
      opacity: 0.3,
      pointerEvents: 'none'
    }
  };
});

var Link = function Link(_ref) {
  var href = _ref.href,
      children = _ref.children,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target,
      classHover = _ref.classHover,
      fontSize = _ref.fontSize,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      color = _ref.color,
      onClick = _ref.onClick,
      isOnClick = _ref.isOnClick,
      fontSizeIcon = _ref.fontSizeIcon,
      fontSizeMB = _ref.fontSizeMB,
      disabled = _ref.disabled;
  var classes = useStyles(fontSizeMB, fontSizeIcon);
  return isOnClick ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(classes.linkComponent, " \n        ").concat(classHover === 'linkUnderline' ? classes.linkUnderline : classHover === 'linkUnderlineDefault' ? classes.linkUnderlineDefault : classes.linkNotUnderLine, "\n        ").concat(classes[fontSize], "\n        ").concat(color, "\n        ").concat(disabled && classes.disabled, "\n        "),
    onClick: onClick,
    "aria-hidden": "true"
  }, leftIcon && /*#__PURE__*/_react["default"].createElement(_ArrowBackIos["default"], {
    className: (0, _clsx["default"])(classes.leftIcon, classes.icon)
  }), /*#__PURE__*/_react["default"].createElement("span", null, children), rightIcon && /*#__PURE__*/_react["default"].createElement(_ArrowForwardIos["default"], {
    className: (0, _clsx["default"])(classes.rightIcon, classes.icon)
  })) : /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    className: "".concat(classes.linkComponent, " \n        ").concat(classHover === 'linkUnderline' ? classes.linkUnderline : classes.linkNotUnderLine, "\n        ").concat(classes[fontSize], "\n        ").concat(color, "\n        ").concat(disabled && classes.disabled, "\n      ") // eslint-disable-next-line react/jsx-no-target-blank
    ,
    target: target
  }, leftIcon && /*#__PURE__*/_react["default"].createElement(_ArrowBackIos["default"], {
    className: (0, _clsx["default"])(classes.leftIcon, classes.icon)
  }), /*#__PURE__*/_react["default"].createElement("span", null, children), rightIcon && /*#__PURE__*/_react["default"].createElement(_ArrowForwardIos["default"], {
    className: (0, _clsx["default"])(classes.leftIcon, classes.icon)
  }));
};

Link.defaultProps = {
  leftIcon: false,
  rightIcon: false,
  target: '_blank',
  color: '',
  href: '',
  fontSize: '',
  onClick: function onClick(_) {
    return _;
  },
  isOnClick: false,
  fontSizeMB: 0,
  fontSizeIcon: 0,
  disabled: false
};
Link.propTypes = {
  href: _propTypes["default"].string,
  classHover: _propTypes["default"].string.isRequired,
  fontSize: _propTypes["default"].string,
  leftIcon: _propTypes["default"].bool,
  rightIcon: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  target: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  isOnClick: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  fontSizeMB: _propTypes["default"].number,
  fontSizeIcon: _propTypes["default"].number
};
var _default = Link;
exports["default"] = _default;