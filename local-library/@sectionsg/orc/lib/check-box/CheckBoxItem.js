"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CheckBoxItem;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _InfoSharp = _interopRequireDefault(require("@material-ui/icons/InfoSharp"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    pl34: {
      paddingLeft: '34px'
    },
    arrow: {
      display: 'inline-flex',
      verticalAlign: 'middle',
      fontSize: theme.typography.$fzH4
    },
    fullWidth: {
      position: 'relative',
      '@media (max-width: 1024px)': {
        maxWidth: '100%',
        flexBasis: '100%'
      }
    },
    container: {
      padding: '0 10px',
      paddingTop: '60px',
      minHeight: 'calc(100vh - 490px)',
      '@media (min-width: 1600px)': {
        maxWidth: '1440px'
      },
      '@media (max-width: 768px)': {
        padding: '0'
      }
    }
  };
});

function CheckBoxItem(_ref) {
  var item = _ref.item,
      handleChange = _ref.handleChange,
      hasIcon = _ref.hasIcon,
      handleDialogPrevent = _ref.handleDialogPrevent;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      handleCheckBox = _useState2[0],
      setCheckBox = _useState2[1];

  var classes = useStyles();
  (0, _react.useEffect)(function () {
    setCheckBox(item.check);
  }, [item.check]);

  var onChange = function onChange(e) {
    handleChange(e);
    setCheckBox(e.target.checked);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: handleCheckBox,
      onChange: onChange,
      name: item.text
    }),
    label: /*#__PURE__*/_react["default"].createElement("span", null, item.text, ' ', hasIcon && index === 1 && /*#__PURE__*/_react["default"].createElement(_InfoSharp["default"], {
      className: classes.arrow,
      onClick: function onClick(e) {
        return handleDialogPrevent(e);
      }
    }))
  }));
}