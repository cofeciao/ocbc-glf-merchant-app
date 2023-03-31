import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
var useStyles = makeStyles(function (theme) {
  return {
    pl34: {
      paddingLeft: '34px'
    },
    arrow: {
      display: 'inline-flex',
      verticalAlign: 'middle',
      fontSize: theme.typography.$fzH4
    },
    fullWidth: {
      position: 'relative',
      '@media (max-width: 1024px)': {
        maxWidth: '100%',
        flexBasis: '100%'
      }
    },
    container: {
      padding: '0 10px',
      paddingTop: '60px',
      minHeight: 'calc(100vh - 490px)',
      '@media (min-width: 1600px)': {
        maxWidth: '1440px'
      },
      '@media (max-width: 768px)': {
        padding: '0'
      }
    }
  };
});
export default function CheckBoxItem(_ref) {
  var item = _ref.item,
      handleChange = _ref.handleChange,
      hasIcon = _ref.hasIcon,
      handleDialogPrevent = _ref.handleDialogPrevent;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      handleCheckBox = _useState2[0],
      setCheckBox = _useState2[1];

  var classes = useStyles();
  useEffect(function () {
    setCheckBox(item.check);
  }, [item.check]);

  var onChange = function onChange(e) {
    handleChange(e);
    setCheckBox(e.target.checked);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: handleCheckBox,
      onChange: onChange,
      name: item.text
    }),
    label: /*#__PURE__*/React.createElement("span", null, item.text, ' ', hasIcon && index === 1 && /*#__PURE__*/React.createElement(InfoSharpIcon, {
      className: classes.arrow,
      onClick: function onClick(e) {
        return handleDialogPrevent(e);
      }
    }))
  }));
}