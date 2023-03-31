"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ValidateInputAmount = require("./ValidateInputAmount");

var _excluded = ["size", "sizeInput", "prefixContent", "message", "inputKey", "value", "kind", "getValue", "type", "name", "maxLength", "preventSpecialCharacters", "moneyDisplayFormat", "maxLoan", "desiredLoan", "checkOnChange", "prevValue", "isEditing", "otherError", "dragSlider", "onBlur", "handleChange", "nameType", "inputRef", "disabled", "paddingRightHelperText", "helperText"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// text || number
// label = string
// size = 'large' || 'medium' || 'small'
// prefixContent = string
// label = string
// type = 'text' || 'number'
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    large: {
      '& .MuiInput-underline': {
        '&::after': {
          width: '100%'
        },
        '&::before': {
          width: '100%'
        }
      },
      '& input': {
        width: '420px',
        '&::placeholder': {
          color: '#888888',
          opacity: '1'
        }
      }
    },
    medium: {
      '& .MuiInput-underline': {
        '&::after': {
          width: '190px',
          '@media (max-width: 1024px)': {
            width: '100%'
          }
        },
        '&::before': {
          width: '190px',
          '@media (max-width: 1024px)': {
            width: '100%'
          }
        }
      },
      '& input': {
        width: '190px',
        '@media (max-width: 1024px)': {
          width: '100%'
        }
      }
    },
    small: {
      '& .MuiInput-underline': {
        '&::after': {
          width: '80px'
        },
        '&::before': {
          width: '80px'
        }
      },
      '& input': {
        width: '80px'
      }
    },
    inputComponent: {
      width: '100%',
      '&:focus': {
        outline: 'none'
      },
      '& .MuiSelect-root': {
        '&:focus': {
          backgroundColor: 'transparent',
          outline: 'none'
        }
      },
      '& .MuiFormLabel-root': {
        color: theme.palette.$greyishBrown,
        transform: 'none',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '24px'
      },
      '& .MuiInputLabel-shrink': {
        transform: 'none'
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: theme.palette.$greyishBrown
      },
      '& .MuiInput-underline': {
        fontSize: theme.typography.$fzH2,
        '@media screen and (max-width: 768px)': {
          fontSize: theme.typography.$fzH5
        },
        color: theme.palette.$greyishBrown,
        '&::after': {
          borderBottom: "1px solid ".concat(theme.palette.$clearBlue)
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #484848'
        },
        '&::before': {
          borderBottom: '1px solid #484848'
        }
      },
      '& .MuiInputAdornment-positionStart': {
        marginRight: '10px',
        '& .MuiTypography-body1': {
          fontSize: theme.typography.$fzH2,
          color: theme.palette.$prefixColor,
          '@media screen and (max-width: 768px)': {
            fontSize: theme.typography.$fzH5
          }
        }
      },
      '& input::-webkit-inner-spin-button': {
        webkitAppearance: 'none'
      },
      'input::-webkit-outer-spin-button': {
        webkitAppearance: 'none'
      },
      '& label + .MuiInput-formControl': {
        marginTop: '24px'
      }
    },
    validValue: {
      '& .MuiInput-underline': {
        '&::before': {
          borderBottom: '1px solid #cfcfcf'
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #cfcfcf'
        }
      }
    },
    errorType: {
      '& .MuiInput-underline': {
        color: theme.palette.$greyishBrown,
        '&::after': {
          borderBottom: "1px solid ".concat(theme.palette.$lipstick),
          transform: 'scaleX(1)'
        }
      },
      '& .MuiFormHelperText-root': {
        color: "".concat(theme.palette.$lipstick, " !important"),
        fontSize: theme.typography.$fzH6,
        lineHeight: '1.71',
        marginTop: '5px',
        paddingRight: function paddingRight(paddingRightHelperText) {
          return paddingRightHelperText;
        }
      }
    },
    inputCode: {
      width: '40px'
    },
    paddingRight: {
      '& .MuiInputBase-input': {
        paddingRight: '30px'
      }
    },
    smallInput: {
      '& input': {
        fontSize: 18
      }
    },
    smallPrefix: {
      '& .MuiTypography-root': {
        fontSize: '18px !important'
      }
    }
  };
});

var InputAmount = function InputAmount(_ref) {
  var size = _ref.size,
      sizeInput = _ref.sizeInput,
      prefixContent = _ref.prefixContent,
      message = _ref.message,
      inputKey = _ref.inputKey,
      value = _ref.value,
      kind = _ref.kind,
      getValue = _ref.getValue,
      type = _ref.type,
      name = _ref.name,
      maxLength = _ref.maxLength,
      preventSpecialCharacters = _ref.preventSpecialCharacters,
      moneyDisplayFormat = _ref.moneyDisplayFormat,
      maxLoan = _ref.maxLoan,
      desiredLoan = _ref.desiredLoan,
      checkOnChange = _ref.checkOnChange,
      prevValue = _ref.prevValue,
      isEditing = _ref.isEditing,
      otherError = _ref.otherError,
      dragSlider = _ref.dragSlider,
      _onBlur = _ref.onBlur,
      handleChange = _ref.handleChange,
      nameType = _ref.nameType,
      inputRef = _ref.inputRef,
      disabled = _ref.disabled,
      paddingRightHelperText = _ref.paddingRightHelperText,
      helperText = _ref.helperText,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var classes = useStyles(paddingRightHelperText);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      errorText = _useState2[0],
      setErrorText = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      valueInput = _useState4[0],
      setValueInput = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      dataInput = _useState6[0],
      setDataInput = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      stateErrorField = _useState8[0],
      setStateErrorField = _useState8[1];

  (0, _react.useEffect)(function () {
    // eslint-disable-next-line no-unused-expressions
    if (value) {
      setDataInput(value);
      setValueInput(moneyDisplayFormat(value, 0));
    } else {
      setValueInput('');
    }
  }, [value]); // eslint-disable-next-line no-shadow

  var validateValue = function validateValue(value) {
    var err = (0, _ValidateInputAmount.validateInput)(kind, value, inputKey, maxLoan, desiredLoan, prevValue, isEditing, nameType, otherError);

    if (err) {
      setErrorText(err);

      if (helperText) {
        setStateErrorField(true);
      }
    } else {
      if (helperText) {
        setStateErrorField(false);
      }

      setErrorText(helperText ? helperText : '');
    }
  };

  (0, _react.useEffect)(function () {
    if (inputKey) {
      validateValue(dataInput);
    } else {
      setErrorText(helperText ? helperText : '');
    }
  }, [inputKey, helperText]);

  var handleFormatData = function handleFormatData(num) {
    setValueInput(num);
  };

  (0, _react.useEffect)(function () {
    if (dragSlider) {
      validateValue(dataInput);
    }
  }, [otherError]);

  var handleVerifyErrorHaveHelperText = function handleVerifyErrorHaveHelperText() {
    if (helperText) {
      if (helperText && stateErrorField) {
        return classes.errorType;
      } else {
        return '';
      }
    } else {
      if (errorText) {
        return classes.errorType;
      } else {
        return '';
      }
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
    inputRef: inputRef,
    className: (0, _clsx["default"])(classes.inputComponent, classes[size], sizeInput ? classes["".concat(sizeInput, "Input")] : '', handleVerifyErrorHaveHelperText(), valueInput ? classes.validValue : '', helperText && 'helperText-custom', value && 'change-prefix'),
    id: "".concat(errorText ? 'errorType' : ''),
    InputProps: {
      startAdornment: prefixContent && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "start",
        className: sizeInput ? classes["".concat(sizeInput, "Prefix")] : ''
      }, prefixContent)
    },
    onBlur: function onBlur(e) {
      _onBlur(true);

      handleChange();
      handleFormatData(e.target.value);
      var data = Number(e.target.value.replace(/,/g, ''));
      setDataInput(data);
      validateValue(data);
      getValue({
        value: data,
        name: e.target.name,
        error: (0, _ValidateInputAmount.validateInput)(kind, data, inputKey, maxLoan, desiredLoan, prevValue, isEditing, nameType, otherError)
      });
    } // eslint-disable-next-line react/jsx-no-duplicate-props
    ,
    inputProps: {
      maxLength: maxLength,
      pattern: '[0-9]*',
      inputMode: 'numeric',
      name: name
    },
    helperText: errorText,
    value: valueInput,
    name: name,
    onChange: function onChange(e) {
      _onBlur(false);

      handleFormatData(e.target.value);
      var data = Number(e.target.value.replace(/,/g, ''));
      setDataInput(data);
      getValue({
        value: data,
        name: e.target.name,
        error: errorText.length > 0 ? errorText : ''
      });

      if (checkOnChange) {
        validateValue(data);
        getValue({
          value: data,
          name: e.target.name,
          error: (0, _ValidateInputAmount.validateInput)(kind, data, inputKey, maxLoan, desiredLoan, prevValue, isEditing, nameType, otherError)
        });
      }
    },
    disabled: disabled,
    onKeyPress: preventSpecialCharacters,
    tabIndex: -1
  }, props)));
};

InputAmount.defaultProps = {
  size: '',
  prefixContent: '',
  type: '',
  label: '',
  kind: '',
  message: '',
  name: '',
  maxLength: 100,
  getValue: function getValue(_) {
    return _;
  },
  onBlur: function onBlur(_) {
    return _;
  },
  handleChange: function handleChange(_) {
    return _;
  },
  preventSpecialCharacters: function preventSpecialCharacters(_) {
    return _;
  },
  moneyDisplayFormat: function moneyDisplayFormat(_) {
    return _;
  },
  inputKey: 0,
  maxLoan: 0,
  desiredLoan: 0,
  checkOnChange: false,
  paddingRightHelperText: 40,
  otherError: false,
  dragSlider: false,
  disabled: false,
  helperText: ''
};
InputAmount.propTypes = {
  size: _propTypes["default"].string,
  // 'large' || 'medium' || 'small'
  prefixContent: _propTypes["default"].string,
  type: _propTypes["default"].string,
  // 'text' || 'number'
  label: _propTypes["default"].string,
  message: _propTypes["default"].string,
  kind: _propTypes["default"].string,
  // phone || email || code || unit_max_2 || unit_max_3 || block_number
  name: _propTypes["default"].string,
  maxLength: _propTypes["default"].number,
  getValue: _propTypes["default"].func,
  // return {name,value},
  preventSpecialCharacters: _propTypes["default"].func,
  moneyDisplayFormat: _propTypes["default"].func,
  inputKey: _propTypes["default"].number,
  maxLoan: _propTypes["default"].number,
  desiredLoan: _propTypes["default"].number,
  checkOnChange: _propTypes["default"].bool,
  otherError: _propTypes["default"].bool,
  dragSlider: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  handleChange: _propTypes["default"].func,
  paddingRightHelperText: _propTypes["default"].number,
  disabled: _propTypes["default"].bool,
  helperText: _propTypes["default"].string
};
var _default = InputAmount;
exports["default"] = _default;