import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["list", "label", "getValue", "error", "isFullWidth", "hasLine", "hasIcon", "handleDialog", "checkBoxClass", "marginLabel", "isReturn"];

/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import clsx from 'clsx';
var useStyles = makeStyles(function (theme) {
  return {
    checkboxComponent: {
      '& .MuiFormGroup-root': {
        marginTop: '10px',
        '& .MuiIconButton-colorSecondary': {
          '&:hover': {
            backgroundColor: 'rgba(238, 238, 238, 0.5)'
          }
        },
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
          color: theme.palette.$battleshipGrey
        },
        '& .MuiTypography-root': {
          color: theme.palette.$greyishBrown,
          fontSize: theme.typography.$fzBody,
          '@media (max-width: 768px)': {
            fontSize: theme.typography.$fzH5
          }
        },
        '& .MuiSvgIcon-root': {
          display: 'none'
        },
        '& .MuiFormControlLabel-label': {
          '& .MuiSvgIcon-root': {
            display: 'inline-block',
            maxWidth: '18px'
          }
        },
        '& .MuiFormControlLabel-root': {
          marginLeft: '0',
          marginBottom: '10px',
          alignItems: 'flex-start'
        },
        '& .MuiTouchRipple-root': {
          width: '20px',
          height: '20px',
          borderRadius: '5px',
          border: 'solid 1px #667c88'
        },
        '& .MuiButtonBase-root': {
          marginRight: '15px',
          marginTop: '4px'
        },
        '& .Mui-checked': {
          '& .MuiTouchRipple-root': {
            backgroundColor: '#667c88',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '4px',
              left: '46%',
              transform: 'rotate(45deg) translateX(-50%)',
              display: 'inline-block',
              height: '10px',
              width: '4px',
              borderBottom: '3px solid #ffffff',
              borderRight: '3px solid #ffffff'
            }
          }
        }
      }
    },
    arrow: {
      display: 'inline-flex',
      verticalAlign: 'sub'
    },
    labelCheckbox: {
      fontSize: '14px',
      color: theme.palette.$greyishBrown,
      display: 'inline-block'
    },
    errorMessage: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6
    },
    line: {
      width: 'calc(100% + 60px)',
      height: '1px',
      margin: '30px -30px',
      backgroundColor: theme.palette.$lightWhite,
      '@media (max-width: 1024px)': {
        width: '100%'
      }
    },
    margin: {
      '& .MuiFormGroup-root': {
        '& .MuiFormControlLabel-root': {
          margin: function margin(props) {
            return props.margin && props.margin;
          }
        }
      }
    }
  };
});

var CheckboxComponent = function CheckboxComponent(_ref) {
  var list = _ref.list,
      label = _ref.label,
      getValue = _ref.getValue,
      error = _ref.error,
      isFullWidth = _ref.isFullWidth,
      hasLine = _ref.hasLine,
      hasIcon = _ref.hasIcon,
      handleDialog = _ref.handleDialog,
      checkBoxClass = _ref.checkBoxClass,
      marginLabel = _ref.marginLabel,
      isReturn = _ref.isReturn,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles(props);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      listCheckbox = _useState2[0],
      setListCheckbox = _useState2[1];

  useEffect(function () {
    setListCheckbox(list);
  }, [list]);

  var handleChange = function handleChange(e) {
    var cloneList = _toConsumableArray(listCheckbox);

    var checkValue = [];
    cloneList.forEach(function (item) {
      if (item.text === e.target.name) {
        item.check = e.target.checked;
      }

      if (item.check) {
        checkValue.push({
          name: item.text
        });
      }

      if (isReturn) {
        checkValue.push({
          name: item.text
        });
      }
    });
    setListCheckbox(cloneList);
    getValue(checkValue);
  };

  var handleDialogPrevent = function handleDialogPrevent(e) {
    handleDialog();
    e.preventDefault();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.checkboxComponent, checkBoxClass, classes.margin)
  }, label && /*#__PURE__*/React.createElement(FormLabel, {
    className: classes.labelCheckbox,
    component: "legend"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: classes.errorMessage
  }, error), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, listCheckbox && listCheckbox.length > 0 && listCheckbox.map(function (item, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement(Grid, {
      key: index,
      item: true,
      xs: 12,
      sm: isFullWidth ? 12 : index % 2 === 0 ? 7 : 5
    }, /*#__PURE__*/React.createElement(FormControlLabel, {
      control: /*#__PURE__*/React.createElement(Checkbox, {
        checked: item.check,
        onChange: handleChange,
        name: item.text
      }),
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          margin: "".concat(marginLabel),
          display: 'inline-block'
        }
      }, item.text, ' ', hasIcon && index === 1 && /*#__PURE__*/React.createElement(InfoSharpIcon, {
        className: classes.arrow,
        onClick: function onClick(e) {
          return handleDialogPrevent(e);
        }
      }))
    })), hasLine && index !== listCheckbox.length - 1 && /*#__PURE__*/React.createElement("div", {
      className: classes.line
    }));
  }))));
};

{
  /* <Checkbox1 error={list.error} getValue={getValue} label={'Source of your wealth (Please select all that apply.)'} list={list.list}></Checkbox1> */
} // const list1 = {
//     error: 'sai roi', list: [
//       { text: 'Savings', check: true },
//       { text: 'Salary', check: false },
//       { text: 'Business', check: false },
//       { text: 'Inherited wealth', check: false },
//       { text: 'Rental income', check: false },
//       { text: 'Sale of property or investment', check: false },
//     ]
//   }

CheckboxComponent.defaultProps = {
  list: [],
  label: '',
  getValue: function getValue(_) {
    return _;
  },
  error: '',
  isFullWidth: false,
  hasLine: false,
  hasIcon: false,
  handleDialog: function handleDialog(_) {
    return _;
  },
  margin: '',
  marginLabel: '',
  isReturn: false
};
CheckboxComponent.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string,
  margin: PropTypes.string,
  marginLabel: PropTypes.string,
  getValue: PropTypes.func,
  error: PropTypes.string,
  isFullWidth: PropTypes.bool,
  hasLine: PropTypes.bool,
  hasIcon: PropTypes.bool,
  handleDialog: PropTypes.func,
  isReturn: PropTypes.bool
};
export default CheckboxComponent;