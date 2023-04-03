import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
var useStyles = makeStyles(function (theme) {
  return {
    infoStatusComponent: {
      width: '100%',
      height: '100%',
      padding: '40px 20px',
      borderRadius: '5px',
      background: theme.palette.$lightWhite,
      boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02)',
      '@media screen and (max-width: 768px)': {
        padding: '20px 10px'
      }
    },
    blockImage: {
      width: '80px',
      margin: '0 auto',
      '@media screen and (max-width: 768px)': {
        width: '55px'
      },
      '& img': {
        width: '100%',
        height: 'auto'
      }
    },
    blockContent: {
      marginTop: '20px',
      '@media screen and (max-width: 768px)': {
        marginTop: '10px'
      }
    },
    blockHeading: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1',
      height: 'calc(100% - 50px)'
    }
  };
});

var InfoStatus = function InfoStatus(_ref) {
  var imgSrc = _ref.imgSrc,
      children = _ref.children,
      contentFooter = _ref.contentFooter;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.infoStatusComponent
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.blockHeading
  }, imgSrc && /*#__PURE__*/React.createElement("div", {
    className: classes.blockImage
  }, /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: "test"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.blockContent
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: classes.blockFooter
  }, contentFooter));
};

InfoStatus.defaultProps = {
  imgSrc: ''
};
InfoStatus.propTypes = {
  imgSrc: PropTypes.string
};
export default InfoStatus;