"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useComponentDidUpdate = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ValidateInput = require("./ValidateInput");

var _excluded = ["inputKey", "size", "prefixContent", "message", "value", "kind", "getValue", "type", "name", "maxLength", "preventSpecialCharacters", "leadingZeros", "checkValueDate", "checkValueMonth", "valueInputCode", "checkValueYear", "paddingRight", "autoFocus", "checkOnChange", "isPhoneSG"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useComponentDidUpdate = function useComponentDidUpdate(effect, dependencies) {
  var hasMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    effect();
  }, dependencies);
}; // text || number
// label = string
// size = 'large' || 'medium' || 'small'
// prefixContent = string
// label = string
// type = 'text' || 'number'


exports.useComponentDidUpdate = useComponentDidUpdate;
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
        height: '30px',
        '&::placeholder': {
          color: '#888888',
          opacity: '1'
        }
      },
      '& .MuiInputLabel-root + .MuiInput-formControl': {
        marginTop: '25px'
      }
    },
    medium: {
      '& .MuiInput-underline': {
        '&::after': {
          width: '190px',
          '@media (max-width: 1024px)': {
            width: '190px'
          }
        },
        '&::before': {
          width: '190px',
          '@media (max-width: 1024px)': {
            width: '190px'
          }
        }
      },
      '& input': {
        width: '190px',
        '@media (max-width: 1024px)': {
          width: '190px'
        }
      },
      '& .MuiInputLabel-root + .MuiInput-formControl': {
        marginTop: '25px'
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
      },
      '& .MuiInputLabel-root + .MuiInput-formControl': {
        marginTop: '25px'
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
        lineHeight: '24px',
        fontWeight: 'normal'
      },
      '& .MuiInputLabel-shrink': {
        transform: 'none'
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: theme.palette.$greyishBrown
      },
      '& .MuiInput-underline': {
        fontSize: '18px',
        lineHeight: '30px',
        color: theme.palette.$greyishBrown,
        '@media screen and (max-width: 768px)': {
          fontSize: theme.typography.$fzH5,
          lineHeight: '28px'
        },
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
          fontSize: '18px'
        }
      },
      '& input::-webkit-inner-spin-button': {
        webkitAppearance: 'none'
      },
      'input::-webkit-outer-spin-button': {
        webkitAppearance: 'none'
      },
      '& .MuiInputBase-input': {
        height: 30
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
        fontSize: '18px',
        color: theme.palette.$greyishBrown,
        '@media screen and (max-width: 768px)': {
          fontSize: theme.typography.$fzH5,
          lineHeight: '28px'
        },
        '&::after': {
          borderBottom: "1px solid ".concat(theme.palette.$lipstick),
          transform: 'scaleX(1)'
        }
      },
      '& .MuiFormHelperText-root': {
        color: theme.palette.$lipstick,
        fontSize: theme.typography.$fzH6,
        lineHeight: '30px'
      }
    },
    inputCode: {
      width: '40px'
    },
    paddingRight: {
      '& .MuiInputBase-input': {
        paddingRight: '30px'
      }
    }
  };
});

var InputComponent = function InputComponent(_ref) {
  var inputKey = _ref.inputKey,
      size = _ref.size,
      prefixContent = _ref.prefixContent,
      message = _ref.message,
      value = _ref.value,
      kind = _ref.kind,
      getValue = _ref.getValue,
      type = _ref.type,
      name = _ref.name,
      maxLength = _ref.maxLength,
      preventSpecialCharacters = _ref.preventSpecialCharacters,
      leadingZeros = _ref.leadingZeros,
      checkValueDate = _ref.checkValueDate,
      checkValueMonth = _ref.checkValueMonth,
      valueInputCode = _ref.valueInputCode,
      checkValueYear = _ref.checkValueYear,
      paddingRight = _ref.paddingRight,
      autoFocus = _ref.autoFocus,
      checkOnChange = _ref.checkOnChange,
      isPhoneSG = _ref.isPhoneSG,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var classes = useStyles();

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      errorText = _useState2[0],
      setErrorText = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      valueInput = _useState4[0],
      setValueInput = _useState4[1];

  (0, _react.useEffect)(function () {
    // eslint-disable-next-line no-unused-expressions
    if (value) {
      setValueInput(value);
    } else {
      setValueInput('');
    }
  }, [value]); // eslint-disable-next-line no-shadow

  var validateValue = function validateValue(value) {
    var err = (0, _ValidateInput.validateInput)(kind, value, inputKey, valueInputCode, isPhoneSG);

    if (err) {
      setErrorText(err);
    } else {
      setErrorText('');
    }
  }; // eslint-disable-next-line no-nested-ternary


  var showError = function showError(dataInput) {
    return (0, _ValidateInput.validateInput)(kind, dataInput, inputKey, valueInputCode, isPhoneSG);
  };

  useComponentDidUpdate(function () {
    if (inputKey) {
      validateValue(valueInput);
      getValue({
        value: valueInput,
        name: name,
        error: showError(valueInput)
      });
    } else {
      setErrorText('');
    }
  }, [inputKey]);
  useComponentDidUpdate(function () {
    if (inputKey) {
      validateValue(valueInput);
      getValue({
        value: valueInput,
        name: name,
        error: showError(valueInput)
      });
    }
  }, [kind]);
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
    className: (0, _clsx["default"])(classes.inputComponent, classes[size], errorText !== '' ? classes.errorType : '', valueInput ? classes.validValue : '', paddingRight && classes.paddingRight),
    id: "".concat(errorText ? 'errorType' : ''),
    InputProps: {
      startAdornment: prefixContent && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "start"
      }, prefixContent)
    } // eslint-disable-next-line react/jsx-no-duplicate-props
    ,
    inputProps: {
      maxLength: valueInputCode === '+65' || valueInputCode === 'Singapore' || valueInputCode === '' || kind === 'country_code' ? maxLength : 20,
      pattern: '[0-9]*',
      inputMode: 'numeric',
      name: name
    },
    onBlur: function onBlur(e) {
      leadingZeros(e.target);
      checkValueDate(e.target);
      checkValueMonth(e.target);
      checkValueYear(e.target);
      setValueInput(e.target.value);
      validateValue(e.target.value);
      getValue({
        value: e.target.value,
        name: e.target.name,
        error: showError(e.target.value)
      });
    },
    value: valueInput,
    name: name,
    onChange: function onChange(e) {
      setValueInput(e.target.value);
      autoFocus(e.target, maxLength);

      if (checkOnChange) {
        validateValue(e.target.value);
        getValue({
          value: e.target.value,
          name: e.target.name,
          error: showError(e.target.value)
        });
      }
    },
    onKeyPress: preventSpecialCharacters,
    tabIndex: -1
  }, props));
};

InputComponent.defaultProps = {
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
  preventSpecialCharacters: function preventSpecialCharacters(_) {
    return _;
  },
  leadingZeros: function leadingZeros(_) {
    return _;
  },
  checkValueDate: function checkValueDate(_) {
    return _;
  },
  checkValueMonth: function checkValueMonth(_) {
    return _;
  },
  checkValueYear: function checkValueYear(_) {
    return _;
  },
  autoFocus: function autoFocus(_) {
    return _;
  },
  valueInputCode: '',
  paddingRight: false,
  checkOnChange: false
};
InputComponent.propTypes = {
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
  valueInputCode: _propTypes["default"].string,
  leadingZeros: _propTypes["default"].func,
  checkValueDate: _propTypes["default"].func,
  checkValueMonth: _propTypes["default"].func,
  checkValueYear: _propTypes["default"].func,
  paddingRight: _propTypes["default"].bool,
  autoFocus: _propTypes["default"].func,
  checkOnChange: _propTypes["default"].bool,
  isPhoneSG: _propTypes["default"].bool.isRequired
};
var _default = InputComponent;
exports["default"] = _default;