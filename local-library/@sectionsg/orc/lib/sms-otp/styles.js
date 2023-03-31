"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function (theme) {
  var _input;

  return {
    formLoginBySMS: {
      position: 'relative',
      paddingBottom: '20px'
    },
    codeInputComponent: {
      display: 'flex',
      justifyContent: 'center'
    },
    iconClose: {
      position: 'absolute',
      top: '28px',
      right: '28px',
      zIndex: '2',
      cursor: 'pointer',
      '@media (max-width: 414px)': {
        top: '20px',
        right: '20px'
      }
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '1.42',
      textAlign: 'center',
      color: theme.palette.$greyishBrown,
      position: 'relative',
      zIndex: '1',
      paddingTop: '40px',
      '@media (max-width: 414px)': {
        fontSize: theme.typography.$fzBody,
        paddingTop: '20px'
      }
    },
    iconScreen: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      '& img': {
        width: '131px',
        zIndex: '1'
      }
    },
    header: {
      position: 'relative',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    },
    content: {
      marginTop: '20px',
      '& p': {
        fontSize: theme.typography.$fzH5,
        fontWeight: 'normal',
        lineHeight: '1.75',
        textAlign: 'center',
        color: theme.palette.$greyishBrown,
        fontFamily: theme.typography.fontFamily,
        margin: 0,
        '@media (max-width: 414px)': {
          fontSize: theme.typography.$fzH6,
          lineHeight: '20px'
        },
        '& b': {
          fontWeight: 'bold',
          lineHeight: '20px'
        }
      },
      '& span': {
        '@media (max-width: 320px)': {
          display: 'block'
        }
      }
    },
    contentResend: {
      marginTop: '30px',
      '& p': {
        margin: 0
      }
    },
    resend: {
      display: 'flex',
      justifyContent: 'center',
      '& p': {
        fontSize: theme.typography.$fzH6,
        fontWeight: 'normal',
        lineHeight: '1.71',
        color: theme.palette.$greyishBrown,
        fontFamily: theme.typography.fontFamily,
        '@media (max-width: 414px)': {
          fontSize: theme.typography.$fzDes,
          lineHeight: '20px',
          '& span': {
            fontSize: theme.typography.$fzDes,
            lineHeight: '20px'
          }
        }
      },
      '& div': {
        borderBottom: '3px !important'
      },
      '& span': {
        fontFamily: theme.typography.fontFamily,
        '@media (max-width: 414px)': {
          fontSize: theme.typography.$fzDes,
          lineHeight: '20px'
        }
      }
    },
    notReceive: {
      '& div': {
        marginLeft: '10px'
      }
    },
    inputNumber: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      '& > div ': {
        '& div': {
          display: 'flex',
          justifyContent: 'center'
        }
      },
      '@media (max-width: 414px)': {
        paddingLeft: '20px',
        paddingRight: '20px'
      },
      '& input': (_input = {
        marginRight: '20px',
        width: '20px !important',
        border: 'none',
        fontSize: theme.typography.$fzBody,
        textAlign: 'left',
        paddingBottom: '15px',
        color: theme.palette.greyishBrown,
        backgroundColor: 'transparent',
        borderRadius: "0 !important"
      }, (0, _defineProperty2["default"])(_input, "border", "0 !important"), (0, _defineProperty2["default"])(_input, "height", 'auto !important'), (0, _defineProperty2["default"])(_input, "paddingLeft", 0), (0, _defineProperty2["default"])(_input, "borderBottom", "1px solid ".concat(theme.palette.$greyishBrown, " !important")), (0, _defineProperty2["default"])(_input, "fontFamily", theme.typography.fontFamily), (0, _defineProperty2["default"])(_input, '&::placeholder', {
        color: theme.palette.$lightGreyBlue
      }), (0, _defineProperty2["default"])(_input, '&:last-child', {
        marginRight: '0px'
      }), (0, _defineProperty2["default"])(_input, '&:focus', {
        outline: 'none',
        border: 0,
        borderRadius: 0,
        borderBottom: "1px solid ".concat(theme.palette.$clearBlue, " !important"),
        backgroundColor: 'transparent'
      }), _input),
      '@media (max-width: 768px)': {
        '& input': {
          borderRadius: '0px',
          paddingLeft: '.2em',
          paddingRight: '.2em',
          width: '18px'
        }
      },
      '@media (max-width: 360px)': {
        '& input': {
          width: '12px'
        }
      }
    },
    hiddenPlaceholder: {
      '& input': {
        '&::placeholder': {
          color: 'transparent'
        }
      }
    },
    inputNumberError: {
      '& input': {
        borderBottom: "1px solid ".concat(theme.palette.$orangeyRed, " !important"),
        fontFamily: theme.typography.fontFamily
      }
    },
    changeFzPassword: {
      '& input': {
        fontSize: '30px !important',
        paddingBottom: '5px',
        '&::placeholder': {
          color: 'transparent !important'
        }
      }
    },
    loading: {
      fontSize: theme.typography.$fzBody,
      fontWeight: 'normal',
      lineHeight: '1.67',
      textAlign: 'center',
      color: theme.palette.$greyishBrown,
      fontFamily: theme.typography.fontFamily,
      '@media (max-width: 414px)': {
        fontSize: theme.typography.$fzH5
      }
    },
    err: {
      fontSize: theme.typography.$fzH6,
      fontWeight: 'normal',
      lineHeight: '1.71',
      textAlign: 'center',
      color: theme.palette.$orangeyRed,
      marginTop: '5px',
      fontFamily: theme.typography.fontFamily,
      '@media (max-width: 414px)': {
        fontSize: theme.typography.$fzDes,
        lineHeight: '20px',
        paddingLeft: 20,
        paddingRight: 20
      }
    }
  };
}, 'sms-otp');
var _default = useStyles;
exports["default"] = _default;