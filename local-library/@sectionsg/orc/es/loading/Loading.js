/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core'; // import icons

import PropTypes from 'prop-types';
import clsx from 'clsx';

/* babel-plugin-inline-import '../assets/images/loading.svg' */
var LoadingIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDJweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgNDIgNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5PdmFsIDc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijg0LjIxNzY1NjYlIiB5MT0iNzcuODE3NzUwNSUiIHgyPSIxOS42OTY2MTk4JSIgeTI9IjIzLjc4NDUxNDclIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxNUFGQUUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkNUQS1TbGlkZXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgaWQ9IkNUQXMvU2xpZGVyL0FjdGl2YXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ3LjAwMDAwMCwgLTYuMDAwMDAwKSIgc3Ryb2tlPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgICAgICA8ZyBpZD0iU3dpdGNoL0xvYWRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ4LjAwMDAwMCwgNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDIwIEMwLDMxLjA0NTY5NSA4Ljk1NDMwNSw0MCAyMCw0MCBDMzEuMDQ1Njk1LDQwIDQwLDMxLjA0NTY5NSA0MCwyMCBDNDAsOC45NTQzMDUgMzEuMDQ1Njk1LDAgMjAsMCIgaWQ9Ik92YWwtNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMC4wMDAwMDApIHJvdGF0ZSgtMzYwLjAwMDAwMCkgdHJhbnNsYXRlKC0yMC4wMDAwMDAsIC0yMC4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
var useStyles = makeStyles(function () {
  return {
    loadingIndicator: {
      '& img': {
        display: 'block',
        margin: '0 auto',
        animation: 'spin 8s infinite linear'
      }
    },
    large: {
      '& img': {
        width: '42px',
        height: '42px'
      }
    },
    medium: {
      '& img': {
        width: '30px',
        height: '30px'
      }
    }
  };
}, 'loading-component');

var Loading = function Loading(_ref) {
  var size = _ref.size;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.loadingIndicator, classes[size])
  }, /*#__PURE__*/React.createElement("img", {
    src: LoadingIcon,
    alt: "loading"
  }));
};

Loading.defaultProps = {
  size: 'large'
};
Loading.propTypes = {
  size: PropTypes.string
};
export default Loading;