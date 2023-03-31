import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["onClick", "children", "buttonType", "backgroundClass", "classNameCustom", "disabled", "outline", "fullWidthMobile"];

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx'; // import './Button.scss';
// backgroundClass: bgLipstickOrangey || bgClearblue || square || bgGunmetalBluegrey
// href='https://www.facebook.com/'
// hasHref: if button is <a></a> href just only use background: 'bg-clearblue'

var useStyles = makeStyles(function (theme) {
  return {
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
      transition: 'background-color 0.5s ease',
      padding: '18px 30px',
      cursor: 'pointer',
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
        opacity: 1,
        borderRadius: '6px',
        visibility: 'visible',
        transition: '0.5s all',
        zIndex: 1
      },
      '& span': {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'OpenSans'
      }
    },
    square: {
      width: '60px',
      height: '60px',
      padding: 0,
      backgroundColor: 'transparent',
      border: "2px solid ".concat(theme.palette.$greyishBrown),
      color: theme.palette.$greyishBrown,
      fontSize: theme.typography.$fzH4,
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5
      },
      '&:hover': {
        background: theme.palette.$greyishBrown,
        color: theme.palette.$lightWhite
      }
    },
    bgGunmetalBluegrey: {
      backgroundColor: ' #4b5c65',
      fontWeight: 'bold',
      color: theme.palette.$lightWhite,
      padding: '18px 21px',
      '& span': {
        width: '100%',
        fontWeight: 'bold'
      },
      '& i': {
        fontSize: theme.typography.$fzH5,
        marginLeft: '7px'
      },
      '&::before': {
        backgroundImage: 'linear-gradient(to left, #4b5c65, #798d98)'
      },
      '&:hover': {
        backgroundColor: theme.palette.$gunmetal,
        '&::before': {
          opacity: 0,
          visibility: 'hidden'
        }
      }
    },
    bgGreyThickToLight: {
      backgroundColor: ' #4b5c65',
      fontWeight: 'bold',
      color: theme.palette.$lightWhite,
      padding: '18px 21px',
      '& span': {
        width: '100%',
        fontWeight: 'bold'
      },
      '& i': {
        fontSize: theme.typography.$fzH5,
        marginLeft: '7px'
      },
      '&::before': {
        backgroundImage: 'linear-gradient(to left, #667c88, #495a63)'
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
        fontWeight: 'bold'
      },
      '&::before': {
        background: "linear-gradient(to left, ".concat(theme.palette.$orangeyRed, ", ").concat(theme.palette.$lipstick, ")")
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
      background: 'transparent',
      fontWeight: 600,
      color: theme.palette.$clearBlue,
      border: "2px solid ".concat(theme.palette.$clearBlue),
      padding: '18px 20px',
      lineHeight: '20px',
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
      opacity: 0.3,
      pointerEvents: 'none'
    },
    outline: {
      backgroundColor: 'transparent',
      border: "2px solid ".concat(theme.palette.$greyishBrown),
      color: theme.palette.$greyishBrown,
      fontSize: theme.typography.$fzH5,
      lineHeight: theme.typography.$fzH3,
      padding: '13px 20px',
      '& span': {
        fontWeight: '600'
      },
      '&:before': {
        content: 'none'
      },
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5
      },
      '&:hover': {
        background: theme.palette.$greyishBrown,
        color: theme.palette.$white
      }
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

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      buttonType = _ref.buttonType,
      backgroundClass = _ref.backgroundClass,
      classNameCustom = _ref.classNameCustom,
      disabled = _ref.disabled,
      outline = _ref.outline,
      fullWidthMobile = _ref.fullWidthMobile,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      timeClick = _useState2[0],
      setTimeClick = _useState2[1];

  var handleClick = function handleClick() {
    if (buttonType === 'trigger') {
      setTimeClick(timeClick + 1);
      onClick();
      setTimeout(function () {
        setTimeClick(0);
      }, 2000);
    } else {
      onClick();
      setTimeClick(0);
    }
  };

  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React.createElement("button", _extends({
      className: clsx(classNameCustom, classes.buttonComponent, classes[backgroundClass], outline && classes.outline, (disabled || timeClick > 0) && classes.disabled, fullWidthMobile && classes.fullWidthMobile),
      onClick: handleClick,
      "aria-hidden": "true",
      disabled: disabled
    }, props), /*#__PURE__*/React.createElement("span", null, children))
  );
};

Button.defaultProps = {
  onClick: function onClick() {
    return null;
  },
  backgroundClass: '',
  outline: false,
  buttonType: 'trigger'
};
Button.propTypes = {
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  buttonType: PropTypes.string,
  backgroundClass: PropTypes.string
};
export default Button;