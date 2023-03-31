"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    container: {
      padding: '0 10px',
      paddingTop: '60px',
      minHeight: 'calc(100vh - 490px)',
      maxWidth: '1440px',
      '@media (max-width: 1080px)': {
        padding: '0'
      }
    },
    fixed: {
      position: 'sticky',
      top: '20px',
      height: '100%',
      transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1) !important',
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
      '@media(max-width: 1080px)': {
        position: 'relative',
        top: 'auto',
        marginTop: '20px'
      }
    },
    scrollUp: {
      transform: 'matrix(1, 0, 0, 1, 0, 83)',
      '@media(max-width: 1080px)': {
        position: 'relative',
        top: 'auto',
        transform: 'matrix(1, 0, 0, 1, 0, 0) !important'
      }
    }
  };
}, 'layout-form'); // eslint-disable-next-line react/prop-types

var FormLayout = function FormLayout(_ref) {
  var tabs = _ref.tabs,
      content = _ref.content,
      isMyInfo = _ref.isMyInfo,
      isFullWidth = _ref.isFullWidth;
  var classes = useStyles();

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      yPos = _useState2[0],
      setYPos = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      scrollUp = _useState4[0],
      setScrollUp = _useState4[1];

  var ref = (0, _react.useRef)(null);

  var handleScroll = function handleScroll() {
    if (window.scrollY < yPos && window.scrollY > 130) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }

    setYPos(window.scrollY);
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return /*#__PURE__*/_react["default"].createElement(_core.Container, {
    className: classes.container
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: classes.myInfoContent,
    ref: ref
  }, isFullWidth ? /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    className: "".concat(isMyInfo ? 'custom-gird-tablet-content' : '')
  }, content)) : /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 3,
    md: 3,
    sm: 12,
    xs: 12,
    className: (0, _clsx["default"])(classes.fixed, scrollUp && classes.scrollUp, "".concat(isMyInfo ? 'custom-gird-tablet-tabs' : ''))
  }, tabs), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 9,
    md: 9,
    sm: 12,
    xs: 12,
    className: "".concat(isMyInfo ? 'custom-gird-tablet-content' : '')
  }, content))));
};

FormLayout.defaultProps = {
  isMyInfo: true,
  isFullWidth: false
};
FormLayout.propTypes = {
  tabs: _propTypes["default"].node.isRequired,
  content: _propTypes["default"].node.isRequired,
  isMyInfo: _propTypes["default"].bool,
  isFullWidth: _propTypes["default"].bool
};
var _default = FormLayout;
exports["default"] = _default;