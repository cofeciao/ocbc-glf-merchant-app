import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/** *
 * CARD CHECK BOX
 * child
 *  >> CheckboxField
 */
// import modules
import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'; // important child component

import CheckboxField from './CheckboxField'; // import style

import useStyles from './styles'; // render UI

var CardCheckbox = function CardCheckbox(_ref) {
  var label = _ref.label,
      textError = _ref.textError,
      dataCardCheckbox = _ref.dataCardCheckbox,
      getValue = _ref.getValue,
      checkboxKey = _ref.checkboxKey,
      lg = _ref.lg,
      md = _ref.md,
      sm = _ref.sm,
      xs = _ref.xs,
      className = _ref.className;
  var classes = useStyles();

  var _useState = useState(dataCardCheckbox),
      _useState2 = _slicedToArray(_useState, 2),
      listDataCardCheckbox = _useState2[0],
      setListDataCardCheckbox = _useState2[1]; // list data render


  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      statusErr = _useState4[0],
      setStatusErr = _useState4[1]; // list data render
  // handle validation of checkbox


  var handleValidation = function handleValidation(data) {
    return data.some(function (item) {
      return item.checked === true;
    });
  }; // handle show err msg


  var handleShowErrMsg = function handleShowErrMsg(data) {
    if (handleValidation(data)) {
      setStatusErr(false);
    } else {
      setStatusErr(true);
    }
  }; // listening dataCardCheckbox


  useEffect(function () {
    setListDataCardCheckbox(dataCardCheckbox);
  }, [dataCardCheckbox]); // fnc handle get value checkbox

  var handleChange = function handleChange(event) {
    var data = [];
    data = _toConsumableArray(listDataCardCheckbox); // clone list data

    var idx = data.findIndex(function (item) {
      return item.label === event.target.name;
    }); // find index of value checked
    // replace data at index

    if (idx >= 0) {
      data[idx] = {
        label: data[idx].label,
        checked: event.target.checked
      };
    }

    getValue({
      data: data,
      checked: event.target.checked,
      name: event.target.name,
      statusError: !handleValidation(data)
    });
    setListDataCardCheckbox(data);
    handleShowErrMsg(data);
  }; // handle listen event key


  useEffect(function () {
    if (checkboxKey) {
      if (handleValidation(listDataCardCheckbox)) {
        setStatusErr(false);
      } else {
        setStatusErr(true);
      }
    } else {
      setStatusErr(false);
    }
  }, [checkboxKey]);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.carCheckbox
  }, /*#__PURE__*/React.createElement(FormControl, {
    className: clsx(classes.grCardCheckbox)
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: classes.radioListTagItems
  }, label && /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.title, 'title-checkbox')
  }, label), /*#__PURE__*/React.createElement(FormGroup, null, listDataCardCheckbox.length > 0 && listDataCardCheckbox.map(function (item, index) {
    return (
      /*#__PURE__*/
      // Check box field
      React.createElement(CheckboxField, {
        classes: classes,
        item: item,
        index: index,
        handleChange: handleChange,
        lg: lg,
        md: md,
        sm: sm,
        xs: xs,
        key: index,
        className: className
      })
    );
  }))), statusErr && /*#__PURE__*/React.createElement(FormHelperText, {
    id: statusErr && 'errorType-label',
    className: classes.textErr
  }, textError)));
};

CardCheckbox.defaultProps = {
  label: 'What servicing request would you like to do today?',
  textError: 'This field is required',
  dataCardCheckbox: [],
  getValue: function getValue(_) {
    return _;
  },
  checkboxKey: 111,
  lg: 12,
  md: 12,
  sm: 12,
  xs: 12,
  className: ''
};
CardCheckbox.propTypes = {
  label: PropTypes.string,
  textError: PropTypes.string,
  dataCardCheckbox: PropTypes.array,
  getValue: PropTypes.func,
  checkboxKey: PropTypes.any,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
  className: PropTypes.string
};
export default CardCheckbox;