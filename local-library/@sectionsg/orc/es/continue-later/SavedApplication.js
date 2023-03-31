import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button, Link } from '../index';
import useStyles from './styles';

var SavedApplication = function SavedApplication(_ref) {
  var closeDialog = _ref.closeDialog,
      translate = _ref.translate;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.dialogContentContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.dialogTitle
  }, translate('you-have-a-saved-application')), /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.dialogDescription, 'mb-40')
  }, translate('continue-with-your-saved-application')), /*#__PURE__*/React.createElement("div", {
    className: classes.dialogButton
  }, /*#__PURE__*/React.createElement(Button, {
    backgroundClass: "bgGunmetalBluegrey",
    onClick: closeDialog
  }, translate('yes-continue')), /*#__PURE__*/React.createElement("div", {
    className: "ml-20 fw-600 d-flex align-center"
  }, /*#__PURE__*/React.createElement(Link, {
    classHover: "linkUnderline",
    target: "",
    href: "/"
  }, translate('start-over')))));
};

SavedApplication.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
};
export default SavedApplication;