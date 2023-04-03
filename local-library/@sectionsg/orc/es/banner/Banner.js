import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["data"];

/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';

/* babel-plugin-inline-import '../assets/images/alert-icon.svg' */
var IconAlert = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTgwIDQwYzAgMjIuMDkyLTE3LjkwOCA0MC00MCA0MFMwIDYyLjA5MiAwIDQwIDE3LjkwOCAwIDQwIDBzNDAgMTcuOTA4IDQwIDQwIiBmaWxsPSIjRUJFRkYxIiBvcGFjaXR5PSIuMjUiLz4KICAgICAgICA8cGF0aCBkPSJNNDAgNjAuMTAzaDI4LjU4NmMyLjA3IDAgMy4zNjMtMi4wNDkgMi4zMjgtMy42ODdMNTYuNjIxIDMzLjc3NWwtMTQuMjkzLTIyLjY0Yy0xLjAzNS0xLjY0LTMuNjIxLTEuNjQtNC42NTYgMGwtMTQuMjkzIDIyLjY0LTE0LjI5MyAyMi42NGMtMS4wMzUgMS42NC4yNTggMy42ODggMi4zMjggMy42ODhINDB6IiBmaWxsPSIjNjY3Qzg4Ii8+CiAgICAgICAgPHBhdGggZD0iTTM2LjEzIDUwLjY1N2MwLTIuMTQgMS43MTEtMy44OSAzLjg1LTMuODkgMi4xNCAwIDMuODkgMS43NSAzLjg5IDMuODkgMCAyLjEtMS43NSAzLjg1MS0zLjg5IDMuODUxYTMuODYgMy44NiAwIDAgMS0zLjg1LTMuODUxTTM3LjA2MyA0NC41MTZsLS41MDYtMTkuMDI0aDYuODg2bC0uNTA1IDE5LjAyNHoiIGZpbGw9IiNFQkVGRjEiLz4KICAgIDwvZz4KPC9zdmc+Cg==";
// import './Button.scss';
// backgroundClass: bgLipstickOrangey || bgClearblue || square || bgGunmetalBluegrey
// href='https://www.facebook.com/'
// hasHref: if button is <a></a> href just only use background: 'bg-clearblue'
var useStyles = makeStyles(function (theme) {
  var _background;

  return {
    notification: {
      zIndex: 1005,
      position: 'relative',
      margin: '0 -8px'
    },
    background: (_background = {
      background: '#7c909b'
    }, _defineProperty(_background, "background", '-o-linear-gradient(168deg, #7c909b, #495a63)'), _defineProperty(_background, "color", '#ffffff'), _defineProperty(_background, "background", 'linear-gradient(282deg, #7c909b, #495a63)'), _defineProperty(_background, "filter", 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#7c909b\', endColorstr=\'#495a63\', GradientType=0 )'), _background),
    notificationWrapper: {
      padding: '40px 0',
      position: 'relative',
      color: '#ffffff'
    },
    notificationDescription: {
      fontSize: 14,
      lineHeight: '24px',
      marginLeft: '15px',
      '@media screen and (max-width: 767px)': {
        marginLeft: '0'
      }
    },
    container: {
      padding: '0 10px',
      maxWidth: '1440px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      '@media only screen and (max-width: 1360px) and (min-width: 768px)': {
        padding: '0 40px'
      },
      '@media screen and (max-width: 767px)': {
        display: 'block'
      }
    },
    images: {
      width: '30px',
      height: '30px'
    }
  };
});

var Banner = function Banner(_ref) {
  var data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.notification
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.background
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.notificationWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("img", {
    className: classes.images,
    src: IconAlert,
    alt: "icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.notificationContent
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.notificationDescription
  }, /*#__PURE__*/React.createElement("p", {
    className: classes.coWhite,
    dangerouslySetInnerHTML: {
      __html: data.text
    }
  })))))));
};

Banner.defaultProps = {};
Banner.propTypes = {};
export default Banner;