import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
var useStyles = makeStyles(function (theme) {
  return {
    title: {
      fontSize: theme.typography.$fzH2,
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.42',
      letterSpacing: 'normal'
    },
    description: {
      fontSize: theme.typography.$fzH4,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.67',
      letterSpacing: 'normal',
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH6,
        '& br': {
          display: 'none'
        }
      }
    },
    mb40: {
      marginBottom: '40px'
    },
    blockTitle: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px'
    },
    ml20: {
      marginLeft: '20px'
    },
    buttonWrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    image: {
      marginRight: '20px',
      '@media (max-width: 768px)': {
        flex: '0 0 55px',
        maxWidth: '55px'
      },
      ' & img': {
        width: '100%',
        height: 'auto'
      }
    }
  };
}, 'main-content');

var MainContent = function MainContent(_ref) {
  var srcImage = _ref.srcImage,
      title = _ref.title,
      content = _ref.content;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.blockTitle
  }, srcImage && /*#__PURE__*/React.createElement("div", {
    className: classes.image
  }, /*#__PURE__*/React.createElement("img", {
    src: srcImage,
    alt: "#"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: classes.content
  }, content));
};

MainContent.defaultProps = {
  srcImage: '',
  title: ''
};
MainContent.propTypes = {
  srcImage: PropTypes.string,
  title: PropTypes.string
};
export default MainContent;