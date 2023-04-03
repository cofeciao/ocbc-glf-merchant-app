/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

/* babel-plugin-inline-import '../assets/images/edit.svg' */
var edit = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iaTFjYXh3cTF2YSIgZD0iTTEyLjM1NCA1LjE0NGwxLjI2LTEuMjZjLjUxNS0uNTE0LjUxNS0xLjM0NiAwLTEuODU3TDExLjk3MS4zODNjLS41MTQtLjUxLTEuMzQ1LS41MS0xLjg1NyAwbC0xLjI2IDEuMjYxYy0uMTI5LjEyOS0uMTI5LjMzNiAwIC40NjVsMy4wMzUgMy4wMzVjLjEyOC4xMjkuMzM2LjEyOS40NjUgMHpNLjc3IDEzLjk5bDMuMzIzLS41ODIgNy4xOC03LjE4Yy4xMy0uMTMuMTMtLjMzNyAwLS40NjZMOC4yMzkgMi43MjdjLS4xMy0uMTI5LS4zMzktLjEyOS0uNDY3IDBMLjU5IDkuOTA3LjAxIDEzLjIzYy0uMDc5LjQ0OS4zMTIuODM3Ljc2Ljc2em0xLjE4NS0xLjA5NmwtLjg1LS44NS4zMDgtMS43NjRoLjk5M3YxLjMxMmgxLjMxMnYuOTkzbC0xLjc2My4zMDl6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQyNyAtMTQyNykgdHJhbnNsYXRlKDQ1MCAxMzkyKSB0cmFuc2xhdGUoMzAgMjgpIHRyYW5zbGF0ZSg5NDcgMikgdHJhbnNsYXRlKDAgNSkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9ImhhM2h5eWc5YmIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2kxY2F4d3ExdmEiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iIzQ4NDg0OCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjaTFjYXh3cTF2YSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iIzI5NzlGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCAwSDE0VjE0SDB6IiBtYXNrPSJ1cmwoI2hhM2h5eWc5YmIpIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../assets/images/edit-hover.svg' */
var editHover = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iaTFjYXh3cTF2YSIgZD0iTTEyLjM1NCA1LjE0NGwxLjI2LTEuMjZjLjUxNS0uNTE0LjUxNS0xLjM0NiAwLTEuODU3TDExLjk3MS4zODNjLS41MTQtLjUxLTEuMzQ1LS41MS0xLjg1NyAwbC0xLjI2IDEuMjYxYy0uMTI5LjEyOS0uMTI5LjMzNiAwIC40NjVsMy4wMzUgMy4wMzVjLjEyOC4xMjkuMzM2LjEyOS40NjUgMHpNLjc3IDEzLjk5bDMuMzIzLS41ODIgNy4xOC03LjE4Yy4xMy0uMTMuMTMtLjMzNyAwLS40NjZMOC4yMzkgMi43MjdjLS4xMy0uMTI5LS4zMzktLjEyOS0uNDY3IDBMLjU5IDkuOTA3LjAxIDEzLjIzYy0uMDc5LjQ0OS4zMTIuODM3Ljc2Ljc2em0xLjE4NS0xLjA5NmwtLjg1LS44NS4zMDgtMS43NjRoLjk5M3YxLjMxMmgxLjMxMnYuOTkzbC0xLjc2My4zMDl6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQyNyAtMTQyNykgdHJhbnNsYXRlKDQ1MCAxMzkyKSB0cmFuc2xhdGUoMzAgMjgpIHRyYW5zbGF0ZSg5NDcgMikgdHJhbnNsYXRlKDAgNSkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9ImhhM2h5eWc5YmIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2kxY2F4d3ExdmEiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iIzQ4NDg0OCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjaTFjYXh3cTF2YSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iIzRlNzhjMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCAwSDE0VjE0SDB6IiBtYXNrPSJ1cmwoI2hhM2h5eWc5YmIpIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=";
var useStyles = makeStyles(function (theme) {
  return {
    sectionWrapper: {
      padding: '30px 30px 30px 30px',
      backgroundColor: theme.palette.$lightGreyWhite,
      '@media (max-width: 768px)': {
        padding: '30px 10px'
      }
    },
    title: {
      fontSize: theme.typography.$fzH4,
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      marginBottom: '30px',
      lineHeight: '1.44',
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5,
        lineHeight: '24px'
      }
    },
    noPaddingBottom: {
      padding: '30px 30px 0px 30px',
      '@media (max-width: 768px)': {
        padding: '30px 10px 0px 10px'
      }
    },
    isMb30: {
      marginBottom: '30px'
    },
    isMb20: {
      marginBottom: '20px'
    },
    isMb10: {
      marginBottom: '10px'
    },
    isMr10: {
      marginRight: '10px'
    },
    bR5: {
      borderRadius: '5px'
    },
    flexBtwSpace: {
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'flex-start'
    },
    btnBackSection: {
      fontSize: theme.typography.$fzH5,
      lineHeight: theme.typography.$fzH2,
      color: theme.palette.$clearBlue,
      alignItems: 'center',
      cursor: 'pointer',
      '&:hover': {
        color: '#4e78c0'
      }
    },
    iconEdit: {
      fontSize: theme.typography.$fzH5,
      '&:hover': {
        color: '#4e78c0'
      }
    }
  };
});

var SectionWrapperReview = function SectionWrapperReview(_ref) {
  var title = _ref.title,
      children = _ref.children,
      isMb20 = _ref.isMb20,
      isMb10 = _ref.isMb10,
      backToUrl = _ref.backToUrl,
      _onClick = _ref.onClick,
      isButtonEdit = _ref.isButtonEdit,
      noPaddingBottom = _ref.noPaddingBottom;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.sectionWrapper, classes.bR5, classes.isMb10, noPaddingBottom && classes.noPaddingBottom)
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.flexBtwSpace)
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.title, isMb20 && classes.isMb20, isMb10 && classes.isMb10)
  }, title), isButtonEdit && /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.flexBtwSpace, classes.btnBackSection, 'info-icon-wrapper'),
    onClick: function onClick() {
      _onClick();

      backToUrl();
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: edit,
    className: clsx(classes.isMr10, classes.iconEdit, 'icon-black'),
    alt: "edit"
  }), /*#__PURE__*/React.createElement("img", {
    src: editHover,
    className: clsx(classes.isMr10, classes.iconEdit, 'icon-blue'),
    alt: "edit-hover"
  }), ' ', "Edit")), /*#__PURE__*/React.createElement("div", {
    className: classes.content
  }, children));
};

SectionWrapperReview.defaultProps = {
  isMb20: false,
  isMb10: false,
  title: '',
  isButtonEdit: true,
  noPaddingBottom: false
};
SectionWrapperReview.propTypes = {
  title: PropTypes.node,
  isMb20: PropTypes.bool,
  isMb10: PropTypes.bool,
  isButtonEdit: PropTypes.bool,
  noPaddingBottom: PropTypes.bool
};
export default SectionWrapperReview;