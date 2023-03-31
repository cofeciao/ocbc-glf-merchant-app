import React from 'react';
import PropTypes from 'prop-types';
import SavedApplication from './SavedApplication';
import ExistingApplication from './ExistingApplication';
import ContactDetails from './ContactDetails';

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
  return /*#__PURE__*/React.createElement(React.Fragment, null, categoryDialog === 'saved-application' && /*#__PURE__*/React.createElement(SavedApplication, {
    closeDialog: closeDialog,
    history: history,
    translate: translate
  }), categoryDialog === 'leaving-existing-application' && /*#__PURE__*/React.createElement(ExistingApplication, {
    closeDialog: closeDialog,
    translate: translate
  }), categoryDialog === 'contact-details' && /*#__PURE__*/React.createElement(ContactDetails, {
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
  categoryDialog: PropTypes.string,
  closeDialog: PropTypes.func,
  history: PropTypes.object.isRequired,
  handleDialog: PropTypes.func,
  countryCodes: PropTypes.array,
  autoFocus: PropTypes.func,
  preventSpecialCharacters: PropTypes.func,
  leadingZeros: PropTypes.func,
  restrictOnlyText: PropTypes.func,
  scrollToError: PropTypes.func,
  translate: PropTypes.func.isRequired,
  continueDataForm: PropTypes.object,
  getContinueDataForm: PropTypes.func,
  handleValidateInputDate: PropTypes.func,
  handleNextPage: PropTypes.func,
  inputKey: PropTypes.number
};
export default ContentDialog;