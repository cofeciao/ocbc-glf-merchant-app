import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx'; // IMPORT MATERIAL COMPONENTS

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import styles from './styles';
var useStyles = makeStyles(function (theme) {
  return _objectSpread({}, styles(theme));
});

var SelectGroup = function SelectGroup(props) {
  var classes = useStyles();
  var matches = useMediaQuery('(max-width:768px)');
  var listValues = props.listValues,
      cardName = props.cardName,
      getValue = props.getValue,
      principalCard = props.principalCard,
      supplementaryCard = props.supplementaryCard,
      isCard = props.isCard,
      listValuesTabs = props.listValuesTabs,
      setActive = props.setActive; // DEFINE VARIABLES

  var _useState = useState(cardName),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1]; // DEFINE FUNCTIONS


  var handleChange = function handleChange(event) {
    if (event.target) {
      setName(event.target.value);

      if (!isCard) {
        setActive(event.target.value);
      }

      getValue({
        value: event.target.value,
        name: event.target.name
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormControl, {
    className: clsx(classes.formControl, !isCard ? classes.tabs : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.positionRelative
  }, !matches ? /*#__PURE__*/React.createElement(Select, {
    id: "grouped-select",
    value: name,
    onChange: handleChange,
    MenuProps: {
      className: classes.dropdownStyleSingle
    },
    IconComponent: KeyboardArrowDownOutlinedIcon
  }, /*#__PURE__*/React.createElement(ListSubheader, null, principalCard), /*#__PURE__*/React.createElement(MenuItem, {
    className: classes.optionSelectMain,
    value: cardName
  }, cardName), /*#__PURE__*/React.createElement(ListSubheader, null, supplementaryCard), listValues && listValues.map(function (data, idx) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: idx,
      className: classes.optionSelect,
      value: data.name
    }, data.name);
  })) : /*#__PURE__*/React.createElement(Select, {
    id: "grouped-select",
    value: name,
    onChange: handleChange,
    MenuProps: {
      className: classes.dropdownStyleSingle
    },
    IconComponent: KeyboardArrowDownOutlinedIcon,
    "native": true
  }, isCard ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("optgroup", {
    label: principalCard
  }, /*#__PURE__*/React.createElement("option", {
    value: cardName
  }, cardName)), /*#__PURE__*/React.createElement("optgroup", {
    label: supplementaryCard
  }, listValues && listValues.map(function (data, idx) {
    return /*#__PURE__*/React.createElement("option", {
      key: idx,
      className: classes.optionSelect,
      value: data.name
    }, data.name);
  }))) : listValuesTabs && listValuesTabs.map(function (data, idx) {
    return /*#__PURE__*/React.createElement("option", {
      key: idx,
      className: classes.optionSelect,
      value: data.value
    }, data.value);
  })))));
};

export default SelectGroup;