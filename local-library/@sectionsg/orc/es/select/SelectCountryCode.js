import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import _ from 'lodash';
import InputLabel from '@material-ui/core/InputLabel';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx'; // import Button from '../button/index';

var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var useStyles = makeStyles(function (theme) {
  return {
    selectComponent: {
      width: '100%',
      '& .MuiInputLabel-formControl': {
        color: '#888888',
        bottom: '0px',
        fontSize: 18,
        lineHeight: '30px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: 'calc(100% - 30px)',
        transform: 'translate(0, 7px) scale(1) !important',
        '@media screen and (max-width: 768px)': {
          fontSize: theme.typography.$fzH5
        }
      },
      '& .Mui-focused': {
        color: theme.palette.$greyishBrown
      },
      '& .MuiInputBase-root': {
        marginTop: '4px',
        display: 'flex',
        height: '40px',
        width: '100%',
        '@media screen and (max-width: 768px)': {
          lineHeight: 'normal'
        },
        '&::before': {
          content: '""',
          fontSize: theme.typography.$fzBody,
          color: '#888888',
          borderColor: '#484848'
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
        '&::after': {
          borderBottom: "1px solid ".concat(theme.palette.$clearBlue)
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #484848'
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
      '& .MuiInputLabel-shrink': {
        transform: 'translate(0, 10px) scale(1) !important' // display: 'none'

      },
      '@media (max-width: 768px)': {
        width: '100% !important'
      }
    },
    placeHolderError: {
      top: '30px !important'
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
    notFilled: {
      '& .MuiInput-underline': {
        color: '#888888',
        '&::after': {
          borderBottom: '1px solid #484848'
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #484848'
        }
      },
      '& .Mui-focused': {
        color: '#888888'
      }
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
          borderColor: '#cfcfcf'
        }
      },
      '& .MuiInput-underline': {
        '&::after': {
          borderBottom: '1px solid #cfcfcf'
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #cfcfcf'
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
      color: '#888888',
      fontSize: theme.typography.$fzBody
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
        color: '#888888',
        bottom: '0px',
        transform: 'translate(0, 5px) scale(1) !important'
      }
    },
    line: {
      width: '100%',
      height: '1px',
      display: 'block',
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
      listValues = _ref.listValues,
      errorText = _ref.errorText,
      placeholder = _ref.placeholder,
      width = _ref.width,
      defaultValue = _ref.defaultValue,
      defaultValueMulti = _ref.defaultValueMulti,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      positionLine = _ref.positionLine;
  var classes = useStyles();

  var _useState = useState({
    list: [],
    unAvailable: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      listValue = _useState2[0],
      setListValue = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      listChooseValue = _useState4[0],
      setListChooseValue = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isOpen = _useState8[0],
      setIsOpen = _useState8[1];

  var _useState9 = useState(defaultValue),
      _useState10 = _slicedToArray(_useState9, 2),
      valueSingle = _useState10[0],
      setValueSingle = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      listValueShow = _useState12[0],
      setListValueShow = _useState12[1];

  var matches = useMediaQuery('(max-width:768px)');
  useEffect(function () {
    setListValue(_objectSpread(_objectSpread({}, listValue), {}, {
      list: listValues
    }));
  }, []);
  useEffect(function () {
    if (defaultValueMulti) {
      setListValueShow(defaultValueMulti);
      var listChoose = [];
      setTimeout(function () {
        listValues.forEach(function (item) {
          if (item.check) {
            listChoose = [].concat(_toConsumableArray(listChoose), [item]);
          }
        });

        if (listChoose.length < 5) {
          setListValue(_objectSpread(_objectSpread({}, listValue), {}, {
            list: listValues,
            unAvailable: false
          }));
        } else {
          setListValue(_objectSpread(_objectSpread({}, listValue), {}, {
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
  useEffect(function () {
    if (defaultValue) {
      setValueSingle(defaultValue);
    } else {
      setValueSingle('');
    }
  }, [defaultValue]);

  var handleChangeCheck = function handleChangeCheck(e) {
    var cloneList = _toConsumableArray(listValue.list);

    var cloneListChoose = _toConsumableArray(listChooseValue);

    var index = cloneList.findIndex(function (item) {
      return item.key === e.target.name;
    });

    if (cloneList[index].check === false) {
      cloneList[index].check = true;
      cloneListChoose = [].concat(_toConsumableArray(cloneListChoose), [cloneList[index]]);
    } else {
      cloneList[index].check = false;
      var index1 = cloneListChoose.findIndex(function (item) {
        return item.key === e.target.name;
      });
      cloneListChoose.splice(index1, 1);
    }

    if (cloneListChoose.length < 5) {
      setListChooseValue(cloneListChoose);
      setListValue(_objectSpread(_objectSpread({}, listValue), {}, {
        list: cloneList,
        unAvailable: false
      }));
    } else {
      setListChooseValue(cloneListChoose);
      setListValue(_objectSpread(_objectSpread({}, listValue), {}, {
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

      var _listValue$list$find = listValue.list.find(function (c) {
        return c.name === event.target.value;
      }),
          value = _listValue$list$find.value;

      setValueSingle(value);
      var index = listValue.list.findIndex(function (item) {
        return item.name === event.target.value;
      });
      getValue({
        key: listValue.list[index].key,
        value: listValue.list[index].name,
        desc: listValue.list[index].desc
      });
    }
  };

  var handleValidate = function handleValidate() {
    if (!valueSingle) {
      setError(errorText);
    } else {
      setError(null);
    }
  };

  useEffect(function () {
    if (selectKey) {
      handleValidate();
    }
  }, [selectKey]);
  return listValue.list.length > 0 && /*#__PURE__*/React.createElement(FormControl, {
    style: {
      width: width
    },
    className: clsx(classes.selectComponent, error ? classes.errorType : '', single ? classes.singleClass : '', listValueShow.length > 0 || single && valueSingle.length ? classes.filled : classes.notFilled, listValueShow.length > 0 && multi ? classes.MultiFilled : ''),
    id: "".concat(error ? 'errorType-label' : '')
  }, /*#__PURE__*/React.createElement(FormLabel, {
    className: classes.labelCheckbox,
    component: "legend"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: classes.positionRelative
  }, single && !valueSingle && /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: "name-multiple"
  }, placeholder), multi && listValueShow.length < 1 && /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: "name-multiple"
  }, placeholder), multi && listValueShow.length > 0 && /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: "name-multiple",
    className: classes.overflowLabel
  }, _.join(listValueShow, ', ')), single && /*#__PURE__*/React.createElement(React.Fragment, null, matches ? /*#__PURE__*/React.createElement(Select, {
    value: valueSingle,
    onChange: handleChangeSingle,
    MenuProps: {
      className: classes.dropdownStyleSingle
    },
    inputProps: {
      name: 'age'
    },
    input: /*#__PURE__*/React.createElement(Input, {
      type: "text",
      id: "name-multiple"
    }),
    labelId: "demo-multiple-name-label-single",
    IconComponent: KeyboardArrowDownOutlinedIcon,
    "native": true
  }, /*#__PURE__*/React.createElement(React.Fragment, null, listValue.list.map(function (item, index) {
    return /*#__PURE__*/React.createElement("option", {
      className: classes.optionSelect,
      key: index,
      value: item.name
    }, item.name, ' ', "(", item.value, ")");
  }))) : /*#__PURE__*/React.createElement(Select, {
    value: valueSingle,
    onChange: handleChangeSingle,
    MenuProps: {
      className: classes.dropdownStyleSingle
    } // inputProps={{
    //   name: 'age',
    // }}
    ,
    input: /*#__PURE__*/React.createElement(Input, {
      type: "text",
      id: "name-multiple",
      name: name,
      onBlur: function onBlur(e) {
        return autoFocus(e.target, 3);
      }
    }),
    labelId: "demo-multiple-name-label-single" // onClose={handleCloseSingle}
    ,
    IconComponent: KeyboardArrowDownOutlinedIcon,
    "native": !!matches
  }, listValue.list.map(function (item, index) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      className: classes.optionSelect,
      key: index,
      value: item.name
    }, index === positionLine ? /*#__PURE__*/React.createElement("div", {
      className: classes.fullWidth
    }, /*#__PURE__*/React.createElement("div", null, item.name, ' ', "(", item.value, ")"), /*#__PURE__*/React.createElement("span", {
      className: classes.line
    })) : /*#__PURE__*/React.createElement("div", null, item.name, ' ', "(", item.value, ")"));
  })), /*#__PURE__*/React.createElement("span", {
    className: classes.errorMessage
  }, error)), multi && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
    labelId: "demo-multiple-name-label",
    id: "demo-multiple-name",
    multiple: true,
    value: [],
    MenuProps: {
      className: classes.dropdownStyle
    },
    input: /*#__PURE__*/React.createElement(Input, {
      type: "text"
    }),
    open: isOpen,
    onClose: function onClose(e) {
      confirmValue(e);
      setIsOpen(false);
    },
    onOpen: function onOpen() {
      return setIsOpen(true);
    },
    IconComponent: KeyboardArrowDownOutlinedIcon
  }, "[", listValue.list.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, index === 3 && /*#__PURE__*/React.createElement("div", {
      className: classes.hightLine
    }), /*#__PURE__*/React.createElement(FormControlLabel, {
      tabIndex: "false",
      value: item.value,
      onChange: handleChangeCheck,
      className: classes.multiSelectComponent,
      control: /*#__PURE__*/React.createElement(Checkbox, {
        color: "default",
        checked: item.check,
        name: item.key,
        disabled: !item.check && listValue.unAvailable
      }),
      label: "".concat(item.name, "\n                      {' '}\n                      (\n                      ").concat(item.value, "\n                      )")
    }));
  }), "]"), /*#__PURE__*/React.createElement("span", {
    className: classes.errorMessage
  }, error))));
};

SelectComponent.defaultProps = {
  label: '',
  getValue: function getValue(_) {
    return _;
  },
  autoFocus: function autoFocus(_) {
    return _;
  },
  single: false,
  multi: false,
  listValues: [],
  placeholder: '',
  errorText: 'This field is required',
  positionLine: 1
};
SelectComponent.propTypes = {
  label: PropTypes.string,
  getValue: PropTypes.func,
  single: PropTypes.bool,
  multi: PropTypes.bool,
  listValues: PropTypes.array,
  // map value => [{key, value, check: false}, ...]
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  autoFocus: PropTypes.func,
  positionLine: PropTypes.number
};
{
  /* <Select errorText='errorTexterrorText' placeholder='placeHolder' getValue={(value) => console.log(value,"value")} label='xin chao cac ban' multi listValues={list} ></Select> */
}
export default SelectComponent;