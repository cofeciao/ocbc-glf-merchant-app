"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _InfoSharp = _interopRequireDefault(require("@material-ui/icons/InfoSharp"));

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["list", "label", "getValue", "error", "isFullWidth", "hasLine", "hasIcon", "handleDialog", "checkBoxClass", "marginLabel", "isReturn"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    checkboxComponent: {
      '& .MuiFormGroup-root': {
        marginTop: '10px',
        '& .MuiIconButton-colorSecondary': {
          '&:hover': {
            backgroundColor: 'rgba(238, 238, 238, 0.5)'
          }
        },
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
          color: theme.palette.$battleshipGrey
        },
        '& .MuiTypography-root': {
          color: theme.palette.$greyishBrown,
          fontSize: theme.typography.$fzBody,
          '@media (max-width: 768px)': {
            fontSize: theme.typography.$fzH5
          }
        },
        '& .MuiSvgIcon-root': {
          display: 'none'
        },
        '& .MuiFormControlLabel-label': {
          '& .MuiSvgIcon-root': {
            display: 'inline-block',
            maxWidth: '18px'
          }
        },
        '& .MuiFormControlLabel-root': {
          marginLeft: '0',
          marginBottom: '10px',
          alignItems: 'flex-start'
        },
        '& .MuiTouchRipple-root': {
          width: '20px',
          height: '20px',
          borderRadius: '5px',
          border: 'solid 1px #667c88'
        },
        '& .MuiButtonBase-root': {
          marginRight: '15px',
          marginTop: '4px'
        },
        '& .Mui-checked': {
          '& .MuiTouchRipple-root': {
            backgroundColor: '#667c88',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '4px',
              left: '46%',
              transform: 'rotate(45deg) translateX(-50%)',
              display: 'inline-block',
              height: '10px',
              width: '4px',
              borderBottom: '3px solid #ffffff',
              borderRight: '3px solid #ffffff'
            }
          }
        }
      }
    },
    arrow: {
      display: 'inline-flex',
      verticalAlign: 'sub'
    },
    labelCheckbox: {
      fontSize: '14px',
      color: theme.palette.$greyishBrown,
      display: 'inline-block'
    },
    errorMessage: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6
    },
    line: {
      width: 'calc(100% + 60px)',
      height: '1px',
      margin: '30px -30px',
      backgroundColor: theme.palette.$lightWhite,
      '@media (max-width: 1024px)': {
        width: '100%'
      }
    },
    margin: {
      '& .MuiFormGroup-root': {
        '& .MuiFormControlLabel-root': {
          margin: function margin(props) {
            return props.margin && props.margin;
          }
        }
      }
    }
  };
});

var CheckboxComponent = function CheckboxComponent(_ref) {
  var list = _ref.list,
      label = _ref.label,
      getValue = _ref.getValue,
      error = _ref.error,
      isFullWidth = _ref.isFullWidth,
      hasLine = _ref.hasLine,
      hasIcon = _ref.hasIcon,
      handleDialog = _ref.handleDialog,
      checkBoxClass = _ref.checkBoxClass,
      marginLabel = _ref.marginLabel,
      isReturn = _ref.isReturn,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var classes = useStyles(props);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      listCheckbox = _useState2[0],
      setListCheckbox = _useState2[1];

  (0, _react.useEffect)(function () {
    setListCheckbox(list);
  }, [list]);

  var handleChange = function handleChange(e) {
    var cloneList = (0, _toConsumableArray2["default"])(listCheckbox);
    var checkValue = [];
    cloneList.forEach(function (item) {
      if (item.text === e.target.name) {
        item.check = e.target.checked;
      }

      if (item.check) {
        checkValue.push({
          name: item.text
        });
      }

      if (isReturn) {
        checkValue.push({
          name: item.text
        });
      }
    });
    setListCheckbox(cloneList);
    getValue(checkValue);
  };

  var handleDialogPrevent = function handleDialogPrevent(e) {
    handleDialog();
    e.preventDefault();
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.checkboxComponent, checkBoxClass, classes.margin)
  }, label && /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    className: classes.labelCheckbox,
    component: "legend"
  }, label), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.errorMessage
  }, error), /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true
  }, listCheckbox && listCheckbox.length > 0 && listCheckbox.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      key: index,
      item: true,
      xs: 12,
      sm: isFullWidth ? 12 : index % 2 === 0 ? 7 : 5
    }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
      control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        checked: item.check,
        onChange: handleChange,
        name: item.text
      }),
      label: /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          margin: "".concat(marginLabel),
          display: 'inline-block'
        }
      }, item.text, ' ', hasIcon && index === 1 && /*#__PURE__*/_react["default"].createElement(_InfoSharp["default"], {
        className: classes.arrow,
        onClick: function onClick(e) {
          return handleDialogPrevent(e);
        }
      }))
    })), hasLine && index !== listCheckbox.length - 1 && /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.line
    }));
  }))));
};

{
  /* <Checkbox1 error={list.error} getValue={getValue} label={'Source of your wealth (Please select all that apply.)'} list={list.list}></Checkbox1> */
} // const list1 = {
//     error: 'sai roi', list: [
//       { text: 'Savings', check: true },
//       { text: 'Salary', check: false },
//       { text: 'Business', check: false },
//       { text: 'Inherited wealth', check: false },
//       { text: 'Rental income', check: false },
//       { text: 'Sale of property or investment', check: false },
//     ]
//   }

CheckboxComponent.defaultProps = {
  list: [],
  label: '',
  getValue: function getValue(_) {
    return _;
  },
  error: '',
  isFullWidth: false,
  hasLine: false,
  hasIcon: false,
  handleDialog: function handleDialog(_) {
    return _;
  },
  margin: '',
  marginLabel: '',
  isReturn: false
};
CheckboxComponent.propTypes = {
  list: _propTypes["default"].array,
  label: _propTypes["default"].string,
  margin: _propTypes["default"].string,
  marginLabel: _propTypes["default"].string,
  getValue: _propTypes["default"].func,
  error: _propTypes["default"].string,
  isFullWidth: _propTypes["default"].bool,
  hasLine: _propTypes["default"].bool,
  hasIcon: _propTypes["default"].bool,
  handleDialog: _propTypes["default"].func,
  isReturn: _propTypes["default"].bool
};
var _default = CheckboxComponent;
exports["default"] = _default;