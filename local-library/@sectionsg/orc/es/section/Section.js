/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

/* babel-plugin-inline-import '../assets/images/info.png' */
var myInfo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA9ZJREFUWAnNmD1ME2EYx+n1EAR0EBMRBxyERQcTTbqYaBwIxUETQyQOGiNRBjVOThhRcZDFEXVQYzTREJIOFSqDLDrUOGiiixCVpTAgGsNHYiz4e85eefv22nt7lOAl13s+/s/z/N+vu/dtRcV/doVK5dPR0bFhbm7uEHFR7p3Ly8uNoVCoUfIgp5BTiN8sy0rU1NSMDQ4O/haf6WVMqL29fe/S0tIVCh6h8GaTAmB/gX1h2/bteDz+wSjGDwSRJjB9JD7JbfnhC/iX6bGn+HqGh4cnC2Acc9EeikajJ0A9hMjGYklMffTYItgzIyMjzwvFeLYYAqG2trabPJ+Vi4wQkFySM5PbszM8jQTcJf58oVaUyX4vkUh067nCuoFhuojtqm5fA31/c3Pz7MTExFs1d04PQeYwXfoSgK2CDGRZ6nI5y/+f6P/LnEqDamVOvXLR2TnU29srJAa4SyEzy+pppet3yC0y8bNucr8njZcRGsjUduDZIeMldg7Aab8kqp8WXqB1Q65tfHz8C8Mwg37UtRk861Op1BSx7wTr9BBvX5n91wyCdciobkD3snnAVkxSWziIxSE0Pz/firFhBWImMUTbdKSXTcfoutQWDmJ3CPFJOKaDTHTiekiWXRjMBUtsJrE6xuUQoqvCfCynSbxVB5nozKPX4B5nsKfIc8AkTseQZ6aurq7BXlhYaApKRpJmCAQioZISDsLFTqfTJb073CS06EY4HB5zdXmSdAtd/4jnJtVuKgsXm0nYSBLTmCyuqqrqTiwW+5k1ZARerpcQD+p2E124WLSm3gSsYyorK50FodtXowsXi67/HiQJy7SfvVJbkNhCMcLFZrjc71AhnKeduLMk2IUz4QkIYBQuFhMzEKEA9XxDhIvFN2ySlsr3Z10v4SBcLE4FaSZTfF3ZUFw4CBdnpbDcYgEIddGqTj0uY+vS7X66y8EhVFtbO0qiab8g1V9dXT3ECSIvRmziU7F+stQWDoJzCNFVixiv+wWqfvAbVF2Vi/lUnCtLbeEguvqltpPJ5CfGssUF+jwTdHPSC8PyjWA3ekdB5nMkEtnNTuGP5MoSEkX21DxGIZXdSYp9rS7I5O2pcwpzAvjKFvQHBKJrRULNC6HL+qExh5CA5VgCKdkB7FODyy1D5j5k8o5bzqTWi7FSugm4pdvLqPdJDa98OXNIB3CC7YTYA+aUswHX/aXq5JKVVPRsnzdkahGG72NLS8sTEsn2dg930QaosZrs/PtBnuMM0xvNl6MaF1jN/0O8HvoZovc5lQsoxoTceK9/0PBtz/in6AXZPQT+B+0v2vuIKcz1IKkAAAAASUVORK5CYII=";

/* babel-plugin-inline-import '../assets/images/icon-info-blue.svg' */
var myInfoBlue = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+NEM5QTAwRTEtNEFFQS00RkU4LUIzOTMtODVGNUQxRUE2QTJCPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik05LDAgQzEwLjYyMDk2NzksMCAxMi4xMjA5Njc3LDAuNDA1MjQyMTIgMTMuNSwxLjIxNTcyNTgxIEMxNC44NzkwMzIzLDIuMDI2MjA5NDkgMTUuOTczNzkwNSwzLjEyMDk2Nzc0IDE2Ljc4NDI3NDIsNC41IEMxNy41OTQ3NTc5LDUuODc5MDMyMjYgMTgsNy4zNzkwMzIwNyAxOCw5IEMxOCwxMC42MjA5Njc5IDE3LjU5NDc1NzksMTIuMTIwOTY3NyAxNi43ODQyNzQyLDEzLjUgQzE1Ljk3Mzc5MDUsMTQuODc5MDMyMyAxNC44NzkwMzIzLDE1Ljk3Mzc5MDUgMTMuNSwxNi43ODQyNzQyIEMxMi4xMjA5Njc3LDE3LjU5NDc1NzkgMTAuNjIwOTY3OSwxOCA5LDE4IEM3LjM3OTAzMjA3LDE4IDUuODc5MDMyMjYsMTcuNTk0NzU3OSA0LjUsMTYuNzg0Mjc0MiBDMy4xMjA5Njc3NCwxNS45NzM3OTA1IDIuMDI2MjA5NDksMTQuODc5MDMyMyAxLjIxNTcyNTgxLDEzLjUgQzAuNDA1MjQyMTIsMTIuMTIwOTY3NyAwLDEwLjYyMDk2NzkgMCw5IEMwLDcuMzc5MDMyMDcgMC40MDUyNDIxMiw1Ljg3OTAzMjI2IDEuMjE1NzI1ODEsNC41IEMyLjAyNjIwOTQ5LDMuMTIwOTY3NzQgMy4xMjA5Njc3NCwyLjAyNjIwOTQ5IDQuNSwxLjIxNTcyNTgxIEM1Ljg3OTAzMjI2LDAuNDA1MjQyMTIgNy4zNzkwMzIwNywwIDksMCBaIE05LjcyNTgwNjQ1LDcuODM4NzA5NjggTDcuNDAzMjI1ODEsNy44Mzg3MDk2OCBDNy4yODIyNTgyNSw3LjgzODcwOTY4IDcuMTc5NDM1Myw3Ljg4MTA0ODU3IDcuMDk0NzU4MDYsNy45NjU3MjU4MSBDNy4wMzEyNTAxNCw4LjAyOTIzMzczIDYuOTkxNTU3NTMsOC4xMDI5NDg2MiA2Ljk3NTY4MDQ3LDguMTg2ODcwMDEgTDYuOTY3NzQxOTQsOC4yNzQxOTM1NSBMNi45Njc3NDE5NCw5LjE0NTE2MTI5IEM2Ljk2Nzc0MTk0LDkuMjY2MTI4ODUgNy4wMTAwODA4Myw5LjM2ODk1MTggNy4wOTQ3NTgwNiw5LjQ1MzYyOTAzIEM3LjE1ODI2NTk5LDkuNTE3MTM2OTYgNy4yMzE5ODA4OCw5LjU1NjgyOTU3IDcuMzE1OTAyMjcsOS41NzI3MDY2MyBMNy40MDMyMjU4MSw5LjU4MDY0NTE2IEw3LjgzODcwOTY4LDkuNTgwNjQ1MTYgTDcuODM4NzA5NjgsMTEuOTAzMjI1OCBMNy40MDMyMjU4MSwxMS45MDMyMjU4IEM3LjI4MjI1ODI1LDExLjkwMzIyNTggNy4xNzk0MzUzLDExLjk0NTU2NDcgNy4wOTQ3NTgwNiwxMi4wMzAyNDE5IEM3LjAzMTI1MDE0LDEyLjA5Mzc0OTkgNi45OTE1NTc1MywxMi4xNjc0NjQ4IDYuOTc1NjgwNDcsMTIuMjUxMzg2MSBMNi45Njc3NDE5NCwxMi4zMzg3MDk3IEw2Ljk2Nzc0MTk0LDEzLjIwOTY3NzQgQzYuOTY3NzQxOTQsMTMuMzMwNjQ1IDcuMDEwMDgwODMsMTMuNDMzNDY3OSA3LjA5NDc1ODA2LDEzLjUxODE0NTIgQzcuMTU4MjY1OTksMTMuNTgxNjUzMSA3LjIzMTk4MDg4LDEzLjYyMTM0NTcgNy4zMTU5MDIyNywxMy42MzcyMjI4IEw3LjQwMzIyNTgxLDEzLjY0NTE2MTMgTDEwLjU5Njc3NDIsMTMuNjQ1MTYxMyBDMTAuNzE3NzQxOCwxMy42NDUxNjEzIDEwLjgyMDU2NDcsMTMuNjAyODIyNCAxMC45MDUyNDE5LDEzLjUxODE0NTIgQzEwLjk2ODc0OTksMTMuNDU0NjM3MiAxMS4wMDg0NDI1LDEzLjM4MDkyMjMgMTEuMDI0MzE5NSwxMy4yOTcwMDEgTDExLjAzMjI1ODEsMTMuMjA5Njc3NCBMMTEuMDMyMjU4MSwxMi4zMzg3MDk3IEMxMS4wMzIyNTgxLDEyLjIxNzc0MjEgMTAuOTg5OTE5MiwxMi4xMTQ5MTkyIDEwLjkwNTI0MTksMTIuMDMwMjQxOSBDMTAuODQxNzM0LDExLjk2NjczNCAxMC43NjgwMTkxLDExLjkyNzA0MTQgMTAuNjg0MDk3NywxMS45MTExNjQzIEwxMC41OTY3NzQyLDExLjkwMzIyNTggTDEwLjE2MTI5MDMsMTEuOTAzMjI1OCBMMTAuMTYxMjkwMyw4LjI3NDE5MzU1IEMxMC4xNjEyOTAzLDguMTUzMjI1OTkgMTAuMTE4OTUxNCw4LjA1MDQwMzA0IDEwLjAzNDI3NDIsNy45NjU3MjU4MSBDOS45NzA3NjYyNyw3LjkwMjIxNzg4IDkuODk3MDUxMzgsNy44NjI1MjUyNyA5LjgxMzEyOTk5LDcuODQ2NjQ4MjEgTDkuNzI1ODA2NDUsNy44Mzg3MDk2OCBaIE05LDMuOTkxOTM1NDggQzguNTg4NzA5ODYsMy45OTE5MzU0OCA4LjIzMTg1NDY1LDQuMTQzMTQ1MzUgNy45Mjk0MzU0OCw0LjQ0NTU2NDUyIEM3LjYyNzAxNjMxLDQuNzQ3OTgzNjkgNy40NzU4MDY0NSw1LjEwNDgzODg5IDcuNDc1ODA2NDUsNS41MTYxMjkwMyBDNy40NzU4MDY0NSw1LjkyNzQxOTE3IDcuNjI3MDE2MzEsNi4yODQyNzQzOCA3LjkyOTQzNTQ4LDYuNTg2NjkzNTUgQzguMjMxODU0NjUsNi44ODkxMTI3MiA4LjU4ODcwOTg2LDcuMDQwMzIyNTggOSw3LjA0MDMyMjU4IEM5LjQxMTI5MDE0LDcuMDQwMzIyNTggOS43NjgxNDUzNSw2Ljg4OTExMjcyIDEwLjA3MDU2NDUsNi41ODY2OTM1NSBDMTAuMzcyOTgzNyw2LjI4NDI3NDM4IDEwLjUyNDE5MzUsNS45Mjc0MTkxNyAxMC41MjQxOTM1LDUuNTE2MTI5MDMgQzEwLjUyNDE5MzUsNS4xMDQ4Mzg4OSAxMC4zNzI5ODM3LDQuNzQ3OTgzNjkgMTAuMDcwNTY0NSw0LjQ0NTU2NDUyIEM5Ljc2ODE0NTM1LDQuMTQzMTQ1MzUgOS40MTEyOTAxNCwzLjk5MTkzNTQ4IDksMy45OTE5MzU0OCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iTXlJbmZvLShkZXNrdG9wKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjItMDdlLVJlY2VpdmUtZnVuZC1zdGF0ZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04ODMuMDAwMDAwLCAtNDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0icmVjZWl2ZS1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTAuMDAwMDAwLCAzOTcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaGVhZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDMwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJJY29ucy8xLS0tVXRpbGl0eS9JbmZvLUNpcmNsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAzLjAwMDAwMCwgNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbiIgZmlsbC1ydWxlPSJub256ZXJvIj48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSItSWNvbi1Db2xvdXIiIGZpbGw9IiMyOTc5ZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTIpIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
var useStyles = makeStyles(function (theme) {
  return {
    sectionWrapper: {
      padding: '30px 30px 30px 30px',
      backgroundColor: function backgroundColor(props) {
        return props.backgroundColor ? props.backgroundColor : theme.palette.$lightGreyWhite;
      },
      borderRadius: '5px',
      '@media (max-width: 768px)': {
        padding: '30px 10px'
      }
    },
    title: {
      fontSize: theme.typography.$fzH4,
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.44',
      letterSpacing: 'normal',
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5,
        lineHeight: '24px'
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
    margin: {
      margin: function margin(props) {
        return props.margin && props.margin;
      }
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
      fontSize: theme.typography.$fzH6,
      lineHeight: theme.typography.$fzH2,
      color: theme.palette.$clearBlue,
      alignItems: 'center',
      cursor: 'pointer'
    },
    iconEdit: {
      fontSize: theme.typography.$fzH5
    },
    description: {
      marginTop: '20px',
      fontSize: theme.typography.$fzH4,
      lineHeight: '1.67',
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5
      }
    },
    icons: {
      margin: '0 0 0 8px',
      maxWidth: '20px',
      flex: '0 0 20px',
      // height: '20px',
      cursor: 'pointer'
    } // custom: {
    //   display: 'inline-block',
    //   verticalAlign: 'middle',
    // },

  };
});

var SectionWrapper = function SectionWrapper(props) {
  var classes = useStyles(props);
  var title = props.title,
      description = props.description,
      children = props.children,
      margin = props.margin,
      className = props.className,
      hasIcon = props.hasIcon,
      handleClick = props.handleClick;
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(className, classes.sectionWrapper)
  }, title && /*#__PURE__*/React.createElement("div", {
    className: clsx(children && classes.isMb30, classes.margin)
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.title, 'd-flex align-center')
  }, title, hasIcon && /*#__PURE__*/React.createElement("span", {
    className: "info-icon-wrapper d-flex",
    onClick: handleClick,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: myInfo,
    alt: "myInfo-logo",
    className: clsx(classes.icons, 'icon-black')
  }), /*#__PURE__*/React.createElement("img", {
    src: myInfoBlue,
    alt: "myInfo-logo",
    className: clsx(classes.icons, 'icon-blue')
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.description
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: classes.content
  }, children));
};

SectionWrapper.defaultProps = {
  title: '',
  description: '',
  margin: '',
  className: '',
  hasIcon: false,
  handleClick: function handleClick(_) {
    return _;
  }
};
SectionWrapper.propTypes = {
  title: PropTypes.node,
  handleClick: PropTypes.func,
  description: PropTypes.node,
  margin: PropTypes.string,
  className: PropTypes.string,
  hasIcon: PropTypes.bool
};
export default SectionWrapper;