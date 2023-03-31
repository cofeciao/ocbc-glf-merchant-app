import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import ReactCodeInput from 'react-code-input';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
var useStyles = makeStyles(function (theme) {
  return {
    codeInputComponent: {
      position: 'relative',
      '& input[type=number]::-webkit-inner-spin-button': {
        appearance: 'none'
      },
      '& input': {
        marginRight: '20px',
        width: '20px',
        border: 'none',
        fontFamily: 'OpenSans',
        borderBottom: '1px solid #888888',
        fontSize: '19px',
        textAlign: 'center',
        paddingBottom: '5px',
        color: '#484848',
        backgroundColor: 'transparent',
        '&:last-child': {
          marginRight: '0px'
        },
        '&:focus': {
          outline: 'none',
          borderBottom: '1px solid #2979ff',
          backgroundColor: 'transparent'
        }
      },
      '@media (max-width: 768px)': {
        '& input': {
          borderRadius: '0px',
          paddingLeft: '.2em',
          paddingRight: '.2em',
          width: '18px'
        }
      },
      '@media (max-width: 360px)': {
        '& input': {
          width: '12px'
        }
      }
    },
    prefix: {
      marginRight: '30px',
      fontSize: '18px'
    },
    errorMessage: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6
    },
    placeholder: {
      color: '#b2bec4',
      fontSize: '14px',
      margin: 20
    },
    label: {
      fontSize: '14px',
      color: theme.palette.$greyishBrown,
      marginBottom: '12px',
      lineHeight: '1.75'
    },
    errorInput: {
      display: 'block'
    }
  };
});

var CodeInputCustom = function CodeInputCustom(_ref) {
  var getValue = _ref.getValue,
      placeholder = _ref.placeholder,
      label = _ref.label,
      max = _ref.max,
      handleError = _ref.handleError,
      type = _ref.type,
      className = _ref.className,
      isPassword = _ref.isPassword;
  var classes = useStyles();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = useState(type),
      _useState4 = _slicedToArray(_useState3, 2),
      types = _useState4[0],
      setTypes = _useState4[1];

  var setValue = function setValue(value) {
    if (isPassword) {
      setTypes('password');
    }

    if (value.length >= 1 && value.length < max) {
      handleError(true);
    } else {
      setError(null);
      getValue(value);
      handleError(false);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormLabel, {
    className: classes.label,
    component: "legend"
  }, label), /*#__PURE__*/React.createElement(ReactCodeInput, {
    onChange: setValue,
    className: clsx(classes.codeInputComponent, className),
    type: isPassword ? types : type,
    value: "",
    inputMode: "numeric",
    fields: max,
    autoFocus: false
  }), !error ? /*#__PURE__*/React.createElement("p", {
    className: classes.placeholder
  }, placeholder) : /*#__PURE__*/React.createElement("p", {
    className: classes.errorMessage
  }, error));
};

{
  /* <CodeInputCustom label="CDP Securities Account number" placeholder={'To find out your number, you may call CDP at +65 6535 7511'} getValue={(e) => console.log(e,"eee")}></CodeInputCustom> */
}
CodeInputCustom.defaultProps = {
  placeholder: '',
  getValue: function getValue(_) {
    return _;
  },
  handleError: function handleError(_) {
    return _;
  },
  label: '',
  type: 'number',
  className: '',
  isPassword: false
};
CodeInputCustom.propTypes = {
  placeholder: PropTypes.string,
  getValue: PropTypes.func,
  handleError: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  max: PropTypes.number.isRequired,
  isPassword: PropTypes.bool
};
export default CodeInputCustom;