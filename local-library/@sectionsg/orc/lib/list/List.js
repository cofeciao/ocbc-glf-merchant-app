"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

/* eslint-disable react/prop-types */
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    listComponent: {
      fontFamily: '"OpenSans", Helvetica, Arial, sans-serif;',
      marginBottom: '5px',
      color: theme.palette.$greyishBrown,
      fontSize: theme.typography.$fzH4,
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5,
        marginBottom: function marginBottom(marginBottomMB) {
          return marginBottomMB > 0 ? marginBottomMB : 10;
        },
        '&:last-child': {
          marginBottom: 0
        }
      },
      '& .listComponentIcon': {
        marginRight: '10px',
        display: 'inline-flex',
        alignItems: 'flex-start'
      },
      '& .listIcon': {
        marginRight: '10px',
        maxWidth: '16px',
        flex: '0 0 16px',
        height: '30px'
      },
      iconDefault: {
        stroke: theme.palette.$battleshipGrey
      },
      iconCircle: {
        fill: theme.palette.$greyishBrown
      }
    }
  };
});

var List = function List(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      marginBottomMB = _ref.marginBottomMB,
      type = _ref.type;
  var classes = useStyles(marginBottomMB);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.listComponent
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "listComponentIcon"
  }, icon && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, type === 'circle' ? /*#__PURE__*/_react["default"].createElement("svg", {
    className: "MuiSvgIcon-root listIcon",
    focusable: "false",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "10",
    cy: "10",
    r: "6",
    className: (0, _clsx["default"])(classes.iconCircle)
  })) : /*#__PURE__*/_react["default"].createElement("svg", {
    className: "MuiSvgIcon-root listIcon",
    focusable: "false",
    strokeWidth: 2,
    stroke: "#667c88",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 16.17L5.53 12.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L9 16.17z"
  }))), children));
};

List.defaultProps = {
  icon: false,
  marginBottomMB: 0,
  type: 'check'
};
List.propTypes = {
  icon: _propTypes["default"].bool,
  type: _propTypes["default"].string,
  marginBottomMB: _propTypes["default"].number
};
var _default = List;
exports["default"] = _default;