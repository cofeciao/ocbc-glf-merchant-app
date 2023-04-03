import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["inputKey", "size", "prefixContent", "message", "value", "kind", "getValue", "type", "name", "maxLength", "preventSpecialCharacters", "leadingZeros", "checkValueDate", "checkValueMonth", "valueInputCode", "checkValueYear", "paddingRight", "autoFocus", "checkOnChange", "isCountryCodeSG", "onlyNumber", "handleCallApi", "onBlur", "width", "fullWidth", "id", "errorData", "exceptNumber", "helperText"];
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { validateInput } from './ValidateInput'; // text || number
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
        marginTop: '1px'
      }
    },
    medium: {
      '& .MuiInput-underline': {
        '&::after': {
          width: '220px',
          '@media (max-width: 1024px)': {
            width: '220px'
          },
          '@media (max-width: 768px)': {
            width: '100%'
          }
        },
        '&::before': {
          width: '220px',
          '@media (max-width: 1024px)': {
            width: '220px'
          },
          '@media (max-width: 768px)': {
            width: '100%'
          }
        }
      },
      '& input': {
        width: '220px',
        '@media (max-width: 1024px)': {
          width: '220px'
        },
        '@media (max-width: 768px)': {
          width: '100%'
        }
      },
      '& .MuiInputLabel-root + .MuiInput-formControl': {
        marginTop: '1px'
      }
    },
    small: {
      '& .MuiInput-underline': {
        '&::after': {
          width: '80px',
          '@media screen and (min-width: 768px)': {
            width: '100%'
          }
        },
        '&::before': {
          width: '80px',
          '@media screen and (min-width: 768px)': {
            width: '100%'
          }
        }
      },
      '& input': {
        width: '80px'
      },
      '& .MuiInputLabel-root + .MuiInput-formControl': {
        marginTop: '1px'
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
        fontWeight: 'normal',
        '&.MuiInputLabel-formControl': {
          position: 'relative'
        }
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
        lineHeight: '30px',
        '@media screen and (max-width: 768px)': {
          fontSize: theme.typography.$fzH5,
          lineHeight: '28px'
        },
        color: theme.palette.$greyishBrown,
        '&::after': {
          borderBottom: "1px solid ".concat(theme.palette.$lipstick),
          transform: 'scaleX(1)'
        }
      },
      '& .MuiFormHelperText-root': {
        color: "".concat(theme.palette.$lipstick, " !important"),
        fontSize: theme.typography.$fzH6,
        paddingRight: '10px',
        lineHeight: '1.71',
        marginTop: '5px'
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
    custom: {
      '& .MuiInput-underline': {
        '&::after': {
          width: function width(_width) {
            return _width;
          },
          '@media (max-width: 1024px)': {
            width: function width(_width2) {
              return _width2;
            }
          }
        },
        '&::before': {
          width: function width(_width3) {
            return _width3;
          },
          '@media (max-width: 1024px)': {
            width: function width(_width4) {
              return _width4;
            }
          }
        }
      },
      '& input': {
        width: function width(_width5) {
          return _width5;
        },
        '@media (max-width: 1024px)': {
          width: function width(_width6) {
            return _width6;
          }
        }
      },
      '& .MuiInputLabel-root + .MuiInput-formControl': {
        marginTop: '1px'
      }
    },
    fullWidth: {
      '& .MuiInput-underline': {
        '&::after': {
          width: '100%'
        },
        '&::before': {
          width: '100%'
        }
      },
      '& input': {
        width: '100%'
      },
      '& .MuiInputLabel-root + .MuiInput-formControl': {
        marginTop: '1px'
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
      isCountryCodeSG = _ref.isCountryCodeSG,
      onlyNumber = _ref.onlyNumber,
      handleCallApi = _ref.handleCallApi,
      _onBlur = _ref.onBlur,
      width = _ref.width,
      fullWidth = _ref.fullWidth,
      id = _ref.id,
      errorData = _ref.errorData,
      exceptNumber = _ref.exceptNumber,
      helperText = _ref.helperText,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles(width);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      errorText = _useState2[0],
      setErrorText = _useState2[1];

  var _useState3 = useState(value),
      _useState4 = _slicedToArray(_useState3, 2),
      valueInput = _useState4[0],
      setValueInput = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      stateErrorField = _useState6[0],
      setStateErrorField = _useState6[1];

  useEffect(function () {
    // eslint-disable-next-line no-unused-expressions
    if (value) {
      setValueInput(value);
    } else {
      setValueInput('');
    }
  }, [value]);

  var formatNumber = function formatNumber(string) {
    var newString = string.replace(/[^0-9]/g, '');
    return newString;
  }; // eslint-disable-next-line no-shadow


  var validateValue = function validateValue(value) {
    var err = validateInput(kind, value, inputKey, exceptNumber, helperText);

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

  useEffect(function () {
    if (inputKey) {
      validateValue(valueInput);
    } else {
      setErrorText(helperText ? helperText : '');
    }
  }, [inputKey]);

  var handleVerifyErrorHaveHelperText = function handleVerifyErrorHaveHelperText() {
    if (helperText) {
      if (helperText && stateErrorField) {
        return classes.errorType;
      } else {
        return '';
      }
    } else {
      if (errorText || errorData) {
        return classes.errorType;
      } else {
        return '';
      }
    }
  };

  var showError = function showError(dataInput) {
    return valueInputCode === '+65' || valueInputCode === '' ? validateInput(kind, dataInput, inputKey, exceptNumber, helperText) : '';
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, type === 'number' && /*#__PURE__*/React.createElement(TextField, _extends({
    className: clsx(classes.inputComponent, classes[size], width > 0 ? classes.custom : '', fullWidth ? classes.fullWidth : '', handleVerifyErrorHaveHelperText(), valueInput ? classes.validValue : '', paddingRight && classes.paddingRight),
    id: "".concat(errorText ? "errorType-label-".concat(id) : id),
    InputProps: {
      startAdornment: prefixContent && /*#__PURE__*/React.createElement(InputAdornment, {
        position: "start"
      }, prefixContent)
    } // eslint-disable-next-line react/jsx-no-duplicate-props
    ,
    inputProps: {
      maxLength: valueInputCode === '+65' || valueInputCode === '' || kind === 'country_code' ? maxLength : 15,
      pattern: '[0-9]*',
      inputMode: 'numeric',
      name: name
    },
    onBlur: function onBlur(e) {
      _onBlur(true);

      leadingZeros(e.target);
      handleCallApi(e.target.value);
      checkValueDate(e.target);
      checkValueMonth(e.target);
      checkValueYear(e.target);
      setValueInput(onlyNumber ? formatNumber(e.target.value) : e.target.value);
      autoFocus(e.target, maxLength);
      getValue({
        value: onlyNumber ? formatNumber(e.target.value) : e.target.value,
        name: e.target.name,
        error: showError(e.target.value)
      });

      if (valueInputCode === '+65' || valueInputCode === '') {
        validateValue(onlyNumber ? formatNumber(e.target.value) : e.target.value);
      } else {
        setErrorText('');
      }
    },
    helperText: isCountryCodeSG ? errorText : '',
    value: valueInput,
    name: name,
    onChange: function onChange(e) {
      setValueInput(onlyNumber ? formatNumber(e.target.value) : e.target.value);
      autoFocus(e.target, maxLength);

      if (checkOnChange) {
        handleCallApi(e.target.value);
        validateValue(onlyNumber ? formatNumber(e.target.value) : e.target.value);
        getValue({
          value: onlyNumber ? formatNumber(e.target.value) : e.target.value,
          name: e.target.name,
          error: showError(e.target.value)
        });
      }
    },
    onKeyPress: preventSpecialCharacters,
    tabIndex: -1
  }, props)), (type === 'text' || type === 'password' || type === 'email') && /*#__PURE__*/React.createElement(TextField, _extends({
    className: clsx(classes.inputComponent, classes[size], width > 0 ? classes.custom : '', fullWidth ? classes.fullWidth : '', handleVerifyErrorHaveHelperText(), valueInput ? classes.validValue : '', paddingRight && classes.paddingRight),
    id: "".concat(errorText ? "errorType-label-".concat(id) : id),
    inputProps: {
      maxLength: maxLength,
      type: type,
      name: name,
      inputMode: type === 'email' ? 'email' : ''
    },
    onBlur: function onBlur(e) {
      getValue({
        value: e.target.value,
        name: e.target.name,
        error: showError(e.target.value)
      });
      validateValue(e.target.value);
      autoFocus(e.target, maxLength);
      handleCallApi(e.target.value);
    },
    name: name,
    helperText: errorText,
    value: valueInput // tabIndex={-1}
    ,
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
    onKeyPress: preventSpecialCharacters
  }, props)));
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
  handleCallApi: function handleCallApi(_) {
    return _;
  },
  onBlur: function onBlur(_) {
    return _;
  },
  valueInputCode: '',
  paddingRight: false,
  checkOnChange: false,
  isCountryCodeSG: true,
  onlyNumber: false,
  width: 0,
  id: '',
  fullWidth: false,
  exceptNumber: '',
  helperText: ''
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
  isCountryCodeSG: PropTypes.bool,
  onlyNumber: PropTypes.bool,
  handleCallApi: PropTypes.func,
  onBlur: PropTypes.func,
  width: PropTypes.number,
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  exceptNumber: PropTypes.string,
  helperText: PropTypes.string
};
export default InputComponent;