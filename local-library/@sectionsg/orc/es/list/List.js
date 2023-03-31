/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
var useStyles = makeStyles(function (theme) {
  return {
    listComponent: {
      fontFamily: '"OpenSans", Helvetica, Arial, sans-serif;',
      marginBottom: '5px',
      color: theme.palette.$greyishBrown,
      fontSize: theme.typography.$fzH4,
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5,
        marginBottom: function marginBottom(marginBottomMB) {
          return marginBottomMB > 0 ? marginBottomMB : 10;
        },
        '&:last-child': {
          marginBottom: 0
        }
      },
      '& .listComponentIcon': {
        marginRight: '10px',
        display: 'inline-flex',
        alignItems: 'flex-start'
      },
      '& .listIcon': {
        marginRight: '10px',
        maxWidth: '16px',
        flex: '0 0 16px',
        height: '30px'
      },
      iconDefault: {
        stroke: theme.palette.$battleshipGrey
      },
      iconCircle: {
        fill: theme.palette.$greyishBrown
      }
    }
  };
});

var List = function List(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      marginBottomMB = _ref.marginBottomMB,
      type = _ref.type;
  var classes = useStyles(marginBottomMB);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.listComponent
  }, /*#__PURE__*/React.createElement("div", {
    className: "listComponentIcon"
  }, icon && /*#__PURE__*/React.createElement(React.Fragment, null, type === 'circle' ? /*#__PURE__*/React.createElement("svg", {
    className: "MuiSvgIcon-root listIcon",
    focusable: "false",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "6",
    className: clsx(classes.iconCircle)
  })) : /*#__PURE__*/React.createElement("svg", {
    className: "MuiSvgIcon-root listIcon",
    focusable: "false",
    strokeWidth: 2,
    stroke: "#667c88",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 16.17L5.53 12.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L9 16.17z"
  }))), children));
};

List.defaultProps = {
  icon: false,
  marginBottomMB: 0,
  type: 'check'
};
List.propTypes = {
  icon: PropTypes.bool,
  type: PropTypes.string,
  marginBottomMB: PropTypes.number
};
export default List;