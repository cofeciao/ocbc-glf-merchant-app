import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Link from '../link';
var useStyles = makeStyles(function (theme) {
  return {
    footerComponent: _defineProperty({
      padding: '156px 0 84px',
      position: 'relative',
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: theme.typography.$fzH6,
      color: theme.palette.$coolGrey,
      zIndex: '100',
      backgroundColor: theme.palette.$lightWhite,
      left: 0,
      '& .footer-component-left': {
        width: '50%',
        '@media (max-width: 992px)': {
          textAlign: 'left',
          width: '100%'
        },
        '& ul': {
          listStyleType: 'none',
          padding: '0',
          margin: '0',
          '& li': {
            display: 'inline-block',
            marginRight: '40px',
            '& a': {
              fontSize: theme.palette.fzH6
            }
          }
        }
      },
      '& .footer-component-right': {
        width: '50%',
        textAlign: 'right',
        '@media (max-width: 992px)': {
          textAlign: 'left',
          width: '100%'
        }
      },
      '@media (max-width: 992px)': {
        display: 'block',
        textAlign: 'left',
        padding: '50px 0px 50px',
        '& .footer-component-left': {
          marginBottom: '20px'
        }
      }
    }, "@media (max-width: 992px)", {
      display: 'block',
      textAlign: 'left',
      padding: '40px 0',
      lineHeight: 1.75,
      '& .footer-component-left': {
        marginBottom: '20px',
        '& ul': {
          listStyleType: 'none',
          padding: '0',
          margin: '0',
          '& li': {
            display: 'block !important',
            marginRight: '40px',
            lineHeight: '28px',
            width: '100%',
            '& a': {
              fontSize: theme.typography.$fzH5
            }
          }
        }
      }
    }),
    container: {
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '0 10px'
    }
  };
});

var Footer = function Footer() {
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.footerComponent
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-component-left"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://www.ocbc.com/group/security/online/index.html",
    color: "cool-grey",
    classHover: "linkNotUnderLine",
    fontSize: "fH6"
  }, "T&Cs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://www.ocbc.com/personal-banking/conditions-of-access.html",
    color: "cool-grey",
    classHover: "linkNotUnderLine",
    fontSize: "fH6"
  }, "Conditions of Access")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://www.ocbc.com/personal-banking/policies",
    color: "cool-grey",
    classHover: "linkNotUnderLine",
    fontSize: "fH6"
  }, "Policies")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://www.ocbc.com/personal-banking/notices.html",
    color: "cool-grey",
    classHover: "linkNotUnderLine",
    fontSize: "fH6"
  }, "Notices")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-component-right"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Copyright 2004 - ", new Date().getFullYear(), " - OCBC Bank. All Rights Reserved. Co. Reg. No.: 193200032W"))));
};

export default Footer;