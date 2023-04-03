"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _clsx = _interopRequireDefault(require("clsx"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _KeyboardArrowDownOutlined = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDownOutlined"));

var _styles = _interopRequireDefault(require("./styles"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/prop-types */
// IMPORT MATERIAL COMPONENTS
var useStyles = (0, _core.makeStyles)(function (theme) {
  return (0, _objectSpread2["default"])({}, (0, _styles["default"])(theme));
});

var SelectGroup = function SelectGroup(props) {
  var classes = useStyles();
  var matches = (0, _useMediaQuery["default"])('(max-width:768px)');
  var listValues = props.listValues,
      cardName = props.cardName,
      getValue = props.getValue,
      principalCard = props.principalCard,
      supplementaryCard = props.supplementaryCard,
      isCard = props.isCard,
      listValuesTabs = props.listValuesTabs,
      setActive = props.setActive; // DEFINE VARIABLES

  var _useState = (0, _react.useState)(cardName),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1]; // DEFINE FUNCTIONS


  var handleChange = function handleChange(event) {
    if (event.target) {
      setName(event.target.value);

      if (!isCard) {
        setActive(event.target.value);
      }

      getValue({
        value: event.target.value,
        name: event.target.name
      });
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    className: (0, _clsx["default"])(classes.formControl, !isCard ? classes.tabs : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.positionRelative
  }, !matches ? /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    id: "grouped-select",
    value: name,
    onChange: handleChange,
    MenuProps: {
      className: classes.dropdownStyleSingle
    },
    IconComponent: _KeyboardArrowDownOutlined["default"]
  }, /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], null, principalCard), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    className: classes.optionSelectMain,
    value: cardName
  }, cardName), /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], null, supplementaryCard), listValues && listValues.map(function (data, idx) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: idx,
      className: classes.optionSelect,
      value: data.name
    }, data.name);
  })) : /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    id: "grouped-select",
    value: name,
    onChange: handleChange,
    MenuProps: {
      className: classes.dropdownStyleSingle
    },
    IconComponent: _KeyboardArrowDownOutlined["default"],
    "native": true
  }, isCard ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("optgroup", {
    label: principalCard
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: cardName
  }, cardName)), /*#__PURE__*/_react["default"].createElement("optgroup", {
    label: supplementaryCard
  }, listValues && listValues.map(function (data, idx) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: idx,
      className: classes.optionSelect,
      value: data.name
    }, data.name);
  }))) : listValuesTabs && listValuesTabs.map(function (data, idx) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: idx,
      className: classes.optionSelect,
      value: data.value
    }, data.value);
  })))));
};

var _default = SelectGroup;
exports["default"] = _default;