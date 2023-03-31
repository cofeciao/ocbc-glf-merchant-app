"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../index");

var ContinueLater = function ContinueLater(_ref) {
  var handleContinueLater = _ref.handleContinueLater,
      translate = _ref.translate;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Link, {
    href: "/",
    classHover: "linkUnderline",
    target: "",
    fontSizeMB: 14,
    isOnClick: true,
    onClick: handleContinueLater
  }, translate('continue-later')));
};

ContinueLater.propTypes = {
  handleContinueLater: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired
};
var _default = ContinueLater;
exports["default"] = _default;