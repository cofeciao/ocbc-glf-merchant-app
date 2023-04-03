import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "sizeInput", "prefixContent", "message", "inputKey", "value", "kind", "getValue", "type", "name", "maxLength", "preventSpecialCharacters", "moneyDisplayFormat", "maxLoan", "desiredLoan", "checkOnChange", "prevValue", "isEditing", "otherError", "dragSlider", "onBlur", "handleChange", "nameType", "inputRef", "disabled", "paddingRightHelperText", "helperText"];
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { validateInput } from './ValidateInputAmount'; // text || number
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
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles(paddingRightHelperText);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      errorText = _useState2[0],
      setErrorText = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      valueInput = _useState4[0],
      setValueInput = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      dataInput = _useState6[0],
      setDataInput = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      stateErrorField = _useState8[0],
      setStateErrorField = _useState8[1];

  useEffect(function () {
    // eslint-disable-next-line no-unused-expressions
    if (value) {
      setDataInput(value);
      setValueInput(moneyDisplayFormat(value, 0));
    } else {
      setValueInput('');
    }
  }, [value]); // eslint-disable-next-line no-shadow

  var validateValue = function validateValue(value) {
    var err = validateInput(kind, value, inputKey, maxLoan, desiredLoan, prevValue, isEditing, nameType, otherError);

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
      validateValue(dataInput);
    } else {
      setErrorText(helperText ? helperText : '');
    }
  }, [inputKey, helperText]);

  var handleFormatData = function handleFormatData(num) {
    setValueInput(num);
  };

  useEffect(function () {
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextField, _extends({
    inputRef: inputRef,
    className: clsx(classes.inputComponent, classes[size], sizeInput ? classes["".concat(sizeInput, "Input")] : '', handleVerifyErrorHaveHelperText(), valueInput ? classes.validValue : '', helperText && 'helperText-custom', value && 'change-prefix'),
    id: "".concat(errorText ? 'errorType' : ''),
    InputProps: {
      startAdornment: prefixContent && /*#__PURE__*/React.createElement(InputAdornment, {
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
        error: validateInput(kind, data, inputKey, maxLoan, desiredLoan, prevValue, isEditing, nameType, otherError)
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
          error: validateInput(kind, data, inputKey, maxLoan, desiredLoan, prevValue, isEditing, nameType, otherError)
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
  moneyDisplayFormat: PropTypes.func,
  inputKey: PropTypes.number,
  maxLoan: PropTypes.number,
  desiredLoan: PropTypes.number,
  checkOnChange: PropTypes.bool,
  otherError: PropTypes.bool,
  dragSlider: PropTypes.bool,
  onBlur: PropTypes.func,
  handleChange: PropTypes.func,
  paddingRightHelperText: PropTypes.number,
  disabled: PropTypes.bool,
  helperText: PropTypes.string
};
export default InputAmount;