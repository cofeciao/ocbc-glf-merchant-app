"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("../button/Button"));

var _Dialog = _interopRequireDefault(require("../dialog/Dialog"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    formExceededNumber: {
      paddingBottom: '20px',
      '& p': {
        fontSize: theme.typography.$fzH5,
        fontWeight: 'normal',
        lineHeight: '1.75',
        textAlign: 'center',
        color: theme.palette.$greyishBrown,
        margin: '16px 0 0 0',
        fontFamily: theme.typography.fontFamily,
        '&:first-child': {
          margin: '20px 0 0 0'
        },
        '@media (max-width: 414px)': {
          fontSize: theme.typography.$fzH6,
          lineHeight: '20px'
        },
        '& b': {
          fontWeight: 'bold',
          lineHeight: '1.5',
          fontFamily: theme.typography.fontFamily,
          '@media (max-width: 414px)': {
            lineHeight: '20px'
          }
        },
        '& a': {
          fontWeight: 'bold',
          lineHeight: '1.5',
          fontFamily: theme.typography.fontFamily,
          textDecoration: 'none'
        }
      }
    },
    content: {
      maxWidth: '620px',
      marginLeft: 'auto',
      marginRight: 'auto',
      '& p': {
        '& a': {
          fontSize: theme.typography.$fzH5,
          lineHeight: '1.75',
          textAlign: 'center',
          margin: '16px 0 0 0',
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.$clearBlue,
          fontWeight: 'normal',
          background: "linear-gradient( 180deg, transparent 1px, ".concat(theme.palette.$linkHover, " 1px, ").concat(theme.palette.$linkHover, " 2px, transparent 2px)"),
          backgroundPosition: 'left bottom',
          backgroundSize: '0% 3px',
          transition: 'background-size 0.3s ease-in-out',
          backgroundRepeat: 'no-repeat',
          paddingBottom: '2px',
          borderBottom: '3px solid transparent',
          '&:hover': {
            backgroundSize: '100% 3px',
            color: '#0056b3'
          }
        }
      }
    },
    wrapBtn: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
      '& button': {
        margin: '0 11px',
        '& span': {
          fontFamily: theme.typography.fontFamily
        }
      },
      '@media (max-width: 414px)': {
        '& button': {
          '&:first-child': {
            marginLeft: 0
          },
          '&:last-child': {
            marginRight: 0
          }
        }
      }
    },
    phone: {
      display: 'flex',
      justifyContent: 'center',
      '& a': {
        fontSize: theme.typography.$fzH5,
        fontWeight: 'normal',
        lineHeight: '1.5',
        color: theme.palette.$clearBlue,
        textDecoration: 'none',
        fontFamily: theme.typography.fontFamily,
        '@media (max-width: 414px)': {
          lineHeight: '20px',
          fontSize: theme.typography.$fzH6
        }
      }
    },
    iconAlert: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '40px',
      '@media (max-width: 414px)': {
        marginTop: '20px'
      }
    },
    returnHome: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      fontSize: theme.typography.$fzH2,
      fontWeight: 'bold',
      lineHeight: '1.42',
      textAlign: 'center',
      color: theme.palette.$greyishBrown,
      position: 'relative',
      zIndex: '1',
      paddingTop: '20px',
      '@media (max-width: 414px)': {
        fontSize: theme.typography.$fzH4
      }
    }
  };
}, 'exceeded-number-of-tries');

var ExceededNumberOfTries = function ExceededNumberOfTries(_ref) {
  var isBackToTransfers = _ref.isBackToTransfers,
      label = _ref.label,
      description = _ref.description,
      localTollFree = _ref.localTollFree,
      overseas = _ref.overseas,
      numberLocalTollFree = _ref.numberLocalTollFree,
      numberOverseas = _ref.numberOverseas,
      backToHome = _ref.backToHome,
      backToTransfer = _ref.backToTransfer,
      handleBackToHome = _ref.handleBackToHome,
      handleBackToTransfers = _ref.handleBackToTransfers,
      icon = _ref.icon,
      showPopup = _ref.showPopup;
  var classes = useStyles();
  var history = (0, _reactRouterDom.useHistory)();

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleHidePopup = function handleHidePopup() {
    setIsOpen(false);
  };

  (0, _react.useEffect)(function () {
    setIsOpen(showPopup);
  }, [showPopup]);
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    isOpen: isOpen,
    width: 700,
    onRequestClose: handleHidePopup
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.formExceededNumber
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.header
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: icon,
    alt: "",
    className: classes.iconAlert
  }), /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    className: classes.title,
    component: "legend"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.content,
    dangerouslySetInnerHTML: {
      __html: description
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.contact
  }, numberLocalTollFree && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, localTollFree)), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.phone
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "tel:".concat(numberLocalTollFree)
  }, numberLocalTollFree))), numberOverseas && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, overseas)), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.phone
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "tel:".concat(numberLocalTollFree)
  }, numberOverseas))))), !isBackToTransfers ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, backToHome && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.returnHome
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    backgroundClass: "bgGreyThickToLight",
    onClick: function onClick() {
      return handleBackToTransfers();
    }
  }, backToHome))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: backToTransfer || backToHome ? classes.wrapBtn : ''
  }, backToTransfer && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    backgroundClass: "bgGreyThickToLight",
    onClick: function onClick() {
      return history.push(hrefBackToTransfer);
    }
  }, backToTransfer), backToHome && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    backgroundClass: "bgClearblue",
    onClick: function onClick() {
      return handleBackToHome();
    }
  }, backToHome)))));
};

ExceededNumberOfTries.defaultProps = {
  showPopup: true,
  icon: '',
  label: 'Exceeded number of tries',
  description: 'Get in touch with us to unlock your OTP in order to proceed with using it again',
  localTollFree: 'Local toll-free',
  numberLocalTollFree: '1800 363 3333',
  numberOverseas: '1800 363 3333',
  overseas: 'Overseas',
  backToHome: 'Back to Home',
  isBackToTransfers: true,
  handleBackToTransfers: function handleBackToTransfers() {},
  handleBackToHome: function handleBackToHome() {},
  backToTransfer: 'Back to Transfers'
};
ExceededNumberOfTries.propTypes = {
  showPopup: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  description: _propTypes["default"].string,
  localTollFree: _propTypes["default"].string,
  numberLocalTollFree: _propTypes["default"].string,
  overseas: _propTypes["default"].string,
  numberOverseas: _propTypes["default"].string,
  backToHome: _propTypes["default"].string,
  isBackToTransfers: _propTypes["default"].bool,
  handleBackToTransfers: _propTypes["default"].func,
  backToTransfer: _propTypes["default"].string,
  handleBackToHome: _propTypes["default"].func
};
var _default = ExceededNumberOfTries;
exports["default"] = _default;