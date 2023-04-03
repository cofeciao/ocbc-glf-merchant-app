"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("./styles");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return (0, _core.createStyles)((0, _objectSpread2["default"])({}, (0, _styles.stylesPopup)(theme)));
});

var FailMessageB = function FailMessageB() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogContentContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogTitle
  }, "Earn 50 OCBC$ (worth 20 miles) for every S$5 spent on eligible purchases"), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogDescription
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."));
};

var _default = FailMessageB;
exports["default"] = _default;