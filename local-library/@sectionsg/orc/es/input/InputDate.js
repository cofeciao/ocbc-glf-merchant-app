import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input'; // import icons

var useStyles = makeStyles(function (theme) {
  return {
    textBlur: {
      lineHeight: '1.71',
      fontSize: theme.typography.$fzH6,
      color: theme.palette.$lightGreyBlue,
      marginTop: '5px'
    },
    label: {
      fontSize: theme.typography.$fzH6,
      marginBottom: '10px',
      lineHeight: '14px'
    },
    mr20: {
      marginRight: '20px'
    },
    errorType: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6,
      marginTop: '3px',
      lineHeight: '1.71'
    },
    distanceErr: {
      marginTop: '10px'
    }
  };
}, 'input-date');

var getAge = function getAge(birthDateString) {
  var today = new Date();
  var birthDate = new Date(birthDateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
    // eslint-disable-next-line no-plusplus
    age--;
  }

  return age;
};

var InputDate = function InputDate(_ref) {
  var leadingZeros = _ref.leadingZeros,
      preventSpecialCharacters = _ref.preventSpecialCharacters,
      autoFocus = _ref.autoFocus,
      getValueInput = _ref.getValueInput,
      objectData = _ref.objectData,
      checkValueYear = _ref.checkValueYear,
      label = _ref.label,
      type = _ref.type,
      inputKey = _ref.inputKey,
      nameInputDate = _ref.nameInputDate,
      nameInputMonth = _ref.nameInputMonth,
      nameInputYear = _ref.nameInputYear,
      handleValidateInputDate = _ref.handleValidateInputDate,
      nameType = _ref.nameType,
      errorData = _ref.errorData,
      showAlways = _ref.showAlways,
      distanceErr = _ref.distanceErr;
  var classes = useStyles();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      blurYear = _useState2[0],
      setBlurYear = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      blurMonth = _useState4[0],
      setBlurMonth = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      blurDay = _useState6[0],
      setBlurDay = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      errorText = _useState8[0],
      setErrorText = _useState8[1];

  var inputDateFull = "".concat(objectData.date, "-").concat(objectData.month, "-").concat(objectData.year);
  var hasData = objectData.date && objectData.month && objectData.year;
  useEffect(function () {
    if (inputKey && !hasData) {
      handleValidateInputDate(false);
      setErrorText('This field is required');
    } else {
      handleValidateInputDate(false);
      setErrorText('');
    }

    if (objectData.date && objectData.month && objectData.year) {
      var yearOld = getAge("".concat(objectData.year, "-").concat(objectData.month, "-").concat(objectData.date));

      if (blurYear || blurMonth || blurDay) {
        if (moment(inputDateFull, 'DD-MM-YYYY', true).isValid()) {
          if (nameType !== 'date of birth') {
            if (moment(inputDateFull, 'DD-MM-YYYY').isBefore(moment().subtract(1, 'days'))) {
              setErrorText("Please enter a valid ".concat(nameType));
              handleValidateInputDate(false);
            } else {
              handleValidateInputDate(true);
              setErrorText('');
            }
          }

          if (nameType === 'date of birth') {
            if (yearOld > 99) {
              handleValidateInputDate(false);
              setErrorText('The maximum age is 99');
            } else if (moment(inputDateFull, 'DD-MM-YYYY').isAfter(moment())) {
              handleValidateInputDate(false);
              setErrorText("Please enter a valid ".concat(nameType));
            } else {
              handleValidateInputDate(true);
              setErrorText('');
            }
          }
        } else {
          handleValidateInputDate(false);
          setErrorText("Please enter a valid ".concat(nameType));
        }
      }
    }
  }, [objectData, inputKey]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement("div", {
    className: classes.label
  }, label), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    id: "".concat(errorText ? 'errorType-label' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: type === 'medium' && classes.mr20
  }, /*#__PURE__*/React.createElement(Input, {
    label: "",
    errorData: errorData,
    maxLength: 2,
    placeholder: "DD",
    name: nameInputDate,
    leadingZeros: leadingZeros,
    preventSpecialCharacters: preventSpecialCharacters,
    value: objectData.date,
    autoFocus: autoFocus,
    onBlur: setBlurDay,
    type: "number",
    size: "small",
    width: 70,
    id: uuidv4(),
    kind: "day",
    getValue: function getValue(value) {
      return getValueInput('date', value.value, value.error);
    }
  }), (!objectData.errordate || objectData.errordate === undefined || showAlways) && /*#__PURE__*/React.createElement("div", {
    className: classes.textBlur
  }, "Day")), /*#__PURE__*/React.createElement("div", {
    className: type === 'medium' && classes.mr20
  }, /*#__PURE__*/React.createElement(Input, {
    label: "",
    maxLength: 2,
    placeholder: "MM",
    type: "number",
    errorData: errorData,
    name: nameInputMonth,
    size: "small",
    kind: "month",
    width: 70,
    id: uuidv4(),
    onBlur: setBlurMonth,
    autoFocus: autoFocus,
    leadingZeros: leadingZeros,
    preventSpecialCharacters: preventSpecialCharacters,
    value: objectData.month,
    getValue: function getValue(value) {
      return getValueInput('month', value.value, value.error);
    }
  }), (!objectData.errormonth || objectData.errormonth === undefined || showAlways) && /*#__PURE__*/React.createElement("div", {
    className: classes.textBlur
  }, "Month")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    label: "",
    maxLength: 4,
    placeholder: "YYYY",
    type: "number",
    size: "small",
    errorData: errorData,
    id: uuidv4(),
    value: objectData.year,
    checkValueYear: checkValueYear,
    kind: "year",
    width: 70,
    name: nameInputYear,
    autoFocus: autoFocus,
    onBlur: setBlurYear,
    preventSpecialCharacters: preventSpecialCharacters,
    getValue: function getValue(value) {
      return getValueInput('year', value.value, value.error);
    }
  }), (!objectData.erroryear || objectData.erroryear === undefined || showAlways) && /*#__PURE__*/React.createElement("div", {
    className: classes.textBlur
  }, "Year"))), errorText && /*#__PURE__*/React.createElement("p", {
    className: "".concat(classes.errorType, " ").concat(distanceErr && classes.distanceErr)
  }, errorText));
};

InputDate.defaultProps = {
  leadingZeros: function leadingZeros(_) {
    return _;
  },
  preventSpecialCharacters: function preventSpecialCharacters(_) {
    return _;
  },
  autoFocus: function autoFocus(_) {
    return _;
  },
  getValueInput: function getValueInput(_) {
    return _;
  },
  objectData: {},
  checkValueYear: function checkValueYear(_) {
    return _;
  },
  handleValidateInputDate: function handleValidateInputDate(_) {
    return _;
  },
  label: '',
  type: 'medium',
  inputKey: 0,
  nameInputDate: 'ssn-1',
  nameInputMonth: 'ssn-2',
  nameInputYear: 'ssn-3',
  nameType: 'date of birth',
  showAlways: false,
  distanceErr: false
};
InputDate.propTypes = {
  leadingZeros: PropTypes.func,
  preventSpecialCharacters: PropTypes.func,
  autoFocus: PropTypes.func,
  getValueInput: PropTypes.func,
  objectData: PropTypes.object,
  checkValueYear: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  inputKey: PropTypes.number,
  nameInputDate: PropTypes.string,
  nameInputMonth: PropTypes.string,
  nameInputYear: PropTypes.string,
  handleValidateInputDate: PropTypes.func,
  nameType: PropTypes.string,
  showAlways: PropTypes.bool,
  distanceErr: PropTypes.bool
};
export default InputDate;