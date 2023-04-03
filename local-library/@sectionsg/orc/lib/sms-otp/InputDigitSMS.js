"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _reactVerificationCodeInput = _interopRequireDefault(require("react-verification-code-input"));

var _link = _interopRequireDefault(require("../link"));

var _styles = _interopRequireDefault(require("./styles"));

var _Dialog = _interopRequireDefault(require("../dialog/Dialog"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/prop-types */
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
  var classes = (0, _styles["default"])();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(type),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      types = _useState4[0],
      setTypes = _useState4[1];

  var _useState5 = (0, _react.useState)(statusError),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      errorInput = _useState6[0],
      setErrorInput = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      valueDigit = _useState8[0],
      setValueDigit = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      hiddenPlaceholder = _useState10[0],
      setHiddenPlaceholder = _useState10[1];

  var _useState11 = (0, _react.useState)(minutes * 60),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      counter = _useState12[0],
      setCounter = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      showCounter = _useState14[0],
      setShowCounter = _useState14[1];

  var _useState15 = (0, _react.useState)(true),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      isOpen = _useState16[0],
      setIsOpen = _useState16[1];

  var handleHidePopup = function handleHidePopup() {
    setIsOpen(false);
  };

  (0, _react.useEffect)(function () {
    setIsOpen(showPopup);
  }, [showPopup]);
  (0, _react.useEffect)(function () {
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


  (0, _react.useEffect)(function () {
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

  (0, _react.useEffect)(function () {
    setErrorInput(statusError);

    if (statusError) {
      setValueDigit(defaultValue);
    }
  }, [statusError]);
  /**
   * Element Callback - Listening event statusError
   */

  var ReactCodeInputCallBack = (0, _react.useCallback)(function () {
    return /*#__PURE__*/_react["default"].createElement(_reactVerificationCodeInput["default"], {
      onChange: handleOnchange,
      className: (0, _clsx["default"])(classes.codeInputComponent, className),
      type: type,
      values: defaultValue,
      fields: fields,
      autoFocus: false,
      placeholder: placeholder
    });
  }, [isPassword, types, valueDigit]);
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    isOpen: isOpen,
    width: 700,
    onRequestClose: handleHidePopup
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.formLoginBySMS
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.header
  }, /*#__PURE__*/_react["default"].createElement(_core.FormLabel, {
    className: classes.title,
    component: "legend"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconScreen
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: icon,
    alt: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.content
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Enter the", ' ', fields, "-digit OTP we sent to", /*#__PURE__*/_react["default"].createElement("span", null, " \u2022\u2022\u2022\u2022 ".concat(phoneNumber))), counter > 1 && /*#__PURE__*/_react["default"].createElement("p", null, "It expires in", ' ', showCounter ? /*#__PURE__*/_react["default"].createElement("b", null, counter, ' ', counter <= 1 ? 'second' : 'seconds') : /*#__PURE__*/_react["default"].createElement("b", null, counter <= 120 ? minutes - 1 : minutes, ' ', "minutes"), "."), counter <= 1 && /*#__PURE__*/_react["default"].createElement("p", null, "Your OTP has now expired.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.inputNumber, errorInput && classes.inputNumberError, isPassword && classes.changeFzPassword, hiddenPlaceholder && classes.hiddenPlaceholder)
  }, !loading && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, statusError ? /*#__PURE__*/_react["default"].createElement(ReactCodeInputCallBack, null) : /*#__PURE__*/_react["default"].createElement(_reactVerificationCodeInput["default"], {
    onChange: handleOnchange,
    className: (0, _clsx["default"])(classes.codeInputComponent, className),
    type: type,
    values: "",
    fields: fields,
    autoFocus: false,
    placeholder: placeholder
  })), loading && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.loading
  }, "Authorising...")), errorInput && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.err
  }, "Your OTP did not match. You have", ' ', remainingAttempts, ' ', "remaining attempt", remainingAttempts > 1 ? 's' : '', "."), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.contentResend
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.resend
  }, notReceiveSMS && counter > 1 ? /*#__PURE__*/_react["default"].createElement("p", {
    className: classes.notReceive
  }, "Did not receive the SMS?", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    classHover: "linkUnderline",
    isOnClick: true,
    target: "",
    fontSize: "fH6",
    onClick: function onClick() {
      return resendOTP();
    }
  }, "Resend OTP")) : /*#__PURE__*/_react["default"].createElement(_link["default"], {
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
  icon: _propTypes["default"].string,
  getValue: _propTypes["default"].func,
  label: _propTypes["default"].string,
  type: _propTypes["default"].string,
  className: _propTypes["default"].string,
  fields: _propTypes["default"].number,
  phoneNumber: _propTypes["default"].string,
  minutes: _propTypes["default"].number,
  isPassword: _propTypes["default"].bool,
  notReceiveSMS: _propTypes["default"].bool,
  resendOTP: _propTypes["default"].func,
  remainingAttempts: _propTypes["default"].number,
  statusError: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].array,
  handleClose: _propTypes["default"].func,
  placeholder: _propTypes["default"].array,
  showPopup: _propTypes["default"].bool
};
var _default = InputDigitSMS;
exports["default"] = _default;