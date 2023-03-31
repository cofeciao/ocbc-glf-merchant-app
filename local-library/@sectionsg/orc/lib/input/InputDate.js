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

var _moment = _interopRequireDefault(require("moment"));

var _uuid = require("uuid");

var _Input = _interopRequireDefault(require("./Input"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/prop-types */
// import icons
var useStyles = (0, _core.makeStyles)(function (theme) {
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

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      blurYear = _useState2[0],
      setBlurYear = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      blurMonth = _useState4[0],
      setBlurMonth = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      blurDay = _useState6[0],
      setBlurDay = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      errorText = _useState8[0],
      setErrorText = _useState8[1];

  var inputDateFull = "".concat(objectData.date, "-").concat(objectData.month, "-").concat(objectData.year);
  var hasData = objectData.date && objectData.month && objectData.year;
  (0, _react.useEffect)(function () {
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
        if ((0, _moment["default"])(inputDateFull, 'DD-MM-YYYY', true).isValid()) {
          if (nameType !== 'date of birth') {
            if ((0, _moment["default"])(inputDateFull, 'DD-MM-YYYY').isBefore((0, _moment["default"])().subtract(1, 'days'))) {
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
            } else if ((0, _moment["default"])(inputDateFull, 'DD-MM-YYYY').isAfter((0, _moment["default"])())) {
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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, label && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.label
  }, label), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    id: "".concat(errorText ? 'errorType-label' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: type === 'medium' && classes.mr20
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
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
    id: (0, _uuid.v4)(),
    kind: "day",
    getValue: function getValue(value) {
      return getValueInput('date', value.value, value.error);
    }
  }), (!objectData.errordate || objectData.errordate === undefined || showAlways) && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.textBlur
  }, "Day")), /*#__PURE__*/_react["default"].createElement("div", {
    className: type === 'medium' && classes.mr20
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    label: "",
    maxLength: 2,
    placeholder: "MM",
    type: "number",
    errorData: errorData,
    name: nameInputMonth,
    size: "small",
    kind: "month",
    width: 70,
    id: (0, _uuid.v4)(),
    onBlur: setBlurMonth,
    autoFocus: autoFocus,
    leadingZeros: leadingZeros,
    preventSpecialCharacters: preventSpecialCharacters,
    value: objectData.month,
    getValue: function getValue(value) {
      return getValueInput('month', value.value, value.error);
    }
  }), (!objectData.errormonth || objectData.errormonth === undefined || showAlways) && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.textBlur
  }, "Month")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    label: "",
    maxLength: 4,
    placeholder: "YYYY",
    type: "number",
    size: "small",
    errorData: errorData,
    id: (0, _uuid.v4)(),
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
  }), (!objectData.erroryear || objectData.erroryear === undefined || showAlways) && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.textBlur
  }, "Year"))), errorText && /*#__PURE__*/_react["default"].createElement("p", {
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
  leadingZeros: _propTypes["default"].func,
  preventSpecialCharacters: _propTypes["default"].func,
  autoFocus: _propTypes["default"].func,
  getValueInput: _propTypes["default"].func,
  objectData: _propTypes["default"].object,
  checkValueYear: _propTypes["default"].func,
  label: _propTypes["default"].string,
  type: _propTypes["default"].string,
  inputKey: _propTypes["default"].number,
  nameInputDate: _propTypes["default"].string,
  nameInputMonth: _propTypes["default"].string,
  nameInputYear: _propTypes["default"].string,
  handleValidateInputDate: _propTypes["default"].func,
  nameType: _propTypes["default"].string,
  showAlways: _propTypes["default"].bool,
  distanceErr: _propTypes["default"].bool
};
var _default = InputDate;
exports["default"] = _default;