"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SavedApplication = _interopRequireDefault(require("./SavedApplication"));

var _ExistingApplication = _interopRequireDefault(require("./ExistingApplication"));

var _ContactDetails = _interopRequireDefault(require("./ContactDetails"));

var ContentDialog = function ContentDialog(_ref) {
  var inputKey = _ref.inputKey,
      continueDataForm = _ref.continueDataForm,
      getContinueDataForm = _ref.getContinueDataForm,
      handleValidateInputDate = _ref.handleValidateInputDate,
      handleNextPage = _ref.handleNextPage,
      categoryDialog = _ref.categoryDialog,
      closeDialog = _ref.closeDialog,
      history = _ref.history,
      handleDialog = _ref.handleDialog,
      countryCodes = _ref.countryCodes,
      autoFocus = _ref.autoFocus,
      preventSpecialCharacters = _ref.preventSpecialCharacters,
      leadingZeros = _ref.leadingZeros,
      restrictOnlyText = _ref.restrictOnlyText,
      scrollToError = _ref.scrollToError,
      translate = _ref.translate;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, categoryDialog === 'saved-application' && /*#__PURE__*/_react["default"].createElement(_SavedApplication["default"], {
    closeDialog: closeDialog,
    history: history,
    translate: translate
  }), categoryDialog === 'leaving-existing-application' && /*#__PURE__*/_react["default"].createElement(_ExistingApplication["default"], {
    closeDialog: closeDialog,
    translate: translate
  }), categoryDialog === 'contact-details' && /*#__PURE__*/_react["default"].createElement(_ContactDetails["default"], {
    closeDialog: closeDialog,
    history: history,
    countryCodes: countryCodes,
    autoFocus: autoFocus,
    preventSpecialCharacters: preventSpecialCharacters,
    leadingZeros: leadingZeros,
    restrictOnlyText: restrictOnlyText,
    scrollToError: scrollToError,
    translate: translate,
    continueDataForm: continueDataForm,
    getContinueDataForm: getContinueDataForm,
    handleValidateInputDate: handleValidateInputDate,
    handleNextPage: handleNextPage,
    inputKey: inputKey
  }));
};

ContentDialog.defaultProps = {
  categoryDialog: '',
  closeDialog: function closeDialog(_) {
    return _;
  },
  handleDialog: function handleDialog(_) {
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
  restrictOnlyText: function restrictOnlyText(_) {
    return _;
  },
  scrollToError: function scrollToError(_) {
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
ContentDialog.propTypes = {
  categoryDialog: _propTypes["default"].string,
  closeDialog: _propTypes["default"].func,
  history: _propTypes["default"].object.isRequired,
  handleDialog: _propTypes["default"].func,
  countryCodes: _propTypes["default"].array,
  autoFocus: _propTypes["default"].func,
  preventSpecialCharacters: _propTypes["default"].func,
  leadingZeros: _propTypes["default"].func,
  restrictOnlyText: _propTypes["default"].func,
  scrollToError: _propTypes["default"].func,
  translate: _propTypes["default"].func.isRequired,
  continueDataForm: _propTypes["default"].object,
  getContinueDataForm: _propTypes["default"].func,
  handleValidateInputDate: _propTypes["default"].func,
  handleNextPage: _propTypes["default"].func,
  inputKey: _propTypes["default"].number
};
var _default = ContentDialog;
exports["default"] = _default;