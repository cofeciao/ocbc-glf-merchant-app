import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import _ from 'lodash';
var useStyles = makeStyles(function (theme) {
  return {
    backgroundRadio: {
      width: '430px',
      borderRadius: '5px',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      padding: '15px',
      marginBottom: '10px',
      marginRight: '10px',
      marginLeft: 0,
      display: 'flex',
      '&:last-child': {
        marginBottom: '0'
      },
      '@media (max-width: 1024px)': {
        width: '100%',
        boxSizing: 'border-box'
      },
      '& .MuiTypography-root': {
        fontSize: theme.typography.$fzBody,
        lineHeight: '30px',
        '@media (max-width: 768px)': {
          fontSize: theme.typography.$fzH5,
          lineHeight: '28px'
        }
      },
      '& .PrivateSwitchBase-root-67': {
        padding: '0'
      }
    },
    checkboxCheck: {
      background: theme.palette.$battleshipGrey,
      boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02)',
      '& .MuiTypography-root': {
        color: theme.palette.$white
      },
      '& .MuiButtonBase-root': {
        marginRight: '10px',
        maxWidth: '20px',
        flex: '0 0 20px',
        padding: '0'
      },
      '& .MuiRadio-colorSecondary.Mui-checked': {
        color: 'rgba(0, 0, 0, 0.4)',
        maxWidth: '20px',
        flex: '0 0 20px',
        padding: '0',
        marginRight: '10px'
      }
    },
    checkboxDefault: {
      backgroundColor: theme.palette.$lightWhite,
      '& .MuiTypography-root': {
        color: theme.palette.$battleshipGrey
      },
      '& .MuiRadio-root': {
        padding: '0',
        maxWidth: '20px',
        flex: '0 0 20px',
        marginRight: '10px'
      },
      '& .MuiIconButton-colorSecondary:hover': {
        background: theme.palette.$lightWhite
      }
    },
    isDisable: {
      backgroundColor: theme.palette.$white,
      pointerEvents: 'none',
      '& span': {
        '&:first-child': {
          color: "".concat(theme.palette.$veryLightGrey, " !important")
        },
        '&:last-child': {
          color: "".concat(theme.palette.$veryLightGrey, " !important}")
        }
      }
    },
    horizontal: {
      '@media screen and (max-width: 768px)': {
        flexWrap: 'wrap',
        flexDirection: 'column'
      },
      '@media screen and (min-width: 768px)': {
        flexWrap: 'wrap',
        flexDirection: 'row'
      },
      '& .MuiFormControlLabel-root': {
        maxWidth: 'calc(50% - 10px)',
        flex: '0 0 calc(50% - 10px)',
        marginBottom: '0',
        '&:last-child': {
          marginRight: '0'
        },
        '@media screen and (max-width: 768px)': {
          marginBottom: '10px',
          marginRight: 0,
          maxWidth: '100%',
          flex: '0 0 100%',
          '&:last-child': {
            marginBottom: '0'
          }
        }
      }
    },
    notBackgroudRadio: {
      // display: 'inline-block',
      '&.MuiFormGroup-root': {
        flexDirection: 'row'
      },
      '& .MuiTypography-root': {
        fontSize: theme.typography.$fzBody,
        lineHeight: '30px',
        '@media (max-width: 768px)': {
          fontSize: theme.typography.$fzH5,
          lineHeight: '28px'
        }
      },
      '& .MuiIconButton-colorSecondary': {
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    label: {
      fontSize: '14px',
      color: theme.palette.$greyishBrown,
      marginBottom: '10px',
      lineHeight: '24px'
    },
    checkboxNotBackgroud: {
      marginRight: '45px',
      marginLeft: '0',
      // marginBottom: 10,
      '&:last-child': {
        marginBottom: 0
      },
      '& .MuiIconButton-root': {
        maxWidth: '20px',
        flex: '0 0 20px',
        padding: '0',
        marginRight: '10px'
      }
    },
    checkboxCheckNotBackgroud: {
      '& .MuiRadio-colorSecondary.Mui-checked': {
        color: 'rgba(0, 0, 0, 0.4)',
        maxWidth: '20px',
        flex: '0 0 20px',
        padding: '0',
        marginRight: '10px'
      }
    },
    icon: {
      borderRadius: '50%',
      maxWidth: '20px',
      flex: '0 0 20px',
      height: '20px',
      border: '2px solid #667c88',
      boxSizing: 'border-box',
      position: 'relative',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)'
      }
    },
    checkedIcon: {
      backgroundColor: '#667c88',
      '&:before': {
        width: 12,
        height: 12,
        backgroundImage: 'radial-gradient(#fff,#fff 24%,transparent 38%)',
        content: '""',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }
    },
    iconBackground: {
      borderRadius: '50%',
      maxWidth: '20px',
      flex: '0 0 20px',
      height: '20px',
      backgroundColor: 'transparent',
      boxSizing: 'border-box',
      border: '2px solid #7c909b',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)'
      }
    },
    checkedIconBackground: {
      border: '7px solid #fff'
    },
    isCheckedDisable: {
      border: "2px solid ".concat(theme.palette.$veryLightGrey)
    },
    errorMessage: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6,
      marginTop: '10px'
    },
    vertical: {
      marginBottom: '10px',
      width: '100%',
      '&:last-child': {
        marginBottom: 0
      }
    },
    isDisableNoBackground: {
      backgroundColor: 'transparent',
      opacity: 0.4,
      pointerEvents: 'none'
    }
  };
});

var RadioComponent = function RadioComponent(_ref) {
  var background = _ref.background,
      listCheckBox = _ref.listCheckBox,
      getValue = _ref.getValue,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      radioKey = _ref.radioKey,
      horizontal = _ref.horizontal,
      vertical = _ref.vertical,
      errorText = _ref.errorText,
      countrySingapore = _ref.countrySingapore,
      disableOther = _ref.disableOther;
  var classes = useStyles();

  var _useState = useState(listCheckBox),
      _useState2 = _slicedToArray(_useState, 2),
      listCheck = _useState2[0],
      setListCheck = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      valueCheckbox = _useState4[0],
      setValueCheckbox = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  useEffect(function () {
    setValueCheckbox(value);
  }, [value]);

  var handleChange = function handleChange(event) {
    var listCheckClone = _.cloneDeep(listCheck);

    listCheckClone.forEach(function (item) {
      item.checked = item.text === event.target.value || item.checked && event.target.value === null;
    });

    if (event.target.value) {
      setError(null);
    }

    setValueCheckbox(event.target.value);
    setListCheck(listCheckClone);
    getValue(event.target.value, name);
  };

  useEffect(function () {
    setListCheck(listCheckBox);
  }, [listCheckBox]);

  var handleValidate = function handleValidate() {
    if (!valueCheckbox) {
      setError(errorText);
    } else {
      setError(null);
    }
  };

  useEffect(function () {
    if (radioKey) {
      handleValidate();
    }
  }, [radioKey]);
  useEffect(function () {
    if (countrySingapore) {
      setError(errorText);
    } else {
      setError(null);
    }
  }, [countrySingapore]);
  return /*#__PURE__*/React.createElement("div", null, background ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RadioGroup, {
    value: valueCheckbox,
    onChange: handleChange,
    className: clsx(horizontal && classes.horizontal),
    id: "".concat(error ? 'errorType-label' : '')
  }, listCheck.length > 0 && listCheck.map(function (item, index) {
    return /*#__PURE__*/React.createElement(FormControlLabel, {
      key: index,
      className: clsx(classes.backgroundRadio, item.checked ? classes.checkboxCheck : classes.checkboxDefault, disableOther && disableOther !== 'Singapore' && item.text === 'Use above as mailing address' ? classes.isDisable : ''),
      value: item.text,
      control: /*#__PURE__*/React.createElement(Radio, {
        disableRipple: true,
        icon: /*#__PURE__*/React.createElement("span", {
          className: clsx(classes.iconBackground, item.checked && classes.checkedIconBackground, disableOther && disableOther !== 'Singapore' && item.text === 'Use above as mailing address' ? classes.isCheckedDisable : '')
        }),
        checkedIcon: /*#__PURE__*/React.createElement("span", {
          className: clsx(classes.iconBackground, item.checked && classes.checkedIconBackground)
        })
      }),
      label: item.text
    });
  })), /*#__PURE__*/React.createElement("span", {
    className: classes.errorMessage
  }, error)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormLabel, {
    className: classes.label,
    component: "legend",
    id: "".concat(error ? 'errorType-label' : '')
  }, label), /*#__PURE__*/React.createElement(RadioGroup, {
    className: clsx(classes.notBackgroudRadio),
    onChange: handleChange,
    value: valueCheckbox
  }, listCheck.length > 0 && listCheck.map(function (item, index) {
    return /*#__PURE__*/React.createElement(FormControlLabel, {
      className: clsx(classes.checkboxNotBackgroud, item.checked && classes.checkboxCheckNotBackgroud, vertical && classes.vertical, item.disable ? classes.isDisableNoBackground : ''),
      key: index,
      value: item.text,
      control: /*#__PURE__*/React.createElement(Radio, {
        disableRipple: true,
        icon: /*#__PURE__*/React.createElement("span", {
          className: clsx(classes.icon, item.checked && classes.checkedIcon)
        }),
        checkedIcon: /*#__PURE__*/React.createElement("span", {
          className: clsx(classes.icon, item.checked && classes.checkedIcon)
        })
      }),
      label: item.text
    });
  })), /*#__PURE__*/React.createElement("span", {
    className: classes.errorMessage
  }, error)));
};

RadioComponent.defaultProps = {
  background: false,
  listCheckBox: [],
  getValue: function getValue(_) {
    return _;
  },
  label: '',
  horizontal: false,
  vertical: false,
  radioKey: 0,
  value: '',
  errorText: 'This field is required',
  countrySingapore: false,
  disableOther: ''
};
{
  /* <Radio label={'Are you employed by OCBC Securities Pte Ltd?'} getValue={(e) => console.log(e, "eee")} listCheckBox={listCheckBox}></Radio> */
}
RadioComponent.propTypes = {
  background: PropTypes.bool,
  listCheckBox: PropTypes.array,
  getValue: PropTypes.func,
  label: PropTypes.node,
  horizontal: PropTypes.bool,
  radioKey: PropTypes.any,
  value: PropTypes.string,
  vertical: PropTypes.bool,
  errorText: PropTypes.string,
  countrySingapore: PropTypes.bool,
  disableOther: PropTypes.string
};
export default RadioComponent;