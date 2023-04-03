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

var ExistingApplication = function ExistingApplication(_ref) {
  var closeDialog = _ref.closeDialog,
      translate = _ref.translate;
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogContentContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogTitle
  }, translate('you-are-leaving-this-application')), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.dialogDescription, 'mb-40')
  }, translate('save-your-progress-and-continue-later')), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogButton
  }, /*#__PURE__*/_react["default"].createElement(_index.Button, {
    backgroundClass: "bgGunmetalBluegrey",
    onClick: function onClick() {
      return closeDialog();
    }
  }, translate('yes-save-application')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-20 fw-600 d-flex align-center"
  }, /*#__PURE__*/_react["default"].createElement(_index.Link, {
    classHover: "linkUnderline",
    target: "",
    href: "/"
  }, translate('leave-anyway')))));
};

ExistingApplication.propTypes = {
  closeDialog: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired
};
var _default = ExistingApplication;
exports["default"] = _default;