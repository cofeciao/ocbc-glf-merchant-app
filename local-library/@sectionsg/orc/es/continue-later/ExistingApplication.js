import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button, Link } from '../index';
import useStyles from './styles';

var ExistingApplication = function ExistingApplication(_ref) {
  var closeDialog = _ref.closeDialog,
      translate = _ref.translate;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.dialogContentContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.dialogTitle
  }, translate('you-are-leaving-this-application')), /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.dialogDescription, 'mb-40')
  }, translate('save-your-progress-and-continue-later')), /*#__PURE__*/React.createElement("div", {
    className: classes.dialogButton
  }, /*#__PURE__*/React.createElement(Button, {
    backgroundClass: "bgGunmetalBluegrey",
    onClick: function onClick() {
      return closeDialog();
    }
  }, translate('yes-save-application')), /*#__PURE__*/React.createElement("div", {
    className: "ml-20 fw-600 d-flex align-center"
  }, /*#__PURE__*/React.createElement(Link, {
    classHover: "linkUnderline",
    target: "",
    href: "/"
  }, translate('leave-anyway')))));
};

ExistingApplication.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
};
export default ExistingApplication;