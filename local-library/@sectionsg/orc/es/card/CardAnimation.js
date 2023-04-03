import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';

/* babel-plugin-inline-import '../assets/images/flip-card-icon.svg' */
var FlipIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzI5NzlGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi45NTQgMTguMjI2bC4yMzgtLjIyOWMuMjEyLS4yMDMuMjA2LS41MzUtLjAxMi0uNzMybC0uNzYzLS42ODhoNC4wMmMxLjk1IDAgMy41MzctMS41MjMgMy41MzctMy4zOTYgMC0uNTUtLjEzNy0xLjA3LS4zOC0xLjUzLS4xNjItLjMwNy0uNTkyLS4zNy0uODQ2LS4xMjZsLS4yNy4yNThjLS4xNTQuMTQ5LS4xOTMuMzc0LS4xMDQuNTY2LjEyLjI1NC4xODUuNTM1LjE4NS44MzIgMCAxLjEyMy0uOTUxIDIuMDM4LTIuMTIxIDIuMDM4aC00LjAybC43NjItLjY4OGMuMjE4LS4xOTcuMjI0LS41MjkuMDEyLS43MzJsLS4yMzgtLjIyOWMtLjIwNy0uMTk5LS41NDMtLjE5OS0uNzUgMEwuMTU1IDE1LjUzOGMtLjIwNy4xOTktLjIwNy41MjEgMCAuNzJsMi4wNDkgMS45NjhjLjIwNy4xOTkuNTQzLjE5OS43NSAweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3NyAtODQ3KSB0cmFuc2xhdGUoOTAgMzc1KSB0cmFuc2xhdGUoMCA2OSkgdHJhbnNsYXRlKDg4IDIwMCkgdHJhbnNsYXRlKDk5LjczOCAyMDApIHRyYW5zbGF0ZSgwIDMuNjI1KSBtYXRyaXgoLTEgMCAwIDEgOS45NzQgMCkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNzAzIDEyYy42ODkgMCAxLjI0Ny0uNTc2IDEuMjQ3LTEuMjg2VjEuMjg2QzE4Ljk1LjU3NiAxOC4zOTIgMCAxNy43MDMgMEg1LjIzNkM0LjU0OCAwIDMuOTkuNTc2IDMuOTkgMS4yODZ2OS40MjhjMCAuNzEuNTU4IDEuMjg2IDEuMjQ2IDEuMjg2aDEyLjQ2N3ptLjQxNi05LjQyOUg0LjgyMVYxLjI4NmMwLS4yMzYuMTg3LS40MjkuNDE1LS40MjloMTIuNDY3Yy4yMjkgMCAuNDE2LjE5My40MTYuNDI5VjIuNTd6bS0uNDE2IDguNTcySDUuMjM2Yy0uMjI4IDAtLjQxNS0uMTkzLS40MTUtLjQyOVY1LjE0M2gxMy4yOTh2NS41NzFjMCAuMjM2LS4xODcuNDI5LS40MTYuNDI5ek04LjY2NSA5LjQyOWMuMTcxIDAgLjMxMS0uMTQ1LjMxMS0uMzIydi0uMjE0YzAtLjE3Ny0uMTQtLjMyMi0uMzExLS4zMjJoLTEuODdjLS4xNzIgMC0uMzEyLjE0NS0uMzEyLjMyMnYuMjE0YzAgLjE3Ny4xNC4zMjIuMzEyLjMyMmgxLjg3em00Ljk4NyAwYy4xNzEgMCAuMzExLS4xNDUuMzExLS4zMjJ2LS4yMTRjMC0uMTc3LS4xNC0uMzIyLS4zMTEtLjMyMmgtMy41MzNjLS4xNzEgMC0uMzExLjE0NS0uMzExLjMyMnYuMjE0YzAgLjE3Ny4xNC4zMjIuMzExLjMyMmgzLjUzM3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzcgLTg0NykgdHJhbnNsYXRlKDkwIDM3NSkgdHJhbnNsYXRlKDAgNjkpIHRyYW5zbGF0ZSg4OCAyMDApIHRyYW5zbGF0ZSg5OS43MzggMjAwKSB0cmFuc2xhdGUoMCAzLjYyNSkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==";
import { stylesCardAnimation } from './styles';
var useStyles = makeStyles(function (theme) {
  return createStyles(_objectSpread({}, stylesCardAnimation(theme)));
});

var CardAnimation = function CardAnimation(props) {
  var front = props.front,
      back = props.back;
  var classes = useStyles();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFlipped = _useState2[0],
      setIsFlipped = _useState2[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.cardAnimation
  }, /*#__PURE__*/React.createElement(ReactCardFlip, {
    isFlipped: isFlipped,
    flipDirection: "horizontal"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.cardImageWrapper
  }, /*#__PURE__*/React.createElement("img", {
    src: front,
    alt: "#",
    className: classes.cardImage
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.cardImageWrapper
  }, /*#__PURE__*/React.createElement("img", {
    src: back,
    alt: "#",
    className: classes.cardImage
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: handleClick,
    "aria-hidden": "true",
    className: classes.cardAction
  }, /*#__PURE__*/React.createElement("img", {
    src: FlipIcon,
    alt: "",
    className: classes.flipIcon
  }), "Flip card"));
};

export default CardAnimation;