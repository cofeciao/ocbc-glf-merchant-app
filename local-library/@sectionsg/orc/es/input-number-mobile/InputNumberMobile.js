import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SelectCountryCode from '../select/SelectCountryCode';
import InputBase from './Input';
var useStyles = makeStyles(function (theme) {
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

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "label-cs",
    id: "".concat(errorMessage ? 'errorType-label' : '')
  }, label), /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 5,
    md: 5,
    sm: 5,
    xs: 5
  }, /*#__PURE__*/React.createElement(SelectCountryCode, {
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
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 1,
    md: 1,
    sm: 1,
    xs: 1
  }), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 6,
    md: 6,
    sm: 6,
    xs: 6,
    className: "d-flex align-end",
    id: "mobileNumber"
  }, /*#__PURE__*/React.createElement(InputBase, {
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
  })), errorMessage && /*#__PURE__*/React.createElement("p", {
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
  label: PropTypes.string,
  kind: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  countryCodes: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  contactInformation: PropTypes.any,
  preventSpecialCharacters: PropTypes.func,
  isPhoneSG: PropTypes.bool,
  getContactInformation: PropTypes.func,
  keyValidate: PropTypes.number,
  countryCode: PropTypes.string,
  valueMobile: PropTypes.string,
  autoFocus: PropTypes.func,
  inputNameSelect: PropTypes.string,
  inputNameBase: PropTypes.string,
  checkOnChange: PropTypes.bool,
  id: PropTypes.string
};
export default InputNumberMobile;