import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/prop-types */
import { FormLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import ReactCodeInput from 'react-verification-code-input';
import Link from '../link';
import useStyles from './styles';
import Dialog from '../dialog/Dialog';

var InputDigitSMS = function InputDigitSMS(_ref) {
  var type = _ref.type,
      fields = _ref.fields,
      className = _ref.className,
      label = _ref.label,
      phoneNumber = _ref.phoneNumber,
      minutes = _ref.minutes,
      getValue = _ref.getValue,
      isPassword = _ref.isPassword,
      notReceiveSMS = _ref.notReceiveSMS,
      resendOTP = _ref.resendOTP,
      remainingAttempts = _ref.remainingAttempts,
      statusError = _ref.statusError,
      defaultValue = _ref.defaultValue,
      icon = _ref.icon,
      iconClose = _ref.iconClose,
      handleClose = _ref.handleClose,
      placeholder = _ref.placeholder,
      showPopup = _ref.showPopup;
  var classes = useStyles();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(type),
      _useState4 = _slicedToArray(_useState3, 2),
      types = _useState4[0],
      setTypes = _useState4[1];

  var _useState5 = useState(statusError),
      _useState6 = _slicedToArray(_useState5, 2),
      errorInput = _useState6[0],
      setErrorInput = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      valueDigit = _useState8[0],
      setValueDigit = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hiddenPlaceholder = _useState10[0],
      setHiddenPlaceholder = _useState10[1];

  var _useState11 = useState(minutes * 60),
      _useState12 = _slicedToArray(_useState11, 2),
      counter = _useState12[0],
      setCounter = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      showCounter = _useState14[0],
      setShowCounter = _useState14[1];

  var _useState15 = useState(true),
      _useState16 = _slicedToArray(_useState15, 2),
      isOpen = _useState16[0],
      setIsOpen = _useState16[1];

  var handleHidePopup = function handleHidePopup() {
    setIsOpen(false);
  };

  useEffect(function () {
    setIsOpen(showPopup);
  }, [showPopup]);
  useEffect(function () {
    // eslint-disable-next-line no-unused-expressions
    counter > 0 && setTimeout(function () {
      return setCounter(counter - 1);
    }, 1000);

    if (counter <= 60) {
      setShowCounter(true);
    } else {
      setShowCounter(false);
    }
  }, [counter]);
  /**
  * Handle change typing input
  */

  var handleOnchange = function handleOnchange(value) {
    if (isPassword) {
      setTypes('password');
    }

    if (value) {
      setHiddenPlaceholder(true);
    } else {
      setHiddenPlaceholder(false);
    }

    if (value && value.length >= fields) {
      setLoading(true);
      getValue(value);
      setErrorInput(false);
    } else {
      setLoading(false);
    }
  };
  /**
  * Listening default value and status error
  */


  useEffect(function () {
    if (statusError) {
      setTypes('password');
    } else {
      setValueDigit('');
      setTypes('number');
    }
  }, [defaultValue, statusError]);
  /**
   * Check when statusError is true
   */

  useEffect(function () {
    setErrorInput(statusError);

    if (statusError) {
      setValueDigit(defaultValue);
    }
  }, [statusError]);
  /**
   * Element Callback - Listening event statusError
   */

  var ReactCodeInputCallBack = useCallback(function () {
    return /*#__PURE__*/React.createElement(ReactCodeInput, {
      onChange: handleOnchange,
      className: clsx(classes.codeInputComponent, className),
      type: type,
      values: defaultValue,
      fields: fields,
      autoFocus: false,
      placeholder: placeholder
    });
  }, [isPassword, types, valueDigit]);
  return /*#__PURE__*/React.createElement(Dialog, {
    isOpen: isOpen,
    width: 700,
    onRequestClose: handleHidePopup
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.formLoginBySMS
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/React.createElement(FormLabel, {
    className: classes.title,
    component: "legend"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: classes.iconScreen
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/React.createElement("p", null, "Enter the", ' ', fields, "-digit OTP we sent to", /*#__PURE__*/React.createElement("span", null, " \u2022\u2022\u2022\u2022 ".concat(phoneNumber))), counter > 1 && /*#__PURE__*/React.createElement("p", null, "It expires in", ' ', showCounter ? /*#__PURE__*/React.createElement("b", null, counter, ' ', counter <= 1 ? 'second' : 'seconds') : /*#__PURE__*/React.createElement("b", null, counter <= 120 ? minutes - 1 : minutes, ' ', "minutes"), "."), counter <= 1 && /*#__PURE__*/React.createElement("p", null, "Your OTP has now expired.")), /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.inputNumber, errorInput && classes.inputNumberError, isPassword && classes.changeFzPassword, hiddenPlaceholder && classes.hiddenPlaceholder)
  }, !loading && /*#__PURE__*/React.createElement(React.Fragment, null, statusError ? /*#__PURE__*/React.createElement(ReactCodeInputCallBack, null) : /*#__PURE__*/React.createElement(ReactCodeInput, {
    onChange: handleOnchange,
    className: clsx(classes.codeInputComponent, className),
    type: type,
    values: "",
    fields: fields,
    autoFocus: false,
    placeholder: placeholder
  })), loading && /*#__PURE__*/React.createElement("div", {
    className: classes.loading
  }, "Authorising...")), errorInput && /*#__PURE__*/React.createElement("div", {
    className: classes.err
  }, "Your OTP did not match. You have", ' ', remainingAttempts, ' ', "remaining attempt", remainingAttempts > 1 ? 's' : '', "."), /*#__PURE__*/React.createElement("div", {
    className: classes.contentResend
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.resend
  }, notReceiveSMS && counter > 1 ? /*#__PURE__*/React.createElement("p", {
    className: classes.notReceive
  }, "Did not receive the SMS?", /*#__PURE__*/React.createElement(Link, {
    classHover: "linkUnderline",
    isOnClick: true,
    target: "",
    fontSize: "fH6",
    onClick: function onClick() {
      return resendOTP();
    }
  }, "Resend OTP")) : /*#__PURE__*/React.createElement(Link, {
    classHover: "linkUnderline",
    isOnClick: true,
    target: "",
    fontSize: "fH6",
    onClick: function onClick() {
      return resendOTP();
    }
  }, "Resend OTP")))));
};

InputDigitSMS.defaultProps = {
  icon: '',
  getValue: function getValue(_) {
    return _;
  },
  label: 'Authorise login using SMS OTP',
  type: 'number',
  className: '',
  fields: 6,
  phoneNumber: '1234',
  minutes: 3,
  isPassword: false,
  notReceiveSMS: true,
  resendOTP: function resendOTP() {},
  statusError: true,
  remainingAttempts: 2,
  defaultValue: ['1', '2', '3', '4', '5', '6'],
  handleClose: function handleClose() {},
  placeholder: ['0', '0', '0', '0', '0', '0'],
  showPopup: true
};
InputDigitSMS.propTypes = {
  icon: PropTypes.string,
  getValue: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  fields: PropTypes.number,
  phoneNumber: PropTypes.string,
  minutes: PropTypes.number,
  isPassword: PropTypes.bool,
  notReceiveSMS: PropTypes.bool,
  resendOTP: PropTypes.func,
  remainingAttempts: PropTypes.number,
  statusError: PropTypes.bool,
  defaultValue: PropTypes.array,
  handleClose: PropTypes.func,
  placeholder: PropTypes.array,
  showPopup: PropTypes.bool
};
export default InputDigitSMS;