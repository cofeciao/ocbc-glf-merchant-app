"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomizedPaymentPeriodSliderMobile;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("@material-ui/core/Slider"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _excluded = ["children"];

var _markLabel;

var useStyles = function useStyles(_ref) {
  var minHeight = _ref.minHeight;
  return (0, _styles.makeStyles)(function () {
    return {
      root: {
        minHeight: minHeight || 75
      },
      margin: {},
      footer: {
        display: 'flex'
      },
      balanceTransfer: {
        width: '28.57%',
        height: 36,
        borderRadius: 5,
        border: 'solid 1px #b2bec4',
        borderTop: 'none'
      },
      cashOnInstallments: {}
    };
  });
};

var PaymentPeriodSlider = (0, _styles.withStyles)({
  root: {
    color: '#b2bec4',
    padding: '13px 0'
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#7c909b',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px'
    },
    '& .bar': {
      height: 9,
      width: 1,
      backgroundColor: '#fff',
      marginLeft: 1,
      marginRight: 1
    },
    '& .value-label-custom': {
      top: '-34px',
      zIndex: 1,
      position: 'absolute',
      fontSize: '0.75rem',
      transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.01071em',
      transformOrigin: 'bottom center',
      // --- custom
      padding: '5px'
    }
  },
  active: {},
  track: {
    height: 8
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 8,
    borderRadius: 5
  },
  mark: (0, _defineProperty2["default"])({
    height: 7,
    width: 7,
    borderRadius: '50%',
    backgroundColor: '#94a4ad'
  }, "&[data-index=\"".concat(8 - 1, "\"]"), {
    transform: 'translateX(-100%)'
  }),
  markLabel: (_markLabel = {
    top: '40px',
    display: 'none',
    '&[data-index="0"]': {
      transform: 'translateX(0)',
      display: 'block'
    }
  }, (0, _defineProperty2["default"])(_markLabel, "&[data-index=\"".concat(parseInt((8 - 1) / 2, 10), "\"]"), {
    display: 'block'
  }), (0, _defineProperty2["default"])(_markLabel, "&[data-index=\"".concat(8 - 1, "\"]"), {
    transform: 'translateX(-100%)',
    display: 'block'
  }), _markLabel),
  markActive: {
    backgroundColor: '#fafcfc'
  },
  valueLabel: {
    left: -4
  }
})(_Slider["default"]);

function sliderOnChange(event, value, marks, onChangeCallback) {
  var currentIndex = marks.findIndex(function (item) {
    return parseInt(item.value, 10) === parseInt(value, 10);
  });

  if (onChangeCallback) {
    onChangeCallback({
      event: event,
      index: currentIndex,
      value: value
    });
  }
}

var HtmlTooltipCustom = function HtmlTooltipCustom(_ref2) {
  var toolTipBgColor = _ref2.toolTipBgColor;
  return (0, _styles.withStyles)(function () {
    return {
      tooltip: {
        backgroundColor: toolTipBgColor || '#7c909b',
        '& .value-label-tooltip-wrap': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& span:first-child': {
            marginBottom: 6
          }
        },
        '& .more-info-wrap': {
          display: 'flex',
          alignItems: 'center'
        }
      },
      arrow: {
        '&:before': {
          backgroundColor: toolTipBgColor || '#7c909b'
        }
      }
    };
  })(_Tooltip["default"]);
};

var CustomIconButton = (0, _styles.withStyles)({
  root: {
    color: '#484848'
  }
})(_IconButton["default"]);

var ThumbComp = /*#__PURE__*/_react["default"].forwardRef(function AirbnbThumbComponent(props, ref) {
  return /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({}, props, {
    ref: ref
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "bar"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "bar"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "bar"
  }));
});

function CustomizedPaymentPeriodSliderMobile(props) {
  var marks = props.marks,
      _onChange = props.onChange,
      minHeight = props.minHeight,
      toolTipBgColor = props.toolTipBgColor,
      moreInfoOnClick = props.moreInfoOnClick;
  var classes = useStyles({
    minHeight: minHeight
  })();
  var HtmlTooltip = HtmlTooltipCustom({
    toolTipBgColor: toolTipBgColor
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(PaymentPeriodSlider, {
    defaultValue: 20,
    ThumbComponent: ThumbComp,
    marks: marks,
    step: 100 / 7,
    onChange: function onChange(event, index) {
      return sliderOnChange(event, index, marks, _onChange);
    },
    valueLabelDisplay: "on",
    ValueLabelComponent: function ValueLabelComponent(valueLabelProps) {
      var currentIndex = marks.findIndex(function (item) {
        return parseInt(item.value, 10) === parseInt(valueLabelProps.value, 10);
      });
      var children = valueLabelProps.children,
          rest = (0, _objectWithoutProperties2["default"])(valueLabelProps, _excluded);
      return /*#__PURE__*/_react["default"].createElement(HtmlTooltip, (0, _extends2["default"])({
        title: /*#__PURE__*/_react["default"].createElement("div", {
          className: "value-label-tooltip-wrap"
        }, /*#__PURE__*/_react["default"].createElement("span", null, (marks[currentIndex] || {}).label), /*#__PURE__*/_react["default"].createElement("div", {
          className: "more-info-wrap"
        }, /*#__PURE__*/_react["default"].createElement("span", null, "Cash-on-Installments"), /*#__PURE__*/_react["default"].createElement("div", {
          onClick: moreInfoOnClick,
          className: "more-info-icon-wrap"
        }, /*#__PURE__*/_react["default"].createElement(CustomIconButton, {
          size: "small"
        }, /*#__PURE__*/_react["default"].createElement(_Info["default"], {
          fontSize: "small",
          style: {
            color: 'white'
          }
        }))))),
        interactive: true,
        placement: "top",
        arrow: true
      }, rest), children);
    }
  }));
}