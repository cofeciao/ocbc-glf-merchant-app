// import modules
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react'; // render UI

var CheckBoxField = function CheckBoxField(_ref) {
  var item = _ref.item,
      classes = _ref.classes,
      index = _ref.index,
      handleChange = _ref.handleChange,
      lg = _ref.lg,
      md = _ref.md,
      sm = _ref.sm,
      xs = _ref.xs,
      className = _ref.className;
  return /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: lg,
    md: md,
    sm: sm,
    xs: xs,
    className: clsx(classes.radioItem, className),
    key: index
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    className: clsx(classes.fromControlLabel, item.checked && classes.checkBoxChecked),
    key: index,
    value: item.text,
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement("span", {
        className: clsx(classes.icon, item.checked && classes.checkedIcon)
      }),
      onChange: handleChange,
      name: item.label,
      checked: item.checked
    }),
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: clsx(classes.label, item.checked && classes.labelChecked)
    }, item.label))
  }));
};

CheckBoxField.defaultProps = {
  item: {},
  index: 0,
  classes: {},
  handleChange: function handleChange() {},
  lg: 12,
  md: 12,
  sm: 12,
  xs: 12,
  className: ''
};
CheckBoxField.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  classes: PropTypes.object,
  handleChange: PropTypes.func,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
  className: PropTypes.string
};
export default CheckBoxField;