import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import FormLabel from '@material-ui/core/FormLabel';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Button from '../button/Button';
import Dialog from '../dialog/Dialog';
var useStyles = makeStyles(function (theme) {
  return {
    formExceededNumber: {
      paddingBottom: '20px',
      '& p': {
        fontSize: theme.typography.$fzH5,
        fontWeight: 'normal',
        lineHeight: '1.75',
        textAlign: 'center',
        color: theme.palette.$greyishBrown,
        margin: '16px 0 0 0',
        fontFamily: theme.typography.fontFamily,
        '&:first-child': {
          margin: '20px 0 0 0'
        },
        '@media (max-width: 414px)': {
          fontSize: theme.typography.$fzH6,
          lineHeight: '20px'
        },
        '& b': {
          fontWeight: 'bold',
          lineHeight: '1.5',
          fontFamily: theme.typography.fontFamily,
          '@media (max-width: 414px)': {
            lineHeight: '20px'
          }
        },
        '& a': {
          fontWeight: 'bold',
          lineHeight: '1.5',
          fontFamily: theme.typography.fontFamily,
          textDecoration: 'none'
        }
      }
    },
    content: {
      maxWidth: '620px',
      marginLeft: 'auto',
      marginRight: 'auto',
      '& p': {
        '& a': {
          fontSize: theme.typography.$fzH5,
          lineHeight: '1.75',
          textAlign: 'center',
          margin: '16px 0 0 0',
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.$clearBlue,
          fontWeight: 'normal',
          background: "linear-gradient( 180deg, transparent 1px, ".concat(theme.palette.$linkHover, " 1px, ").concat(theme.palette.$linkHover, " 2px, transparent 2px)"),
          backgroundPosition: 'left bottom',
          backgroundSize: '0% 3px',
          transition: 'background-size 0.3s ease-in-out',
          backgroundRepeat: 'no-repeat',
          paddingBottom: '2px',
          borderBottom: '3px solid transparent',
          '&:hover': {
            backgroundSize: '100% 3px',
            color: '#0056b3'
          }
        }
      }
    },
    wrapBtn: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
      '& button': {
        margin: '0 11px',
        '& span': {
          fontFamily: theme.typography.fontFamily
        }
      },
      '@media (max-width: 414px)': {
        '& button': {
          '&:first-child': {
            marginLeft: 0
          },
          '&:last-child': {
            marginRight: 0
          }
        }
      }
    },
    phone: {
      display: 'flex',
      justifyContent: 'center',
      '& a': {
        fontSize: theme.typography.$fzH5,
        fontWeight: 'normal',
        lineHeight: '1.5',
        color: theme.palette.$clearBlue,
        textDecoration: 'none',
        fontFamily: theme.typography.fontFamily,
        '@media (max-width: 414px)': {
          lineHeight: '20px',
          fontSize: theme.typography.$fzH6
        }
      }
    },
    iconAlert: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '40px',
      '@media (max-width: 414px)': {
        marginTop: '20px'
      }
    },
    returnHome: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      fontSize: theme.typography.$fzH2,
      fontWeight: 'bold',
      lineHeight: '1.42',
      textAlign: 'center',
      color: theme.palette.$greyishBrown,
      position: 'relative',
      zIndex: '1',
      paddingTop: '20px',
      '@media (max-width: 414px)': {
        fontSize: theme.typography.$fzH4
      }
    }
  };
}, 'exceeded-number-of-tries');

var ExceededNumberOfTries = function ExceededNumberOfTries(_ref) {
  var isBackToTransfers = _ref.isBackToTransfers,
      label = _ref.label,
      description = _ref.description,
      localTollFree = _ref.localTollFree,
      overseas = _ref.overseas,
      numberLocalTollFree = _ref.numberLocalTollFree,
      numberOverseas = _ref.numberOverseas,
      backToHome = _ref.backToHome,
      backToTransfer = _ref.backToTransfer,
      handleBackToHome = _ref.handleBackToHome,
      handleBackToTransfers = _ref.handleBackToTransfers,
      icon = _ref.icon,
      showPopup = _ref.showPopup;
  var classes = useStyles();
  var history = useHistory();

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleHidePopup = function handleHidePopup() {
    setIsOpen(false);
  };

  useEffect(function () {
    setIsOpen(showPopup);
  }, [showPopup]);
  return /*#__PURE__*/React.createElement(Dialog, {
    isOpen: isOpen,
    width: 700,
    onRequestClose: handleHidePopup
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.formExceededNumber
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    className: classes.iconAlert
  }), /*#__PURE__*/React.createElement(FormLabel, {
    className: classes.title,
    component: "legend"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: classes.content,
    dangerouslySetInnerHTML: {
      __html: description
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.contact
  }, numberLocalTollFree && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, localTollFree)), /*#__PURE__*/React.createElement("div", {
    className: classes.phone
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:".concat(numberLocalTollFree)
  }, numberLocalTollFree))), numberOverseas && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, overseas)), /*#__PURE__*/React.createElement("div", {
    className: classes.phone
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:".concat(numberLocalTollFree)
  }, numberOverseas))))), !isBackToTransfers ? /*#__PURE__*/React.createElement(React.Fragment, null, backToHome && /*#__PURE__*/React.createElement("div", {
    className: classes.returnHome
  }, /*#__PURE__*/React.createElement(Button, {
    backgroundClass: "bgGreyThickToLight",
    onClick: function onClick() {
      return handleBackToTransfers();
    }
  }, backToHome))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: backToTransfer || backToHome ? classes.wrapBtn : ''
  }, backToTransfer && /*#__PURE__*/React.createElement(Button, {
    backgroundClass: "bgGreyThickToLight",
    onClick: function onClick() {
      return history.push(hrefBackToTransfer);
    }
  }, backToTransfer), backToHome && /*#__PURE__*/React.createElement(Button, {
    backgroundClass: "bgClearblue",
    onClick: function onClick() {
      return handleBackToHome();
    }
  }, backToHome)))));
};

ExceededNumberOfTries.defaultProps = {
  showPopup: true,
  icon: '',
  label: 'Exceeded number of tries',
  description: 'Get in touch with us to unlock your OTP in order to proceed with using it again',
  localTollFree: 'Local toll-free',
  numberLocalTollFree: '1800 363 3333',
  numberOverseas: '1800 363 3333',
  overseas: 'Overseas',
  backToHome: 'Back to Home',
  isBackToTransfers: true,
  handleBackToTransfers: function handleBackToTransfers() {},
  handleBackToHome: function handleBackToHome() {},
  backToTransfer: 'Back to Transfers'
};
ExceededNumberOfTries.propTypes = {
  showPopup: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  localTollFree: PropTypes.string,
  numberLocalTollFree: PropTypes.string,
  overseas: PropTypes.string,
  numberOverseas: PropTypes.string,
  backToHome: PropTypes.string,
  isBackToTransfers: PropTypes.bool,
  handleBackToTransfers: PropTypes.func,
  backToTransfer: PropTypes.string,
  handleBackToHome: PropTypes.func
};
export default ExceededNumberOfTries;