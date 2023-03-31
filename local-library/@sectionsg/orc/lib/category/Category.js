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

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    categoryComponent: {
      position: 'relative',
      width: '100%',
      textAlign: 'left',
      margin: 0,
      paddingTop: '15px',
      '& div': {
        fontWeight: 'bold',
        letterSpacing: '5px',
        color: theme.palette.$greyishBrown,
        fontSize: theme.typography.$fzH6,
        textTransform: 'uppercase',
        lineHeight: '22px'
      }
    },
    hasLine: {
      position: 'relative',
      '&::before': {
        content: '""',
        height: '2px',
        top: 0,
        width: '60px',
        position: 'absolute',
        backgroundColor: '#484848'
      }
    }
  };
});

var Category = function Category(_ref) {
  var hasLine = _ref.hasLine,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.categoryComponent, hasLine && classes.hasLine)
  }, /*#__PURE__*/_react["default"].createElement("div", null, children));
};

Category.defaultProps = {
  hasLine: true
};
Category.propTypes = {
  hasLine: _propTypes["default"].bool
};
var _default = Category;
exports["default"] = _default;