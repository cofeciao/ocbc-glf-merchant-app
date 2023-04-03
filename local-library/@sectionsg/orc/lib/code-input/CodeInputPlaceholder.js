"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _reactVerificationCodeInput = _interopRequireDefault(require("react-verification-code-input"));

var _clsx = _interopRequireDefault(require("clsx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  var _input;

  return {
    codeInputComponent: {
      marginTop: '30px',
      position: 'relative',
      '& input[type=number]::-webkit-inner-spin-button': {
        appearance: 'none'
      },
      '& input': (_input = {
        marginRight: '20px',
        width: '20px !important',
        border: 'none',
        fontFamily: 'OpenSans',
        fontSize: '19px',
        textAlign: 'left',
        paddingBottom: '10px',
        color: '#484848',
        backgroundColor: 'transparent',
        borderRadius: "0 !important"
      }, (0, _defineProperty2["default"])(_input, "border", "0 !important"), (0, _defineProperty2["default"])(_input, "height", 'auto !important'), (0, _defineProperty2["default"])(_input, "borderBottom", '1px solid #484848 !important'), (0, _defineProperty2["default"])(_input, '&::placeholder', {
        color: '#b2bec4'
      }), (0, _defineProperty2["default"])(_input, '&:last-child', {
        marginRight: '0px'
      }), (0, _defineProperty2["default"])(_input, '&:focus', {
        outline: 'none',
        border: 0,
        borderRadius: 0,
        borderBottom: '1px solid #2979ff !important',
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
    prefix: {
      marginRight: '30px',
      fontSize: '18px'
    },
    errorMessage: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6
    },
    placeholder: {
      color: '#b2bec4',
      fontSize: '14px',
      margin: 20
    },
    label: (0, _defineProperty2["default"])({
      fontSize: '14px',
      color: theme.palette.$greyishBrown,
      marginBottom: '12px',
      lineHeight: '1.75'
    }, "marginBottom", '30px'),
    errorInput: {
      display: 'block'
    }
  };
});

var CodeInputCustom = function CodeInputCustom(_ref) {
  var getValue = _ref.getValue,
      placeholder = _ref.placeholder,
      label = _ref.label,
      max = _ref.max,
      handleError = _ref.handleError,
      type = _ref.type,
      className = _ref.className,
      isPassword = _ref.isPassword;
  var classes = useStyles();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0, _react.useState)(type),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      types = _useState4[0],
      setTypes = _useState4[1];

  var setValue = function setValue(value) {
    getValue(value);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    className: classes.label,
    component: "legend"
  }, label), /*#__PURE__*/_react["default"].createElement(_reactVerificationCodeInput["default"], {
    onChange: setValue,
    className: (0, _clsx["default"])(classes.codeInputComponent, className),
    type: isPassword ? types : type,
    value: "",
    fields: max,
    autoFocus: false,
    placeholder: placeholder
  }));
};

{
  /* <CodeInputCustom label="CDP Securities Account number" placeholder={'To find out your number, you may call CDP at +65 6535 7511'} getValue={(e) => console.log(e,"eee")}></CodeInputCustom> */
}
CodeInputCustom.defaultProps = {
  placeholder: [],
  getValue: function getValue(_) {
    return _;
  },
  handleError: function handleError(_) {
    return _;
  },
  label: '',
  type: 'number',
  className: '',
  isPassword: false
};
CodeInputCustom.propTypes = {
  placeholder: _propTypes["default"].array,
  getValue: _propTypes["default"].func,
  handleError: _propTypes["default"].func,
  label: _propTypes["default"].string,
  type: _propTypes["default"].string,
  className: _propTypes["default"].string,
  max: _propTypes["default"].number.isRequired,
  isPassword: _propTypes["default"].bool
};
var _default = CodeInputCustom;
exports["default"] = _default;