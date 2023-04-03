import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { makeStyles, createStyles } from '@material-ui/core';
import React, { useRef, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SelectGroup from '../select-group/SelectGroup';
import styles from './styles';
var useStyles = makeStyles(function (theme) {
  return createStyles(_objectSpread({}, styles(theme)));
});

var ListToggle = function ListToggle(props) {
  var listTabs = props.listTabs,
      setActive = props.setActive,
      active = props.active,
      tabState = props.tabState;
  var matches = useMediaQuery('(max-width:768px)');
  var classes = useStyles();
  var itemRefs = useRef([]);
  var backgroundActive = useRef(null);

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

  useEffect(function () {
    if (!matches) {
      backgroundActive.current.style.left = '0';
      backgroundActive.current.style.width = "".concat(itemRefs.current[0].clientWidth, "px");
    }
  }, [listTabs]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, matches ? /*#__PURE__*/React.createElement(SelectGroup, {
    isCard: false,
    listValuesTabs: listTabs,
    setActive: setActive,
    getValue: function getValue(value) {
      return console.log(value);
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: classes.listToggle
  }, (listTabs || []).map(function (item, index) {
    return /*#__PURE__*/React.createElement("span", {
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
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.backgroundActive,
    ref: backgroundActive
  })));
};

export default ListToggle;