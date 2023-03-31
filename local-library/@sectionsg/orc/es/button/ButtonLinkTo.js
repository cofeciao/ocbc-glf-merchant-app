import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "backgroundClass", "href", "outline", "target", "classNameCustom", "fullWidthMobile"];

/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx'; // import './Button.scss';
// backgroundClass: bgLipstickOrangey || bgClearblue || square || bgGunmetalBluegrey
// href='https://www.facebook.com/'

var useStyles = makeStyles(function (theme) {
  return {
    root: {},
    buttonComponent: {
      width: 'auto',
      height: 'auto',
      borderRadius: '6px',
      border: 'none',
      fontSize: theme.typography.$fzH4,
      color: theme.palette.$white,
      outline: 'none !important',
      justifyContent: 'center !important',
      alignItems: 'center',
      background: 'black',
      display: 'inline-flex',
      position: 'relative',
      transition: 'background-color 1s ease',
      padding: '18px 30px',
      cursor: 'pointer',
      textDecoration: 'unset',
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: '6px',
        opacity: 1,
        visibility: 'visible',
        transition: '0.5s all',
        zIndex: 1
      },
      '& >*': {
        position: 'relative',
        zIndex: 2
      }
    },
    square: {
      width: '60px',
      height: '60px',
      padding: 0,
      backgroundColor: theme.palette.$white,
      border: "2px solid ".concat(theme.palette.$greyishBrown),
      color: theme.palette.$greyishBrown,
      fontSize: theme.typography.$fzH4,
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5
      },
      '&:hover': {
        background: theme.palette.$greyishBrown,
        color: theme.palette.$white
      }
    },
    bgGunmetalBluegrey: {
      backgroundColor: theme.palette.$blueGrey,
      fontWeight: 'bold',
      color: theme.palette.$white,
      '& span': {
        width: '100%',
        fontWeight: 'bold',
        fontFamily: '"OpenSans", Helvetica, Arial, sans-serif'
      },
      '& i': {
        fontSize: theme.typography.$fzH5,
        marginLeft: '7px'
      },
      '&::before': {
        background: "linear-gradient(296deg, ".concat(theme.palette.$gunmetal, ", ").concat(theme.palette.$blueGrey, ")")
      },
      '&:hover': {
        backgroundColor: theme.palette.$gunmetal,
        '&::before': {
          opacity: 0,
          visibility: 'hidden'
        }
      }
    },
    bgLipstickOrangey: {
      backgroundColor: theme.palette.$orangeyRed,
      color: theme.palette.$white,
      '& span': {
        width: '100%',
        fontWeight: 'bold',
        fontFamily: '"OpenSans", Helvetica, Arial, sans-serif'
      },
      '&::before': {
        background: "linear-gradient(to left, ".concat(theme.palette.$lipstick, ", ").concat(theme.palette.$orangeyRed, ")")
      },
      '&:hover': {
        backgroundColor: theme.palette.$lipstick,
        '&::before': {
          opacity: 0,
          visibility: 'hidden'
        }
      }
    },
    bgClearblue: {
      background: theme.palette.$white,
      fontWeight: 600,
      fontSize: theme.typography.$fzH5,
      color: theme.palette.$clearBlue,
      border: "2px solid ".concat(theme.palette.$clearBlue),
      '&:hover': {
        background: theme.palette.$clearBlue,
        color: theme.palette.$white
      }
    },
    link: {
      padding: 0,
      '& a': {
        padding: '18px 20px',
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: theme.typography.$fzH4,
        color: theme.palette.$clearBlue,
        fontFamily: '"OpenSans", Helvetica, Arial, sans-serif',
        '@media (max-width: 768px)': {
          fontSize: theme.typography.$fzH5
        },
        '&:hover': {
          color: theme.palette.$white
        }
      }
    },
    disabled: {
      cursor: 'no-drop',
      opacity: 0.3
    },
    fullWidthMobile: {
      '@media (max-width: 768px)': {
        width: '100%',
        '& span': {
          display: 'block',
          width: '100%',
          textAlign: 'center'
        }
      }
    }
  };
});

var ButtonLinkTo = function ButtonLinkTo(_ref) {
  var children = _ref.children,
      backgroundClass = _ref.backgroundClass,
      href = _ref.href,
      outline = _ref.outline,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target,
      classNameCustom = _ref.classNameCustom,
      fullWidthMobile = _ref.fullWidthMobile,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React.createElement("a", {
      className: clsx(classNameCustom, classes.buttonComponent, classes[backgroundClass], outline && classes.outline, fullWidthMobile && classes.fullWidthMobile),
      href: href,
      target: target
    }, /*#__PURE__*/React.createElement("span", null, children))
  );
};

ButtonLinkTo.defaultProps = {
  href: '',
  backgroundClass: '',
  target: '_blank',
  outline: false
};
ButtonLinkTo.propTypes = {
  href: PropTypes.string,
  backgroundClass: PropTypes.string,
  target: PropTypes.string,
  outline: PropTypes.bool
};
export default ButtonLinkTo;