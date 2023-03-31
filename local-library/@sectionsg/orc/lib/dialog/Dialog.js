"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _reactTransitionGroup = require("react-transition-group");

var _propTypes = _interopRequireDefault(require("prop-types"));

/* eslint-disable react/prop-types */

/* babel-plugin-inline-import '../assets/images/close.svg' */
// import icons
var CloseIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0ia2N4dWQ1czZoYSIgZD0iTTE1Ljk1IDE4Yy4yMzMgMCAuNDE3LS4wODMuNTUtLjI1bDEuMjUtMS4yNWMuMTY3LS4xMzMuMjUtLjMxNy4yNS0uNTUgMC0uMjMzLS4wODMtLjQxNy0uMjUtLjU1TDEyLjQgMTBsNS4zNS01LjRjLjE2Ny0uMTMzLjI1LS4zMTcuMjUtLjU1IDAtLjIzMy0uMDgzLS40MTctLjI1LS41NUwxNi41IDIuMjVjLS4xMzMtLjE2Ny0uMzE3LS4yNS0uNTUtLjI1LS4yMzMgMC0uNDE3LjA4My0uNTUuMjVMMTAgNy42IDQuNiAyLjI1QzQuNDY3IDIuMDgzIDQuMjgzIDIgNC4wNSAyYy0uMjMzIDAtLjQxNy4wODMtLjU1LjI1TDIuMjUgMy41Yy0uMTY3LjEzMy0uMjUuMzE3LS4yNS41NSAwIC4yMzMuMDgzLjQxNy4yNS41NUw3LjYgMTBsLTUuMzUgNS40Yy0uMTY3LjEzMy0uMjUuMzE3LS4yNS41NSAwIC4yMzMuMDgzLjQxNy4yNS41NWwxLjI1IDEuMjVjLjEzMy4xNjcuMzE3LjI1LjU1LjI1LjIzMyAwIC40MTctLjA4My41NS0uMjVMMTAgMTIuNGw1LjQgNS4zNWMuMTMzLjE2Ny4zMTcuMjUuNTUuMjV6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTEwIC0zMzMpIHRyYW5zbGF0ZSg0NTAgMzAzKSB0cmFuc2xhdGUoNjYwIDMwKSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9IjcwYWJ4dWZwbWIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNrY3h1ZDVzNmhhIi8+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNEOUQ5RDkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMEgyMFYyMEgweiIgbWFzaz0idXJsKCM3MGFieHVmcG1iKSIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K";
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    dialogFade: {
      '&-enter': {
        opacity: 0
      },
      '&-enter-active': {
        opacity: 1,
        transition: 'opacity 200ms'
      },
      '&-fade-exit': {
        opacity: 1
      },
      '&-exit-active': {
        opacity: 0,
        transition: 'opacity 300ms'
      }
    },
    dialogOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100vw',
      overflow: 'auto',
      zIndex: '1200',
      background: 'rgba(255, 255, 255, 0.9)',
      '& .dialog-content': {
        '@media (max-width: 768px)': {
          paddingTop: '27px'
        }
      }
    },
    dialogContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'
    },
    dialog: (0, _defineProperty2["default"])({
      width: '640px',
      maxWidth: '100%',
      position: 'relative',
      padding: '40px',
      boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02)',
      backgroundColor: theme.palette.$lightWhite,
      borderRadius: '8px',
      textAlign: 'left',
      boxSizing: 'border-box'
    }, theme.breakpoints.down('sm'), {
      maxWidth: '85%',
      padding: '20px'
    }),
    closeBtn: {
      position: 'absolute',
      padding: '0',
      top: '30px',
      right: '20px',
      lineHeight: '12px',
      // remove empty space on top and bellow icon
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontSize: theme.typography.$fzH1,
      color: theme.palette.$veryLightPink,
      zIndex: '9',
      '&:focus': {
        outline: 'none'
      },
      '@media (max-width: 768px)': {
        top: '15px',
        right: '10px'
      }
    },
    iconStyle: {
      fontSize: '32px',
      color: theme.palette.$veryLightPink
    }
  };
}, 'dialog-component');

var Dialog = function Dialog(_ref) {
  var isOpen = _ref.isOpen,
      width = _ref.width,
      _ref$hasCloseBtn = _ref.hasCloseBtn,
      hasCloseBtn = _ref$hasCloseBtn === void 0 ? true : _ref$hasCloseBtn,
      onRequestClose = _ref.onRequestClose,
      children = _ref.children;

  var handleClose = function handleClose(event) {
    event.stopPropagation();
  };

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.TransitionGroup, {
    component: null,
    appear: true,
    exit: true
  }, isOpen && /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
    key: "overlay",
    timeout: 200,
    classNames: classes.dialogFade,
    onClick: onRequestClose,
    id: "common-dialog"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogOverlay
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick(event) {
      return handleClose(event);
    },
    className: classes.dialog,
    style: {
      width: width
    },
    "aria-hidden": "true"
  }, hasCloseBtn && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: classes.closeBtn,
    onClick: onRequestClose
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: CloseIcon,
    alt: "close",
    className: classes.iconStyle
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dialog-content"
  }, children))))));
};

Dialog.defaultProps = {
  isOpen: false,
  hasCloseBtn: true,
  onRequestClose: function onRequestClose(_) {
    return _;
  }
};
Dialog.propTypes = {
  isOpen: _propTypes["default"].bool,
  hasCloseBtn: _propTypes["default"].bool,
  onRequestClose: _propTypes["default"].func
};
var _default = Dialog;
exports["default"] = _default;