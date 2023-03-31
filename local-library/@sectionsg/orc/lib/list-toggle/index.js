"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _core = require("@material-ui/core");

var _react = _interopRequireWildcard(require("react"));

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _SelectGroup = _interopRequireDefault(require("../select-group/SelectGroup"));

var _styles = _interopRequireDefault(require("./styles"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return (0, _core.createStyles)((0, _objectSpread2["default"])({}, (0, _styles["default"])(theme)));
});

var ListToggle = function ListToggle(props) {
  var listTabs = props.listTabs,
      setActive = props.setActive,
      active = props.active,
      tabState = props.tabState;
  var matches = (0, _useMediaQuery["default"])('(max-width:768px)');
  var classes = useStyles();
  var itemRefs = (0, _react.useRef)([]);
  var backgroundActive = (0, _react.useRef)(null);

  var handleActive = function handleActive(item, index) {
    setActive(item);

    if (index === 0) {
      backgroundActive.current.style.left = '0';
      backgroundActive.current.style.width = "".concat(itemRefs.current[0].clientWidth, "px");
    } else if (index === 1) {
      backgroundActive.current.style.left = "".concat(itemRefs.current[0].clientWidth, "px");
      backgroundActive.current.style.width = "".concat(itemRefs.current[1].clientWidth, "px");
    } else {
      backgroundActive.current.style.left = "".concat(itemRefs.current[0].clientWidth + itemRefs.current[1].clientWidth, "px");
      backgroundActive.current.style.width = "".concat(itemRefs.current[2].clientWidth, "px");
    }
  };

  (0, _react.useEffect)(function () {
    if (!matches) {
      backgroundActive.current.style.left = '0';
      backgroundActive.current.style.width = "".concat(itemRefs.current[0].clientWidth, "px");
    }
  }, [listTabs]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, matches ? /*#__PURE__*/_react["default"].createElement(_SelectGroup["default"], {
    isCard: false,
    listValuesTabs: listTabs,
    setActive: setActive,
    getValue: function getValue(value) {
      return console.log(value);
    }
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.listToggle
  }, (listTabs || []).map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      onClick: function onClick() {
        return handleActive(item.value, index);
      },
      "aria-hidden": "true",
      ref: function ref(el) {
        itemRefs.current[index] = el;
      },
      className: "".concat(classes.itemToggle, " ").concat(active === item.value ? classes.active : '')
    }, item.value);
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.backgroundActive,
    ref: backgroundActive
  })));
};

var _default = ListToggle;
exports["default"] = _default;