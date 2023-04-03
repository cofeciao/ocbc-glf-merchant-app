"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-param-reassign */

/* eslint-disable array-callback-return */

/*
  when checked style old
  {item.check ? (
    <>
      <CheckRoundedIcon style={{ display: 'none' }} />
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        strokeWidth={2}
        stroke="#fff"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M9 16.17L5.53 12.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L9 16.17z" />
      </svg>
    </>
  ) : (
    <span>{index + 1}</span>
  )}
*/
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    listTabComponent: {
      '@media (max-width: 1079px)': {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        marginBottom: '30px',
        '@media (max-width: 1079px)': {
          '&::before': {
            content: '""',
            position: 'absolute',
            width: 'calc(100% - 20px - 15px)',
            height: '2px',
            top: '50%',
            left: '10px',
            transform: 'translate3d(0, -50%, 0)',
            backgroundColor: '#667c88',
            display: 'block',
            opacity: 0.2
          }
        }
      }
    },
    tabsComponent: {
      alignItems: 'center',
      width: 'auto !important',
      display: 'flex',
      opacity: 0.5,
      cursor: 'auto',
      '@media (max-width: 1079px)': {
        width: 'auto',
        opacity: 1,
        cursor: 'pointer' // '& span': {
        //   backgroundColor: '#b3bdc3'
        // }

      }
    },
    active: {
      opacity: 1,
      cursor: 'pointer',
      '@media (max-width: 1079px)': {
        '& span': {
          backgroundColor: '#667c88'
        }
      }
    },
    tabsIcon: {
      height: '30px',
      width: '30px',
      backgroundColor: theme.palette.$battleshipGrey,
      borderRadius: '50%',
      fontSize: theme.typography.$fzH6,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      '@media (max-width: 1079px)': {
        backgroundColor: '#b3bdc3'
      },
      '& svg': {
        color: 'white',
        fontSize: theme.typography.$fzH4,
        fontWeight: 'bold'
      },
      '& span': {
        backgroundColor: 'transparent',
        color: theme.palette.$white,
        fontSize: theme.typography.$fzH4,
        fontWeight: 'bold'
      }
    },
    tabsText: {
      marginLeft: '20px',
      fontSize: theme.typography.$fzH6,
      width: 'calc(100% - 50px)',
      fontWeight: 'bold',
      '@media (max-width: 1079px)': {
        display: 'none'
      }
    },
    tabsMarginBottom: {
      marginBottom: '20px',
      '@media (max-width: 1079px)': {
        marginBottom: '0'
      }
    },
    afterLine: {
      '&::after': {
        position: 'absolute',
        content: '""',
        bottom: '-20px',
        left: '14px',
        width: '1px',
        height: '20px',
        backgroundColor: theme.palette.$coolGrey,
        opacity: 0.5,
        cursor: 'auto',
        '@media (max-width: 1079px)': {
          display: 'none'
        }
      }
    },
    afterLineActive: {
      '&::after': {
        backgroundColor: theme.palette.$battleshipGrey,
        opacity: 0.8
      }
    }
  };
});

var Tabs = function Tabs(_ref) {
  var tabId = _ref.tabId,
      dataTabs = _ref.dataTabs,
      handleClick = _ref.handleClick;

  var _useState = (0, _react.useState)(dataTabs),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      listTabsData = _useState2[0],
      setListTabsData = _useState2[1]; // const [indexCurrent, setIndexCurrent] = useState(0);


  (0, _react.useEffect)(function () {
    setListTabsData(dataTabs);
  }, [dataTabs]);
  (0, _react.useEffect)(function () {
    if (listTabsData.length > 0) {
      var cloneList = (0, _toConsumableArray2["default"])(listTabsData);
      cloneList.map(function (itemTab, index) {
        var indexCurrentTab = listTabsData.findIndex(function (itemList) {
          return itemList.id === tabId;
        });

        if (index === 0) {
          cloneList[index].check = true;
          cloneList[index].status = true;
          return;
        }

        if (index < indexCurrentTab || index === indexCurrentTab) {
          cloneList[index].check = true;
          cloneList[index].status = true;
          return;
        }

        if (index > indexCurrentTab) {
          cloneList[index].check = false;
          cloneList[index].status = false;
          return;
        }
      });
      setListTabsData(cloneList);
    }
  }, [tabId]);
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.listTabComponent
  }, listTabsData && listTabsData.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _clsx["default"])(classes.tabsComponent, classes.tabsMarginBottom, item.status && classes.active),
      key: index,
      onClick: function onClick() {
        if (item.status) {
          handleClick(item.id);
        }
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _clsx["default"])(classes.tabsIcon, listTabsData.length - index !== 1 ? classes.afterLine : '', item.status && classes.afterLineActive)
    }, /*#__PURE__*/_react["default"].createElement("span", null, index + 1)), /*#__PURE__*/_react["default"].createElement("span", {
      className: classes.tabsText
    }, item.text));
  }));
};

Tabs.defaultProps = {
  tabId: '',
  dataTabs: [],
  handleClick: function handleClick(_) {
    return _;
  }
};
Tabs.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  tabId: _propTypes["default"].string,
  dataTabs: _propTypes["default"].any,
  handleClick: _propTypes["default"].func
}; // tabId: 'tab_1' 'tab_2' 'tab_3' 'tab_4' 'tab_5'

var _default = Tabs;
exports["default"] = _default;