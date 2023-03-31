"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

// import modules
// render UI
var CheckBoxField = function CheckBoxField(_ref) {
  var item = _ref.item,
      classes = _ref.classes,
      index = _ref.index,
      handleChange = _ref.handleChange,
      lg = _ref.lg,
      md = _ref.md,
      sm = _ref.sm,
      xs = _ref.xs,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: lg,
    md: md,
    sm: sm,
    xs: xs,
    className: (0, _clsx["default"])(classes.radioItem, className),
    key: index
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    className: (0, _clsx["default"])(classes.fromControlLabel, item.checked && classes.checkBoxChecked),
    key: index,
    value: item.text,
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      icon: /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _clsx["default"])(classes.icon, item.checked && classes.checkedIcon)
      }),
      onChange: handleChange,
      name: item.label,
      checked: item.checked
    }),
    label: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _clsx["default"])(classes.label, item.checked && classes.labelChecked)
    }, item.label))
  }));
};

CheckBoxField.defaultProps = {
  item: {},
  index: 0,
  classes: {},
  handleChange: function handleChange() {},
  lg: 12,
  md: 12,
  sm: 12,
  xs: 12,
  className: ''
};
CheckBoxField.propTypes = {
  item: _propTypes["default"].object,
  index: _propTypes["default"].number,
  classes: _propTypes["default"].object,
  handleChange: _propTypes["default"].func,
  lg: _propTypes["default"].number,
  md: _propTypes["default"].number,
  sm: _propTypes["default"].number,
  xs: _propTypes["default"].number,
  className: _propTypes["default"].string
};
var _default = CheckBoxField;
exports["default"] = _default;