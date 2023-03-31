import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import { Button, InputBase, InputNumberMobile, InputDate, Link } from '../index';
import useStyles from './styles';

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
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.dialogContentContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.dialogTitle
  }, translate('continue-with-your-application-later')), /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.dialogDescription)
  }, translate('this-will-save-and-close-your-application')), /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: "mt-30"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/React.createElement(InputBase, {
    label: "Name",
    placeholder: "",
    type: "text",
    maxLength: 70,
    id: uuidv4(),
    inputKey: inputKey,
    value: continueDataForm.name,
    size: "large",
    name: "name",
    kind: "name-nric",
    getValue: function getValue(value) {
      getContinueDataForm('name', value.value, value.error);
    }
  }))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: "mt-30"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/React.createElement(InputBase, {
    label: "Email address",
    placeholder: "",
    type: "email",
    size: "large",
    name: "emailAddress",
    inputKey: inputKey,
    kind: "email",
    value: continueDataForm.email,
    id: uuidv4(),
    getValue: function getValue(value) {
      getContinueDataForm('email', value.value, value.error);
    }
  }))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: "mt-30"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/React.createElement(InputNumberMobile, {
    label: "Mobile number",
    countryCodes: countryCodes,
    contactInformation: continueDataForm,
    getContactInformation: getContinueDataForm,
    preventSpecialCharacters: preventSpecialCharacters,
    inputNameSelect: "mobile-1",
    inputNameBase: "mobile-2",
    keyValidate: inputKey,
    id: uuidv4(),
    autoFocus: autoFocus,
    countryCode: "countryMobileNumber",
    valueMobile: "mobileNumber",
    kind: "phone-ec"
  }))), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: "mt-30"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/React.createElement(InputBase, {
    label: "NRIC or passport number",
    placeholder: "",
    type: "text",
    size: "medium",
    inputKey: inputKey,
    id: uuidv4(),
    maxLength: 15,
    kind: "required",
    name: "nric",
    value: continueDataForm.nric,
    getValue: function getValue(value) {
      getContinueDataForm('nric', value.value, value.error);
    }
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 1,
    md: 1,
    sm: 12,
    xs: 12
  }), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-cs mt-mb-30"
  }, translate('date-of-birth')), /*#__PURE__*/React.createElement(InputDate, {
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
  })))), /*#__PURE__*/React.createElement("div", {
    className: classes.dialogButton
  }, /*#__PURE__*/React.createElement(Button, {
    backgroundClass: "bgGunmetalBluegrey",
    onClick: handleNextPage
  }, translate('okay')), /*#__PURE__*/React.createElement("div", {
    className: "ml-20 fw-600 d-flex align-center"
  }, /*#__PURE__*/React.createElement(Link, {
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
  closeDialog: PropTypes.func,
  countryCodes: PropTypes.array,
  autoFocus: PropTypes.func,
  preventSpecialCharacters: PropTypes.func,
  leadingZeros: PropTypes.func,
  continueDataForm: PropTypes.object,
  getContinueDataForm: PropTypes.func,
  handleValidateInputDate: PropTypes.func,
  handleNextPage: PropTypes.func,
  translate: PropTypes.func.isRequired,
  inputKey: PropTypes.number
};
export default SavedApplication;