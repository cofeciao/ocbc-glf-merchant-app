import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { stylesPopup } from './styles';
var useStyles = makeStyles(function (theme) {
  return createStyles(_objectSpread({}, stylesPopup(theme)));
});

var FailMessageB = function FailMessageB() {
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.dialogContentContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.dialogTitle
  }, "Earn 50 OCBC$ (worth 20 miles) for every S$5 spent on eligible purchases"), /*#__PURE__*/React.createElement("div", {
    className: classes.dialogDescription
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."));
};

export default FailMessageB;