"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SelectCountryCode = _interopRequireDefault(require("../select/SelectCountryCode"));

var _Input = _interopRequireDefault(require("./Input"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-shadow */
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    errorType: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6,
      margin: '3px 0 0'
    }
  };
}, 'input-number-mobile');

var InputNumberMobile = function InputNumberMobile(_ref) {
  var label = _ref.label,
      kind = _ref.kind,
      countryCodes = _ref.countryCodes,
      contactInformation = _ref.contactInformation,
      preventSpecialCharacters = _ref.preventSpecialCharacters,
      isPhoneSG = _ref.isPhoneSG,
      id = _ref.id,
      getContactInformation = _ref.getContactInformation,
      keyValidate = _ref.keyValidate,
      countryCode = _ref.countryCode,
      valueMobile = _ref.valueMobile,
      autoFocus = _ref.autoFocus,
      inputNameSelect = _ref.inputNameSelect,
      inputNameBase = _ref.inputNameBase,
      checkOnChange = _ref.checkOnChange;
  var classes = useStyles();

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "label-cs",
    id: "".concat(errorMessage ? 'errorType-label' : '')
  }, label), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 5,
    md: 5,
    sm: 5,
    xs: 5
  }, /*#__PURE__*/_react["default"].createElement(_SelectCountryCode["default"], {
    label: "",
    listValues: countryCodes,
    single: true,
    placeholder: "Please select",
    selectKey: keyValidate,
    autoFocus: autoFocus,
    name: inputNameSelect,
    defaultValue: contactInformation[countryCode],
    getValue: function getValue(value) {
      getContactInformation(countryCode, value.value);
    }
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 1,
    md: 1,
    sm: 1,
    xs: 1
  }), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 6,
    md: 6,
    sm: 6,
    xs: 6,
    className: "d-flex align-end",
    id: "mobileNumber"
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    label: "",
    placeholder: "",
    type: "number",
    size: "large",
    kind: kind,
    maxLength: 8,
    id: id,
    inputKey: keyValidate,
    preventSpecialCharacters: preventSpecialCharacters,
    value: contactInformation[valueMobile],
    valueInputCode: contactInformation[countryCode],
    isPhoneSG: isPhoneSG,
    name: inputNameBase,
    checkOnChange: checkOnChange,
    getValue: function getValue(value) {
      setErrorMessage(value.error);
      getContactInformation(valueMobile, value.value, value.error);
    }
  })), errorMessage && /*#__PURE__*/_react["default"].createElement("p", {
    className: classes.errorType
  }, errorMessage)));
};

InputNumberMobile.defaultProps = {
  label: '',
  kind: '',
  countryCodes: [],
  contactInformation: {},
  preventSpecialCharacters: function preventSpecialCharacters(_) {
    return _;
  },
  isPhoneSG: true,
  getContactInformation: function getContactInformation(_) {
    return _;
  },
  keyValidate: 0,
  countryCode: '',
  valueMobile: '',
  autoFocus: function autoFocus(_) {
    return _;
  },
  inputNameSelect: '',
  inputNameBase: '',
  checkOnChange: false,
  id: ''
};
InputNumberMobile.propTypes = {
  label: _propTypes["default"].string,
  kind: _propTypes["default"].string,
  // eslint-disable-next-line react/forbid-prop-types
  countryCodes: _propTypes["default"].any,
  // eslint-disable-next-line react/forbid-prop-types
  contactInformation: _propTypes["default"].any,
  preventSpecialCharacters: _propTypes["default"].func,
  isPhoneSG: _propTypes["default"].bool,
  getContactInformation: _propTypes["default"].func,
  keyValidate: _propTypes["default"].number,
  countryCode: _propTypes["default"].string,
  valueMobile: _propTypes["default"].string,
  autoFocus: _propTypes["default"].func,
  inputNameSelect: _propTypes["default"].string,
  inputNameBase: _propTypes["default"].string,
  checkOnChange: _propTypes["default"].bool,
  id: _propTypes["default"].string
};
var _default = InputNumberMobile;
exports["default"] = _default;