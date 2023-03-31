"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _core = require("@material-ui/core");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _CheckboxField = _interopRequireDefault(require("./CheckboxField"));

var _styles = _interopRequireDefault(require("./styles"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** *
 * CARD CHECK BOX
 * child
 *  >> CheckboxField
 */
// import modules
// important child component
// import style
// render UI
var CardCheckbox = function CardCheckbox(_ref) {
  var label = _ref.label,
      textError = _ref.textError,
      dataCardCheckbox = _ref.dataCardCheckbox,
      getValue = _ref.getValue,
      checkboxKey = _ref.checkboxKey,
      lg = _ref.lg,
      md = _ref.md,
      sm = _ref.sm,
      xs = _ref.xs,
      className = _ref.className;
  var classes = (0, _styles["default"])();

  var _useState = (0, _react.useState)(dataCardCheckbox),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      listDataCardCheckbox = _useState2[0],
      setListDataCardCheckbox = _useState2[1]; // list data render


  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      statusErr = _useState4[0],
      setStatusErr = _useState4[1]; // list data render
  // handle validation of checkbox


  var handleValidation = function handleValidation(data) {
    return data.some(function (item) {
      return item.checked === true;
    });
  }; // handle show err msg


  var handleShowErrMsg = function handleShowErrMsg(data) {
    if (handleValidation(data)) {
      setStatusErr(false);
    } else {
      setStatusErr(true);
    }
  }; // listening dataCardCheckbox


  (0, _react.useEffect)(function () {
    setListDataCardCheckbox(dataCardCheckbox);
  }, [dataCardCheckbox]); // fnc handle get value checkbox

  var handleChange = function handleChange(event) {
    var data = [];
    data = (0, _toConsumableArray2["default"])(listDataCardCheckbox); // clone list data

    var idx = data.findIndex(function (item) {
      return item.label === event.target.name;
    }); // find index of value checked
    // replace data at index

    if (idx >= 0) {
      data[idx] = {
        label: data[idx].label,
        checked: event.target.checked
      };
    }

    getValue({
      data: data,
      checked: event.target.checked,
      name: event.target.name,
      statusError: !handleValidation(data)
    });
    setListDataCardCheckbox(data);
    handleShowErrMsg(data);
  }; // handle listen event key


  (0, _react.useEffect)(function () {
    if (checkboxKey) {
      if (handleValidation(listDataCardCheckbox)) {
        setStatusErr(false);
      } else {
        setStatusErr(true);
      }
    } else {
      setStatusErr(false);
    }
  }, [checkboxKey]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.carCheckbox
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    className: (0, _clsx["default"])(classes.grCardCheckbox)
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    className: classes.radioListTagItems
  }, label && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.title, 'title-checkbox')
  }, label), /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], null, listDataCardCheckbox.length > 0 && listDataCardCheckbox.map(function (item, index) {
    return (
      /*#__PURE__*/
      // Check box field
      _react["default"].createElement(_CheckboxField["default"], {
        classes: classes,
        item: item,
        index: index,
        handleChange: handleChange,
        lg: lg,
        md: md,
        sm: sm,
        xs: xs,
        key: index,
        className: className
      })
    );
  }))), statusErr && /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
    id: statusErr && 'errorType-label',
    className: classes.textErr
  }, textError)));
};

CardCheckbox.defaultProps = {
  label: 'What servicing request would you like to do today?',
  textError: 'This field is required',
  dataCardCheckbox: [],
  getValue: function getValue(_) {
    return _;
  },
  checkboxKey: 111,
  lg: 12,
  md: 12,
  sm: 12,
  xs: 12,
  className: ''
};
CardCheckbox.propTypes = {
  label: _propTypes["default"].string,
  textError: _propTypes["default"].string,
  dataCardCheckbox: _propTypes["default"].array,
  getValue: _propTypes["default"].func,
  checkboxKey: _propTypes["default"].any,
  lg: _propTypes["default"].number,
  md: _propTypes["default"].number,
  sm: _propTypes["default"].number,
  xs: _propTypes["default"].number,
  className: _propTypes["default"].string
};
var _default = CardCheckbox;
exports["default"] = _default;