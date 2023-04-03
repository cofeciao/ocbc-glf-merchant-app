import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

var useStyles = function useStyles(_ref) {
  var minHeight = _ref.minHeight,
      footerItemBgColor = _ref.footerItemBgColor;
  return makeStyles(function () {
    return {
      root: {
        minHeight: minHeight || 160
      },
      margin: {},
      footer: {
        display: 'flex'
      },
      balanceTransfer: {
        position: 'relative',
        width: 'calc(200% / 7)',
        minHeight: 60,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        border: 'solid 1px #b2bec4',
        borderTop: 'none',
        marginTop: '1rem',
        marginLeft: 3
      },
      balanceTransferContent: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 'auto',
        minWidth: '160px',
        background: footerItemBgColor || 'white',
        top: '1rem',
        left: '50%',
        transform: 'translate(-50%, 0)',
        padding: '10px 30px'
      },
      balanceTransferTitle: {
        color: '#484848',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      balanceTransferDesc: {
        color: '#484848',
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '0.75rem'
      },
      cashOnInstalments: {
        position: 'relative',
        width: 'calc(400% / 7)',
        minHeight: 60,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        border: 'solid 1px #b2bec4',
        borderTop: 'none',
        marginTop: '1rem'
      },
      cashOnInstalmentsContent: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 'auto',
        background: footerItemBgColor || 'white',
        top: '1rem',
        left: '50%',
        transform: 'translate(-50%, 0)',
        padding: '10px 30px'
      },
      cashOnInstalmentsTitle: {
        color: '#484848',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      cashOnInstalmentsDesc: {
        color: '#484848',
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '0.75rem'
      }
    };
  });
};

var PaymentPeriodSlider = withStyles({
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
    }
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 5
  },
  rail: {
    color: '#ebeff1',
    opacity: 1,
    height: 8,
    borderRadius: 5
  },
  mark: {
    height: 7,
    width: 7,
    borderRadius: '50%',
    backgroundColor: '#94a4ad',
    '&[data-index="7"]': {
      transform: 'translateX(-100%)'
    }
  },
  markLabel: {
    top: 40,
    '&[data-index="0"]': {
      transform: 'none'
    },
    '&[data-index="7"]': {
      transform: 'translateX(-100%)'
    }
  },
  markActive: {
    backgroundColor: '#fafcfc'
  },
  markLabelActive: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})(Slider);
var CustomIconButton = withStyles({
  root: {
    color: '#484848'
  }
})(IconButton);

function AirbnbThumbComponent(props) {
  return /*#__PURE__*/React.createElement("span", props, /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }));
}

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

export default function CustomizedPaymentPeriodSlider(_ref2) {
  var marks = _ref2.marks,
      minHeight = _ref2.minHeight,
      footerItemBgColor = _ref2.footerItemBgColor,
      moreInfoOnClick = _ref2.moreInfoOnClick,
      _onChange = _ref2.onChange;
  var classes = useStyles({
    minHeight: minHeight,
    footerItemBgColor: footerItemBgColor
  })();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(PaymentPeriodSlider, {
    ThumbComponent: AirbnbThumbComponent,
    marks: marks,
    step: 100 / 7,
    onChange: function onChange(event, index) {
      return sliderOnChange(event, index, marks, _onChange);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.balanceTransfer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.balanceTransferContent
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.balanceTransferTitle
  }, /*#__PURE__*/React.createElement("strong", null, "Balance Transfer"), /*#__PURE__*/React.createElement(CustomIconButton, {
    size: "small",
    onClick: moreInfoOnClick
  }, /*#__PURE__*/React.createElement(InfoIcon, {
    fontSize: "small"
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.balanceTransferDesc
  }, "Choose how much you pay monthly"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'calc(100% / 7)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.cashOnInstalments
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.cashOnInstalmentsContent
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.cashOnInstalmentsTitle
  }, /*#__PURE__*/React.createElement("strong", null, "Cash-on-Instalments"), /*#__PURE__*/React.createElement(CustomIconButton, {
    size: "small",
    onClick: moreInfoOnClick
  }, /*#__PURE__*/React.createElement(InfoIcon, {
    fontSize: "small"
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.cashOnInstalmentsDesc
  }, "Pay the same amount every month")))));
}