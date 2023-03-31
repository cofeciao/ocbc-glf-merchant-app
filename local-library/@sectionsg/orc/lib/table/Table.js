"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _icons = require("@material-ui/icons");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _clsx = _interopRequireDefault(require("clsx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledTableCell = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      color: theme.palette.$greyishBrown,
      fontSize: theme.typography.$fzH5,
      lineHeight: '24px',
      '@media screen and (max-width: 676px)': {
        fontSize: theme.typography.$fzH6,
        lineHeight: '20px'
      },
      border: 0,
      '&:first-child': {
        fontWeight: 'bold',
        textAlign: 'left'
      },
      '&:last-child': {
        textAlign: 'right',
        '& > span': {
          '&:last-child': {
            display: 'block'
          }
        },
        '& span': {
          '&:last-child': {
            paddingRight: 0
          }
        }
      }
    },
    head: {
      backgroundColor: theme.palette.$battleshipGrey,
      color: theme.palette.$lightWhite,
      fontWeight: 'normal',
      '&:first-child': {
        fontWeight: 'normal'
      }
    }
  };
})(_TableCell["default"]);
var StyledTableRow = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.$iceBlue
      },
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.$lightWhite
      }
    }
  };
})(_TableRow["default"]);
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    table: {
      minWidth: 650,
      border: 0,
      '@media (max-width: 768px)': {
        minWidth: 'unset'
      }
    },
    headerText: {
      fontWeight: 'bold',
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: '/',
        left: '0',
        width: '20px',
        height: '20px',
        backgroundColor: 'red'
      }
    },
    bodyText: {
      '&:last-child': {
        fontWeight: 'normal'
      }
    },
    tableWrapper: {
      height: 'auto',
      maxHeight: '336px',
      overflow: 'hidden',
      transition: 'max-height 0.5s ease',
      '@media (max-width: 768px)': {
        maxHeight: '432px'
      },
      '&.expand': {
        maxHeight: '1300px'
      }
    },
    expandButtonWrapper: {
      backgroundColor: theme.palette.$lightWhite,
      width: '100%',
      padding: '15px 0',
      textAlign: 'center'
    },
    expandButton: {
      position: 'relative',
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.$lightWhite,
      border: 0,
      color: '#2979ff',
      fontSize: '18px',
      lineHeight: '26px',
      padding: 0,
      fontFamily: 'OpenSans',
      '@media (max-width: 768px)': {
        fontSize: '16px',
        lineHeight: '24px'
      },
      '&:focus, &:hover': {
        outline: 'none',
        border: 'none'
      },
      '&:hover': {
        color: '#4e78c0'
      },
      // '&:hover:after': {
      //   width: '100%',
      //   backgroundColor: '#4e78c0',
      // },
      '&:after': {
        position: 'absolute',
        left: '0',
        bottom: '0',
        content: '""',
        display: 'block',
        width: 0,
        height: '1px',
        backgroundColor: '#2979ff',
        transition: 'width 0.3s ease-in-out 0s'
      }
    },
    line: {
      padding: '0 5px'
    },
    notData: {
      textAlign: 'center !important',
      fontWeight: 'normal !important'
    }
  };
});

var handleContentTable = function handleContentTable(data, size) {
  var result = [];
  var arrayCopy = (0, _toConsumableArray2["default"])(data);

  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size));
  }

  return result;
};

var CustomizedTables = function CustomizedTables(_ref) {
  var thead = _ref.thead,
      tbody = _ref.tbody,
      textButton = _ref.textButton;
  var classes = useStyles();
  var formatHeadTable = handleContentTable(thead, 2);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      expand = _useState2[0],
      setExpand = _useState2[1];

  var _useState3 = (0, _react.useState)(5),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      numberShow = _useState4[0],
      setNumberShow = _useState4[1];

  var _useState5 = (0, _react.useState)(textButton),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      title = _useState6[0],
      setTitle = _useState6[1];

  var expandTable = function expandTable(isExpand, length) {
    setExpand(!expand);
    setTitle(function (state) {
      return state === "See all ".concat(tbody.length, " months") ? 'See less' : "See all ".concat(tbody.length, " months");
    });
    setNumberShow(function () {
      return isExpand ? length : 5;
    });
  };

  var matches = (0, _useMediaQuery["default"])('(min-width:768px)');
  (0, _react.useEffect)(function () {});
  return matches ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    className: (0, _clsx["default"])(classes.tableWrapper, expand ? '' : 'expand')
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: classes.table,
    "aria-label": "caption table"
  }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, thead.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
      key: item
    }, item);
  }))), tbody.length ? /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, tbody.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(StyledTableRow, {
      key: index
    }, Object.keys(row).map(function (key) {
      return /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
        scope: "row",
        key: row[key] + index
      }, row[key]);
    }));
  })) : /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, /*#__PURE__*/_react["default"].createElement(StyledTableRow, null, /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
    colSpan: 4,
    className: classes.notData
  }, "Not available"))))), tbody.length ? /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.expandButtonWrapper
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: classes.expandButton,
    onClick: function onClick() {
      return expandTable(expand, tbody.length);
    }
  }, title, expand ? /*#__PURE__*/_react["default"].createElement(_icons.ExpandMore, null) : /*#__PURE__*/_react["default"].createElement(_icons.ExpandLess, null))) : '') : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    className: (0, _clsx["default"])(classes.tableWrapper, expand ? '' : 'expand')
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: classes.table,
    "aria-label": "caption table"
  }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, formatHeadTable.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
      key: item
    }, item.map(function (itemChild, keyItemChild) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.headerText,
        key: itemChild
      }, itemChild, keyItemChild === 0 && /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.line
      }, "/"));
    }));
  }))), tbody.length ? /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, tbody.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(StyledTableRow, {
      key: index
    }, handleContentTable(Object.values(row), 2).map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
        scope: "row",
        key: item + index
      }, item.map(function (itemChild) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.bodyText,
          key: itemChild
        }, itemChild);
      }));
    }));
  })) : /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, /*#__PURE__*/_react["default"].createElement(StyledTableRow, null, /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
    colSpan: 4,
    className: classes.notData
  }, "Not available"))))), tbody.length ? /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.expandButtonWrapper
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: classes.expandButton,
    onClick: function onClick() {
      return expandTable(expand, tbody.length);
    }
  }, title, expand ? /*#__PURE__*/_react["default"].createElement(_icons.ExpandMore, null) : /*#__PURE__*/_react["default"].createElement(_icons.ExpandLess, null))) : '');
};

CustomizedTables.propTypes = {
  thead: _propTypes["default"].array.isRequired,
  tbody: _propTypes["default"].array.isRequired,
  textButton: _propTypes["default"].any.isRequired
};
var _default = CustomizedTables;
exports["default"] = _default;