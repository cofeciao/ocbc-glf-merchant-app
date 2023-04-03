import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
var useStyles = makeStyles(function (theme) {
  return {
    container: {
      padding: '0 10px',
      paddingTop: '60px',
      minHeight: 'calc(100vh - 490px)',
      maxWidth: '1440px',
      '@media (max-width: 1080px)': {
        padding: '0'
      }
    },
    fixed: {
      position: 'sticky',
      top: '20px',
      height: '100%',
      transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1) !important',
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
      '@media(max-width: 1080px)': {
        position: 'relative',
        top: 'auto',
        marginTop: '20px'
      }
    },
    scrollUp: {
      transform: 'matrix(1, 0, 0, 1, 0, 83)',
      '@media(max-width: 1080px)': {
        position: 'relative',
        top: 'auto',
        transform: 'matrix(1, 0, 0, 1, 0, 0) !important'
      }
    }
  };
}, 'layout-form'); // eslint-disable-next-line react/prop-types

var FormLayout = function FormLayout(_ref) {
  var tabs = _ref.tabs,
      content = _ref.content,
      isMyInfo = _ref.isMyInfo,
      isFullWidth = _ref.isFullWidth;
  var classes = useStyles();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      yPos = _useState2[0],
      setYPos = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollUp = _useState4[0],
      setScrollUp = _useState4[1];

  var ref = useRef(null);

  var handleScroll = function handleScroll() {
    if (window.scrollY < yPos && window.scrollY > 130) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }

    setYPos(window.scrollY);
  };

  useEffect(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return /*#__PURE__*/React.createElement(Container, {
    className: classes.container
  }, /*#__PURE__*/React.createElement("section", {
    className: classes.myInfoContent,
    ref: ref
  }, isFullWidth ? /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    className: "".concat(isMyInfo ? 'custom-gird-tablet-content' : '')
  }, content)) : /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 3,
    md: 3,
    sm: 12,
    xs: 12,
    className: clsx(classes.fixed, scrollUp && classes.scrollUp, "".concat(isMyInfo ? 'custom-gird-tablet-tabs' : ''))
  }, tabs), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12,
    className: "".concat(isMyInfo ? 'custom-gird-tablet-content' : '')
  }, content))));
};

FormLayout.defaultProps = {
  isMyInfo: true,
  isFullWidth: false
};
FormLayout.propTypes = {
  tabs: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  isMyInfo: PropTypes.bool,
  isFullWidth: PropTypes.bool
};
export default FormLayout;