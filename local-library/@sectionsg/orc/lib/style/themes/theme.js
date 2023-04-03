"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styles = require("@material-ui/core/styles");

var _theme = _interopRequireDefault(require("../constants/theme"));

// A custom theme for this app
var theme = (0, _styles.createMuiTheme)((0, _objectSpread2["default"])({}, _theme["default"]));
var _default = theme;
exports["default"] = _default;