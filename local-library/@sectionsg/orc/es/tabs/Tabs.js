import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

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
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
var useStyles = makeStyles(function (theme) {
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

  var _useState = useState(dataTabs),
      _useState2 = _slicedToArray(_useState, 2),
      listTabsData = _useState2[0],
      setListTabsData = _useState2[1]; // const [indexCurrent, setIndexCurrent] = useState(0);


  useEffect(function () {
    setListTabsData(dataTabs);
  }, [dataTabs]);
  useEffect(function () {
    if (listTabsData.length > 0) {
      var cloneList = _toConsumableArray(listTabsData);

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
  return /*#__PURE__*/React.createElement("div", {
    className: classes.listTabComponent
  }, listTabsData && listTabsData.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: clsx(classes.tabsComponent, classes.tabsMarginBottom, item.status && classes.active),
      key: index,
      onClick: function onClick() {
        if (item.status) {
          handleClick(item.id);
        }
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: clsx(classes.tabsIcon, listTabsData.length - index !== 1 ? classes.afterLine : '', item.status && classes.afterLineActive)
    }, /*#__PURE__*/React.createElement("span", null, index + 1)), /*#__PURE__*/React.createElement("span", {
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
  tabId: PropTypes.string,
  dataTabs: PropTypes.any,
  handleClick: PropTypes.func
}; // tabId: 'tab_1' 'tab_2' 'tab_3' 'tab_4' 'tab_5'

export default Tabs;