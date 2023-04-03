import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
var StyledTableCell = withStyles(function (theme) {
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
})(TableCell);
var StyledTableRow = withStyles(function (theme) {
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
})(TableRow);
var useStyles = makeStyles(function (theme) {
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

  var arrayCopy = _toConsumableArray(data);

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

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      expand = _useState2[0],
      setExpand = _useState2[1];

  var _useState3 = useState(5),
      _useState4 = _slicedToArray(_useState3, 2),
      numberShow = _useState4[0],
      setNumberShow = _useState4[1];

  var _useState5 = useState(textButton),
      _useState6 = _slicedToArray(_useState5, 2),
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

  var matches = useMediaQuery('(min-width:768px)');
  useEffect(function () {});
  return matches ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableContainer, {
    className: clsx(classes.tableWrapper, expand ? '' : 'expand')
  }, /*#__PURE__*/React.createElement(Table, {
    className: classes.table,
    "aria-label": "caption table"
  }, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, thead.map(function (item) {
    return /*#__PURE__*/React.createElement(StyledTableCell, {
      key: item
    }, item);
  }))), tbody.length ? /*#__PURE__*/React.createElement(TableBody, null, tbody.map(function (row, index) {
    return /*#__PURE__*/React.createElement(StyledTableRow, {
      key: index
    }, Object.keys(row).map(function (key) {
      return /*#__PURE__*/React.createElement(StyledTableCell, {
        scope: "row",
        key: row[key] + index
      }, row[key]);
    }));
  })) : /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(StyledTableRow, null, /*#__PURE__*/React.createElement(StyledTableCell, {
    colSpan: 4,
    className: classes.notData
  }, "Not available"))))), tbody.length ? /*#__PURE__*/React.createElement("div", {
    className: classes.expandButtonWrapper
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: classes.expandButton,
    onClick: function onClick() {
      return expandTable(expand, tbody.length);
    }
  }, title, expand ? /*#__PURE__*/React.createElement(ExpandMore, null) : /*#__PURE__*/React.createElement(ExpandLess, null))) : '') : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableContainer, {
    className: clsx(classes.tableWrapper, expand ? '' : 'expand')
  }, /*#__PURE__*/React.createElement(Table, {
    className: classes.table,
    "aria-label": "caption table"
  }, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, formatHeadTable.map(function (item) {
    return /*#__PURE__*/React.createElement(StyledTableCell, {
      key: item
    }, item.map(function (itemChild, keyItemChild) {
      return /*#__PURE__*/React.createElement("span", {
        className: classes.headerText,
        key: itemChild
      }, itemChild, keyItemChild === 0 && /*#__PURE__*/React.createElement("span", {
        className: classes.line
      }, "/"));
    }));
  }))), tbody.length ? /*#__PURE__*/React.createElement(TableBody, null, tbody.map(function (row, index) {
    return /*#__PURE__*/React.createElement(StyledTableRow, {
      key: index
    }, handleContentTable(Object.values(row), 2).map(function (item) {
      return /*#__PURE__*/React.createElement(StyledTableCell, {
        scope: "row",
        key: item + index
      }, item.map(function (itemChild) {
        return /*#__PURE__*/React.createElement("div", {
          className: classes.bodyText,
          key: itemChild
        }, itemChild);
      }));
    }));
  })) : /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(StyledTableRow, null, /*#__PURE__*/React.createElement(StyledTableCell, {
    colSpan: 4,
    className: classes.notData
  }, "Not available"))))), tbody.length ? /*#__PURE__*/React.createElement("div", {
    className: classes.expandButtonWrapper
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: classes.expandButton,
    onClick: function onClick() {
      return expandTable(expand, tbody.length);
    }
  }, title, expand ? /*#__PURE__*/React.createElement(ExpandMore, null) : /*#__PURE__*/React.createElement(ExpandLess, null))) : '');
};

CustomizedTables.propTypes = {
  thead: PropTypes.array.isRequired,
  tbody: PropTypes.array.isRequired,
  textButton: PropTypes.any.isRequired
};
export default CustomizedTables;