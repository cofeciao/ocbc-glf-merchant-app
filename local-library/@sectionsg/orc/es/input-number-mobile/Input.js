import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["inputKey", "size", "prefixContent", "message", "value", "kind", "getValue", "type", "name", "maxLength", "preventSpecialCharacters", "leadingZeros", "checkValueDate", "checkValueMonth", "valueInputCode", "checkValueYear", "paddingRight", "autoFocus", "checkOnChange", "isPhoneSG"];
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { validateInput } from './ValidateInput';
export var useComponentDidUpdate = function useComponentDidUpdate(effect, dependencies) {
  var hasMounted = useRef(false);
  useEffect(function () {
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

var useStyles = makeStyles(function (theme) {
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
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      errorText = _useState2[0],
      setErrorText = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      valueInput = _useState4[0],
      setValueInput = _useState4[1];

  useEffect(function () {
    // eslint-disable-next-line no-unused-expressions
    if (value) {
      setValueInput(value);
    } else {
      setValueInput('');
    }
  }, [value]); // eslint-disable-next-line no-shadow

  var validateValue = function validateValue(value) {
    var err = validateInput(kind, value, inputKey, valueInputCode, isPhoneSG);

    if (err) {
      setErrorText(err);
    } else {
      setErrorText('');
    }
  }; // eslint-disable-next-line no-nested-ternary


  var showError = function showError(dataInput) {
    return validateInput(kind, dataInput, inputKey, valueInputCode, isPhoneSG);
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
  return /*#__PURE__*/React.createElement(TextField, _extends({
    className: clsx(classes.inputComponent, classes[size], errorText !== '' ? classes.errorType : '', valueInput ? classes.validValue : '', paddingRight && classes.paddingRight),
    id: "".concat(errorText ? 'errorType' : ''),
    InputProps: {
      startAdornment: prefixContent && /*#__PURE__*/React.createElement(InputAdornment, {
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
  size: PropTypes.string,
  // 'large' || 'medium' || 'small'
  prefixContent: PropTypes.string,
  type: PropTypes.string,
  // 'text' || 'number'
  label: PropTypes.string,
  message: PropTypes.string,
  kind: PropTypes.string,
  // phone || email || code || unit_max_2 || unit_max_3 || block_number
  name: PropTypes.string,
  maxLength: PropTypes.number,
  getValue: PropTypes.func,
  // return {name,value},
  preventSpecialCharacters: PropTypes.func,
  valueInputCode: PropTypes.string,
  leadingZeros: PropTypes.func,
  checkValueDate: PropTypes.func,
  checkValueMonth: PropTypes.func,
  checkValueYear: PropTypes.func,
  paddingRight: PropTypes.bool,
  autoFocus: PropTypes.func,
  checkOnChange: PropTypes.bool,
  isPhoneSG: PropTypes.bool.isRequired
};
export default InputComponent;