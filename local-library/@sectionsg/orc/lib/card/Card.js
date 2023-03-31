"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _rowInfo = _interopRequireDefault(require("../row-info"));

var _CardAnimation = _interopRequireDefault(require("./CardAnimation"));

var _CardPromo = _interopRequireDefault(require("./CardPromo"));

var _SelectGroup = _interopRequireDefault(require("../select-group/SelectGroup"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// IMPORT COMPONENT
var useStyles = (0, _core.makeStyles)(function (theme) {
  return (0, _core.createStyles)((0, _objectSpread2["default"])({}, (0, _styles.stylesCard)(theme)));
});

var Card = function Card(props) {
  var dataCard = props.dataCard,
      isCreditCard = props.isCreditCard,
      translate = props.translate,
      formatCurrency = props.formatCurrency;
  var classes = useStyles();

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isPrincipalCardSelected = _useState2[0],
      setPrincipalCardSelected = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.cardWrapper
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.cardTop
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.cardtype
  }, dataCard.cardTitle || 'Updating'), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.cardNames
  }, dataCard.cardName && dataCard.subCard && dataCard.subCard.length > 0 ? /*#__PURE__*/_react["default"].createElement(_SelectGroup["default"], {
    isCard: true,
    principalCard: "Principal Card",
    supplementaryCard: "Supplementary Card",
    listValues: dataCard.subCard,
    cardName: dataCard.cardName,
    getValue: function getValue(value) {
      if (value.value === dataCard.cardName) {
        setPrincipalCardSelected(true);
      } else {
        setPrincipalCardSelected(false);
      }
    }
  }) : dataCard.cardName), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.cardAnimationWrapper
  }, /*#__PURE__*/_react["default"].createElement(_CardAnimation["default"], {
    front: dataCard.frontCardImage,
    back: dataCard.backCardImage
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.rowInfoWrapper, 'mt-40')
  }, isCreditCard && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_rowInfo["default"], {
    label: "Credit limit for this card",
    content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
      className: classes.rowInfoContent
    }, "SGD", dataCard.creditLimit && formatCurrency(dataCard.creditLimit, 2)))
  }), isPrincipalCardSelected && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.rowInfoExtra, 'mt-10 fz14')
  }, translate('includes-supplementary-card-spend'), ' ')))), dataCard.promoInfo && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.cardPromoWrapper, 'mt-30')
  }, /*#__PURE__*/_react["default"].createElement(_CardPromo["default"], {
    textPromo: dataCard.promoInfo
  })));
};

Card.defaultProps = {
  dataCard: {},
  isCreditCard: false,
  translate: function translate(_) {
    return _;
  },
  formatCurrency: function formatCurrency(_) {
    return _;
  }
};
Card.propTypes = {
  dataCard: _propTypes["default"].object,
  isCreditCard: _propTypes["default"].bool,
  translate: _propTypes["default"].func,
  formatCurrency: _propTypes["default"].func
};
var _default = Card;
exports["default"] = _default;