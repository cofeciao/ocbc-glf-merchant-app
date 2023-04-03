import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
var useStyles = makeStyles(function (theme) {
  return {
    categoryComponent: {
      position: 'relative',
      width: '100%',
      textAlign: 'left',
      margin: 0,
      paddingTop: '15px',
      '& div': {
        fontWeight: 'bold',
        letterSpacing: '5px',
        color: theme.palette.$greyishBrown,
        fontSize: theme.typography.$fzH6,
        textTransform: 'uppercase',
        lineHeight: '22px'
      }
    },
    hasLine: {
      position: 'relative',
      '&::before': {
        content: '""',
        height: '2px',
        top: 0,
        width: '60px',
        position: 'absolute',
        backgroundColor: '#484848'
      }
    }
  };
});

var Category = function Category(_ref) {
  var hasLine = _ref.hasLine,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.categoryComponent, hasLine && classes.hasLine)
  }, /*#__PURE__*/React.createElement("div", null, children));
};

Category.defaultProps = {
  hasLine: true
};
Category.propTypes = {
  hasLine: PropTypes.bool
};
export default Category;