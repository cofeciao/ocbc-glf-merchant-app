import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import ReactCodeInput from 'react-verification-code-input';
import clsx from 'clsx';
var useStyles = makeStyles(function (theme) {
  var _input;

  return {
    codeInputComponent: {
      marginTop: '30px',
      position: 'relative',
      '& input[type=number]::-webkit-inner-spin-button': {
        appearance: 'none'
      },
      '& input': (_input = {
        marginRight: '20px',
        width: '20px !important',
        border: 'none',
        fontFamily: 'OpenSans',
        fontSize: '19px',
        textAlign: 'left',
        paddingBottom: '10px',
        color: '#484848',
        backgroundColor: 'transparent',
        borderRadius: "0 !important"
      }, _defineProperty(_input, "border", "0 !important"), _defineProperty(_input, "height", 'auto !important'), _defineProperty(_input, "borderBottom", '1px solid #484848 !important'), _defineProperty(_input, '&::placeholder', {
        color: '#b2bec4'
      }), _defineProperty(_input, '&:last-child', {
        marginRight: '0px'
      }), _defineProperty(_input, '&:focus', {
        outline: 'none',
        border: 0,
        borderRadius: 0,
        borderBottom: '1px solid #2979ff !important',
        backgroundColor: 'transparent'
      }), _input),
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
    label: _defineProperty({
      fontSize: '14px',
      color: theme.palette.$greyishBrown,
      marginBottom: '12px',
      lineHeight: '1.75'
    }, "marginBottom", '30px'),
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
    getValue(value);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormLabel, {
    className: classes.label,
    component: "legend"
  }, label), /*#__PURE__*/React.createElement(ReactCodeInput, {
    onChange: setValue,
    className: clsx(classes.codeInputComponent, className),
    type: isPassword ? types : type,
    value: "",
    fields: max,
    autoFocus: false,
    placeholder: placeholder
  }));
};

{
  /* <CodeInputCustom label="CDP Securities Account number" placeholder={'To find out your number, you may call CDP at +65 6535 7511'} getValue={(e) => console.log(e,"eee")}></CodeInputCustom> */
}
CodeInputCustom.defaultProps = {
  placeholder: [],
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
  placeholder: PropTypes.array,
  getValue: PropTypes.func,
  handleError: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  max: PropTypes.number.isRequired,
  isPassword: PropTypes.bool
};
export default CodeInputCustom;