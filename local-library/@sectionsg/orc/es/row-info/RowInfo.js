import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
var useStyles = makeStyles(function (theme) {
  return {
    rowInfoComponent: {
      width: '100%',
      height: 'auto',
      background: 'transparent',
      color: theme.palette.$greyishBrown,
      textAlign: 'left',
      wordBreak: 'break-word',
      '& p': {
        margin: 0,
        alignSelf: 'baseline'
      },
      '& .label': {
        fontSize: theme.typography.$fzH6,
        lineHeight: '24px'
      },
      '& .content': {
        fontSize: theme.typography.$fzBody,
        fontWeight: 600,
        marginTop: '5px'
      },
      '@media (max-width: 768px)': {
        display: 'flex',
        '& .label': {
          flexGrow: 1,
          fontSize: theme.typography.$fzH6,
          '@media screen and (max-width: 768px)': {
            width: '45%'
          }
        },
        '& .content': {
          fontSize: theme.typography.$fzH4,
          marginTop: 0,
          '@media (max-width: 768px)': {
            fontSize: theme.typography.$fzH5,
            width: '55%',
            textAlign: 'right',
            wordBreak: 'break-word'
          }
        }
      }
    },
    isBlock: {
      '@media (max-width: 768px)': {
        display: 'block',
        '& .label': {
          width: '100%'
        },
        '& .content': {
          width: '100%',
          textAlign: 'left'
        }
      }
    }
  };
});

var RowInfo = function RowInfo(_ref) {
  var label = _ref.label,
      content = _ref.content,
      fzSize = _ref.fzSize,
      isBlock = _ref.isBlock;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.rowInfoComponent, isBlock && classes.isBlock)
  }, /*#__PURE__*/React.createElement("p", {
    className: "label",
    style: {
      fontSize: "".concat(fzSize, "px")
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    className: "content"
  }, content));
};

RowInfo.defaultProps = {
  fzSize: '',
  isBlock: false
};
RowInfo.propTypes = {
  label: PropTypes.string.isRequired,
  fzSize: PropTypes.string,
  isBlock: PropTypes.bool
};
export default RowInfo;