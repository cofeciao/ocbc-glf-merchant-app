"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PaymentPeriodSlider;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Desktop = _interopRequireDefault(require("./Desktop"));

var _Mobile = _interopRequireDefault(require("./Mobile"));

var _excluded = ["isMobile"];

function PaymentPeriodSlider(_ref) {
  var isMobile = _ref.isMobile,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return isMobile ? /*#__PURE__*/_react["default"].createElement(_Mobile["default"], props) : /*#__PURE__*/_react["default"].createElement(_Desktop["default"], props);
}

PaymentPeriodSlider.defaultProps = {
  isMobile: false
};
PaymentPeriodSlider.propStyles = {
  isMobile: _propTypes["default"].bool
};