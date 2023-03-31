"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _index = require("../index");

var _styles = _interopRequireDefault(require("./styles"));

var SavedApplication = function SavedApplication(_ref) {
  var inputKey = _ref.inputKey,
      continueDataForm = _ref.continueDataForm,
      getContinueDataForm = _ref.getContinueDataForm,
      handleValidateInputDate = _ref.handleValidateInputDate,
      handleNextPage = _ref.handleNextPage,
      closeDialog = _ref.closeDialog,
      countryCodes = _ref.countryCodes,
      autoFocus = _ref.autoFocus,
      preventSpecialCharacters = _ref.preventSpecialCharacters,
      leadingZeros = _ref.leadingZeros,
      translate = _ref.translate;
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogContentContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogTitle
  }, translate('continue-with-your-application-later')), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.dialogDescription)
  }, translate('this-will-save-and-close-your-application')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    className: "mt-30"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_index.InputBase, {
    label: "Name",
    placeholder: "",
    type: "text",
    maxLength: 70,
    id: (0, _uuid.v4)(),
    inputKey: inputKey,
    value: continueDataForm.name,
    size: "large",
    name: "name",
    kind: "name-nric",
    getValue: function getValue(value) {
      getContinueDataForm('name', value.value, value.error);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    className: "mt-30"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_index.InputBase, {
    label: "Email address",
    placeholder: "",
    type: "email",
    size: "large",
    name: "emailAddress",
    inputKey: inputKey,
    kind: "email",
    value: continueDataForm.email,
    id: (0, _uuid.v4)(),
    getValue: function getValue(value) {
      getContinueDataForm('email', value.value, value.error);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    className: "mt-30"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_index.InputNumberMobile, {
    label: "Mobile number",
    countryCodes: countryCodes,
    contactInformation: continueDataForm,
    getContactInformation: getContinueDataForm,
    preventSpecialCharacters: preventSpecialCharacters,
    inputNameSelect: "mobile-1",
    inputNameBase: "mobile-2",
    keyValidate: inputKey,
    id: (0, _uuid.v4)(),
    autoFocus: autoFocus,
    countryCode: "countryMobileNumber",
    valueMobile: "mobileNumber",
    kind: "phone-ec"
  }))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    className: "mt-30"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_index.InputBase, {
    label: "NRIC or passport number",
    placeholder: "",
    type: "text",
    size: "medium",
    inputKey: inputKey,
    id: (0, _uuid.v4)(),
    maxLength: 15,
    kind: "required",
    name: "nric",
    value: continueDataForm.nric,
    getValue: function getValue(value) {
      getContinueDataForm('nric', value.value, value.error);
    }
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 1,
    md: 1,
    sm: 12,
    xs: 12
  }), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "label-cs mt-mb-30"
  }, translate('date-of-birth')), /*#__PURE__*/_react["default"].createElement(_index.InputDate, {
    leadingZeros: leadingZeros,
    preventSpecialCharacters: preventSpecialCharacters,
    handleValidateInputDate: handleValidateInputDate,
    autoFocus: autoFocus,
    inputKey: inputKey,
    getValueInput: getContinueDataForm,
    objectData: continueDataForm,
    nameInputDate: "continue-1",
    nameInputMonth: "continue-2",
    nameInputYear: "continue-3"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.dialogButton
  }, /*#__PURE__*/_react["default"].createElement(_index.Button, {
    backgroundClass: "bgGunmetalBluegrey",
    onClick: handleNextPage
  }, translate('okay')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-20 fw-600 d-flex align-center"
  }, /*#__PURE__*/_react["default"].createElement(_index.Link, {
    classHover: "linkUnderline",
    target: "",
    href: "/",
    isOnClick: true,
    onClick: closeDialog
  }, translate('cancel')))));
};

SavedApplication.defaultProps = {
  closeDialog: function closeDialog(_) {
    return _;
  },
  countryCodes: [],
  autoFocus: function autoFocus(_) {
    return _;
  },
  preventSpecialCharacters: function preventSpecialCharacters(_) {
    return _;
  },
  leadingZeros: function leadingZeros(_) {
    return _;
  },
  continueDataForm: {},
  getContinueDataForm: function getContinueDataForm(_) {
    return _;
  },
  handleValidateInputDate: function handleValidateInputDate(_) {
    return _;
  },
  handleNextPage: function handleNextPage(_) {
    return _;
  },
  inputKey: null
};
SavedApplication.propTypes = {
  closeDialog: _propTypes["default"].func,
  countryCodes: _propTypes["default"].array,
  autoFocus: _propTypes["default"].func,
  preventSpecialCharacters: _propTypes["default"].func,
  leadingZeros: _propTypes["default"].func,
  continueDataForm: _propTypes["default"].object,
  getContinueDataForm: _propTypes["default"].func,
  handleValidateInputDate: _propTypes["default"].func,
  handleNextPage: _propTypes["default"].func,
  translate: _propTypes["default"].func.isRequired,
  inputKey: _propTypes["default"].number
};
var _default = SavedApplication;
exports["default"] = _default;