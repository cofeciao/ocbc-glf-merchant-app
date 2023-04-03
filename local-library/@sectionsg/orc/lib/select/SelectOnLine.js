"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _lodash = _interopRequireDefault(require("lodash"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _KeyboardArrowDownOutlined = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDownOutlined"));

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _clsx = _interopRequireDefault(require("clsx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/prop-types */
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    selectComponent: {
      width: '100%',
      '& .MuiInputLabel-formControl': {
        color: '#2979ff',
        bottom: '0px',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: '30px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: 'calc(100% - 30px)',
        transform: 'translate(0, 7px) scale(1) !important',
        '@media screen and (max-width: 768px)': {
          fontSize: theme.typography.$fzH5
        }
      },
      '& .MuiSelect-select.MuiSelect-select': {
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        color: '#2979ff'
      },
      '& .Mui-focused': {
        color: theme.palette.$greyishBrown
      },
      '& .MuiInputBase-root': {
        marginTop: '4px',
        display: 'flex',
        height: '40px',
        width: function width(_width) {
          return _width > 0 ? _width : '100%';
        },
        '@media screen and (max-width: 768px)': {
          lineHeight: 'normal'
        },
        '&::before': {
          content: '""',
          fontSize: theme.typography.$fzBody,
          color: '#888888',
          borderWidth: '2px',
          borderColor: '#2979ff'
        },
        '& .MuiSelect-root': {
          fontSize: theme.typography.$fzH4,
          boxSizing: 'border-box',
          '@media screen and (max-width: 768px)': {
            fontSize: theme.typography.$fzH5,
            height: 'auto',
            overflow: 'hidden',
            minHeight: '1.1876em',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
          },
          '&:focus': {
            backgroundColor: 'transparent'
          }
        }
      },
      '& .MuiInput-underline': {
        color: theme.palette.$greyishBrown,
        '& .MuiSelect-icon': {
          color: '#2979ff',
          top: 'calc(50% - 15px)'
        },
        '&::after': {
          borderBottom: "1px solid ".concat(theme.palette.$clearBlue)
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '2px solid #2979ff'
        }
      },
      '& .MuiSelect-select': {
        '& div': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
          padding: '6px 0 7px'
        },
        '&:focus': {
          backgroundColor: 'white'
        }
      },
      '& .MuiInputLabel-shrink': {// transform: 'translate(0, 10px) scale(1) !important',
        // display: 'none'
      },
      '@media (max-width: 768px)': {
        width: '100%'
      }
    },
    placeHolderError: {
      top: '30px !important'
    },
    notFilled: {
      '& .MuiInput-underline': {
        color: '#888888',
        '&::after': {
          borderBottom: '2px solid #2979ff'
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '2px solid #2979ff'
        }
      },
      '& .Mui-focused': {
        color: '#888888'
      }
    },
    labelCheckbox: {
      fontSize: '14px',
      lineHeight: '24px',
      color: theme.palette.$greyishBrown
    },
    errorMessage: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6
    },
    dropdownStyle: {
      '& .MuiPaper-root': {
        height: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
        transform: 'none !important',
        transformOrigin: 'initial !important',
        borderRadius: '5px !important',
        boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02) !important',
        '-webkitOverflowScrolling': 'unset',
        '& .MuiList-root': {
          overflowY: 'scroll',
          height: ITEM_HEIGHT * 4.7,
          position: 'static',
          padding: '0 !important',
          '& .MuiFormControlLabel-root': {
            width: 'calc(100% - 40px)',
            display: 'block',
            padding: '10px 20px !important',
            '&:hover': {
              backgroundColor: theme.palette.$iceBlue
            },
            '& .MuiTypography-body1': {
              fontSize: theme.typography.$fzBody,
              verticalAlign: 'middle'
            }
          }
        }
      }
    },
    filled: {
      display: 'block',
      '& .MuiInputBase-root': {
        '&::before': {
          borderBottom: '2px solid #2979ff'
        }
      },
      '& .MuiInput-underline': {
        '&::after': {
          borderBottom: '2px solid #2979ff'
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '2px solid #2979ff'
        }
      }
    },
    dropdownStyleSingle: {
      '& .MuiPaper-root': {
        height: 'auto',
        maxHeight: '350px',
        marginTop: '15px',
        borderRadius: '5px !important',
        boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02) !important',
        '@media (min-width: 769px)': {
          maxWidth: '420px!important',
          minWidth: '420px!important'
        },
        '& .MuiList-root': {
          overflow: 'auto',
          padding: '0 !important',
          '& .MuiMenuItem-root': {
            whiteSpace: 'inherit !important',
            padding: '10px 20px !important',
            fontSize: theme.typography.$fzH4,
            fontWeight: 'bold',
            lineHeight: '1.67',
            color: theme.palette.$battleshipGrey,
            '&:hover': {
              backgroundColor: theme.palette.$iceBlue,
              color: theme.palette.$battleshipGrey
            }
          },
          '& .MuiFormControlLabel-root': {
            width: '100%',
            display: 'block',
            '& .MuiTypography-body1': {
              fontSize: theme.typography.$fzBody,
              verticalAlign: 'middle'
            }
          },
          '& .Mui-selected': {
            backgroundColor: 'transparent',
            color: theme.palette.$charcoalGrey
          }
        },
        '& .MuiListItem-button': {
          '&:hover': {
            backgroundColor: theme.palette.$iceBlue,
            color: theme.palette.$charcoalGrey
          }
        }
      }
    },
    placeHolder: {
      '& select': {
        color: '#888888',
        fontSize: theme.typography.$fzBody
      }
    },
    singleClass: {
      '& .MuiInputBase-root': {
        '&::before': {
          content: '"" !important'
        }
      }
    },
    optionSelect: {
      cursor: 'pointer'
    },
    errorType: {
      '& .MuiInput-underline': {
        fontSize: theme.typography.$fzBody,
        color: theme.palette.$greyishBrown,
        '&::after': {
          borderBottom: "1px solid ".concat(theme.palette.$lipstick),
          transform: 'scaleX(1)'
        }
      },
      '& .MuiFormHelperText-root': {
        color: theme.palette.$lipstick
      }
    },
    buttonConfirm: {
      position: 'absolute',
      bottom: '10px',
      left: '20px',
      padding: '13px 20px',
      zIndex: 100
    },
    hightLine: {
      width: '100%',
      height: '1px',
      backgroundColor: '#c9c9c9',
      margin: '10px 0'
    },
    positionRelative: {
      position: 'relative'
    },
    multiSelectComponent: {
      marginLeft: '0',
      marginBottom: '0px',
      '& .MuiSvgIcon-root': {
        display: 'none'
      },
      '& .MuiTouchRipple-root': {
        width: '20px',
        height: '20px',
        borderRadius: '5px',
        border: 'solid 1px #667c88'
      },
      '& .MuiButtonBase-root': {
        marginRight: '15px'
      },
      '& .Mui-checked': {
        '& .MuiTouchRipple-root': {
          backgroundColor: '#667c88',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '2px',
            left: '-6px',
            transform: 'rotate(45deg)',
            display: 'inline-block',
            height: '10px',
            width: '4px',
            marginLeft: '60%',
            borderBottom: '3px solid #ffffff',
            borderRight: '3px solid #ffffff'
          }
        }
      }
    },
    overflowLabel: {
      width: '90%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      minHeight: '1.1876em',
      textOverflow: 'ellipsis',
      fontSize: theme.typography.$fzH4,
      color: "".concat(theme.palette.$greyishBrown, "!important")
    },
    MultiFilled: {
      '& .MuiInputLabel-formControl': {
        color: '##2979ff',
        bottom: '0px',
        transform: 'translate(0, 5px) scale(1) !important'
      }
    },
    line: {
      width: '100%',
      display: 'block',
      height: '1px',
      backgroundColor: '#ebeff1',
      margin: '10px 0 -10px 0'
    },
    fullWidth: {
      width: '100%'
    }
  };
});

var SelectComponent = function SelectComponent(_ref) {
  var label = _ref.label,
      getValue = _ref.getValue,
      single = _ref.single,
      selectKey = _ref.selectKey,
      multi = _ref.multi,
      disabled = _ref.disabled,
      listValues = _ref.listValues,
      errorText = _ref.errorText,
      placeholder = _ref.placeholder,
      width = _ref.width,
      defaultValue = _ref.defaultValue,
      defaultValueMulti = _ref.defaultValueMulti,
      countrySingapore = _ref.countrySingapore,
      type = _ref.type,
      positionLine = _ref.positionLine;
  var classes = useStyles(width);

  var _useState = (0, _react.useState)({
    list: [],
    unAvailable: false
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      listValue = _useState2[0],
      setListValue = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      listChooseValue = _useState4[0],
      setListChooseValue = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      isOpen = _useState8[0],
      setIsOpen = _useState8[1];

  var _useState9 = (0, _react.useState)(defaultValue),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      valueSingle = _useState10[0],
      setValueSingle = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      listValueShow = _useState12[0],
      setListValueShow = _useState12[1];

  var matches = (0, _useMediaQuery["default"])('(max-width:768px)');
  (0, _react.useEffect)(function () {
    setListValue((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, listValue), {}, {
      list: listValues
    }));
  }, []);
  (0, _react.useEffect)(function () {
    if (defaultValueMulti) {
      setListValueShow(defaultValueMulti);
      var listChoose = [];
      setTimeout(function () {
        listValues.forEach(function (item) {
          if (item.check) {
            listChoose = [].concat((0, _toConsumableArray2["default"])(listChoose), [item]);
          }
        });

        if (listChoose.length < 5) {
          setListValue((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, listValue), {}, {
            list: listValues,
            unAvailable: false
          }));
        } else {
          setListValue((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, listValue), {}, {
            list: listValues,
            unAvailable: true
          }));
        }

        setListChooseValue(listChoose);
      });
    } else {
      setListValueShow([]);
    }
  }, [defaultValueMulti]);
  (0, _react.useEffect)(function () {
    if (defaultValue) {
      setValueSingle(defaultValue);
    } else {
      setValueSingle('');
    }
  }, [defaultValue]);

  var handleChangeCheck = function handleChangeCheck(e) {
    var cloneList = (0, _toConsumableArray2["default"])(listValue.list);
    var cloneListChoose = (0, _toConsumableArray2["default"])(listChooseValue);
    var index = cloneList.findIndex(function (item) {
      return item.key === e.target.name;
    });

    if (cloneList[index].check === false) {
      cloneList[index].check = true;
      cloneListChoose = [].concat((0, _toConsumableArray2["default"])(cloneListChoose), [cloneList[index]]);
    } else {
      cloneList[index].check = false;
      var index1 = cloneListChoose.findIndex(function (item) {
        return item.key === e.target.name;
      });
      cloneListChoose.splice(index1, 1);
    }

    if (cloneListChoose.length < 5) {
      setListChooseValue(cloneListChoose);
      setListValue((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, listValue), {}, {
        list: cloneList,
        unAvailable: false
      }));
    } else {
      setListChooseValue(cloneListChoose);
      setListValue((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, listValue), {}, {
        list: cloneList,
        unAvailable: true
      }));
    }
  };

  var confirmValue = function confirmValue(e) {
    e.preventDefault();

    if (listChooseValue.length > 0) {
      var value = listChooseValue.map(function (item) {
        return item.value;
      });
      setListValueShow(value);
      getValue(listChooseValue);
      setError(null);
    } else {
      setError('');
      getValue('');
      getValue(listChooseValue);
      setListValueShow([]);
    }

    setIsOpen(false);
  };

  var handleChangeSingle = function handleChangeSingle(event) {
    if (event.target.value) {
      setError(null);
      setValueSingle(event.target.value);
      var index = listValue.list.findIndex(function (item) {
        return item.value === event.target.value;
      });
      getValue((0, _objectSpread2["default"])({}, listValue.list[index]));
    }
  };

  var handleValidate = function handleValidate() {
    if (valueSingle.length === 0) {
      setError(errorText);
    } else {
      setError(null);
    }
  };

  (0, _react.useEffect)(function () {
    if (selectKey) {
      handleValidate();
    }

    if (valueSingle.length > 0) {
      if (!countrySingapore) {
        setError(errorText);
      } else {
        setError(null);
      }
    }
  }, [selectKey, countrySingapore]);
  return listValue.list.length > 0 && /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    className: (0, _clsx["default"])(classes.selectComponent, error ? classes.errorType : '', single ? classes.singleClass : '', listValueShow.length > 0 || single && valueSingle.length ? classes.filled : classes.notFilled, listValueShow.length > 0 && multi ? classes.MultiFilled : ''),
    id: "".concat(error ? 'errorType-label' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.positionRelative
  }, single && !valueSingle && !matches && /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    htmlFor: "name-multiple"
  }, placeholder), multi && listValueShow.length < 1 && /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    htmlFor: "name-multiple"
  }, placeholder), multi && listValueShow.length > 0 && /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    htmlFor: "name-multiple",
    className: classes.overflowLabel
  }, _lodash["default"].join(listValueShow, ', ')), single && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, matches ? /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: valueSingle,
    onChange: handleChangeSingle,
    MenuProps: {
      className: classes.dropdownStyleSingle
    },
    input: /*#__PURE__*/_react["default"].createElement(_Input["default"], {
      type: "text",
      id: "name-multiple"
    }),
    labelId: "demo-multiple-name-label-single",
    IconComponent: _KeyboardArrowDownOutlined["default"],
    className: single && valueSingle.length === 0 ? classes.placeHolder : '',
    disabled: disabled,
    "native": true
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, placeholder), listValue.list.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      className: classes.optionSelect,
      key: index,
      value: item.value
    }, item.value);
  }))) : /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: valueSingle,
    onChange: handleChangeSingle,
    MenuProps: {
      className: classes.dropdownStyleSingle
    },
    input: /*#__PURE__*/_react["default"].createElement(_Input["default"], {
      type: "text",
      id: "name-multiple"
    }),
    labelId: "demo-multiple-name-label-single",
    IconComponent: _KeyboardArrowDownOutlined["default"],
    disabled: disabled
  }, listValue.list.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      className: classes.optionSelect,
      key: index,
      value: item.value
    }, index === positionLine && type === 'country' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.fullWidth
    }, /*#__PURE__*/_react["default"].createElement("div", null, item.value), /*#__PURE__*/_react["default"].createElement("span", {
      className: classes.line
    })) : /*#__PURE__*/_react["default"].createElement("div", null, item.value));
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.errorMessage
  }, error))));
};

SelectComponent.defaultProps = {
  label: '',
  getValue: function getValue(_) {
    return _;
  },
  single: false,
  multi: false,
  listValues: [],
  placeholder: '',
  type: '',
  countrySingapore: true,
  errorText: 'This field is required',
  width: 0,
  disabled: false,
  positionLine: 1
};
SelectComponent.propTypes = {
  label: _propTypes["default"].any,
  getValue: _propTypes["default"].func,
  single: _propTypes["default"].bool,
  multi: _propTypes["default"].bool,
  listValues: _propTypes["default"].array,
  // map value => [{key, value, check: false}, ...]
  placeholder: _propTypes["default"].string,
  errorText: _propTypes["default"].string,
  type: _propTypes["default"].string,
  countrySingapore: _propTypes["default"].bool,
  width: _propTypes["default"].number,
  disabled: _propTypes["default"].bool,
  positionLine: _propTypes["default"].number
};
{
  /* <Select errorText='errorTexterrorText' placeholder='placeHolder' getValue={(value) => console.log(value,"value")} label='xin chao cac ban' multi listValues={list} ></Select> */
}
var _default = SelectComponent;
exports["default"] = _default;