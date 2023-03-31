"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _index = require("../index");

var _styles = _interopRequireDefault(require("./styles"));

var SavedApplication = function SavedApplication(_ref) {
  var closeDialog = _ref.closeDialog,
      translate = _ref.translate;
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogContentContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogTitle
  }, translate('you-have-a-saved-application')), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.dialogDescription, 'mb-40')
  }, translate('continue-with-your-saved-application')), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogButton
  }, /*#__PURE__*/_react["default"].createElement(_index.Button, {
    backgroundClass: "bgGunmetalBluegrey",
    onClick: closeDialog
  }, translate('yes-continue')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-20 fw-600 d-flex align-center"
  }, /*#__PURE__*/_react["default"].createElement(_index.Link, {
    classHover: "linkUnderline",
    target: "",
    href: "/"
  }, translate('start-over')))));
};

SavedApplication.propTypes = {
  closeDialog: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired
};
var _default = SavedApplication;
exports["default"] = _default;