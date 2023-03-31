"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* babel-plugin-inline-import '../assets/images/Done.svg' */
var CheckIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTggMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvU3lzdGVtIGljb25zL0ljb24gVHlwZS9EZWxldGU8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggZD0iTTYuNzM3OTkxMjcsMTcgQzYuODY4OTk1NDMsMTcgNi45NzM3OTkxMywxNi45NjAyMjczIDcuMDUyNDAxNzUsMTYuODgwNjgxOCBMNy4wNTI0MDE3NSwxNi44ODA2ODE4IEwxOC44NDI3OTQ4LDQuOTQ4ODYzNjQgQzE4Ljk0NzU5ODUsNC44NDI4MDI4MyAxOSw0LjcyMzQ4NDY1IDE5LDQuNTkwOTA5MDkgQzE5LDQuNDU4MzMzNTQgMTguOTQ3NTk4NSw0LjM1MjI3MjczIDE4Ljg0Mjc5NDgsNC4yNzI3MjcyNyBMMTguODQyNzk0OCw0LjI3MjcyNzI3IEwxNy43NDIzNTgxLDMuMTE5MzE4MTggQzE3LjYzNzU1NDQsMy4wMzk3NzI3MyAxNy41MTk2NTA1LDMgMTcuMzg4NjQ2MywzIEMxNy4yNTc2NDIxLDMgMTcuMTUyODM4NCwzLjAzOTc3MjczIDE3LjA3NDIzNTgsMy4xMTkzMTgxOCBMMTcuMDc0MjM1OCwzLjExOTMxODE4IEw2LjczNzk5MTI3LDEzLjYxOTMxODIgTDIuOTI1NzY0MTksOS43NjEzNjM2NCBDMi44NDcxNjE1Nyw5LjY1NTMwMjgzIDIuNzQyMzU3ODgsOS42MDIyNzI3MyAyLjYxMTM1MzcxLDkuNjAyMjcyNzMgQzIuNDgwMzQ5NTQsOS42MDIyNzI3MyAyLjM2MjQ0NTYxLDkuNjU1MzAyODMgMi4yNTc2NDE5Miw5Ljc2MTM2MzY0IEwyLjI1NzY0MTkyLDkuNzYxMzYzNjQgTDEuMTU3MjA1MjQsMTAuODc1IEMxLjA1MjQwMTU1LDEwLjk4MTA2MDggMSwxMS4xMDAzNzkgMSwxMS4yMzI5NTQ1IEMxLDExLjM2NTUzMDEgMS4wNTI0MDE1NSwxMS40NzE1OTA5IDEuMTU3MjA1MjQsMTEuNTUxMTM2NCBMMS4xNTcyMDUyNCwxMS41NTExMzY0IEw2LjM4NDI3OTQ4LDE2Ljg4MDY4MTggQzYuNDg5MDgzMTcsMTYuOTYwMjI3MyA2LjYwNjk4NzEsMTcgNi43Mzc5OTEyNywxNyBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iRGVmYXVsdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyYi1SZXF1aXJlZC1Eb2N1bWVudHMtU3RhdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjU0LjAwMDAwMCwgLTEzMjcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJGb3JtL0ZpbGUtdXBsb2FkL0Rlc2t0b3AvTXVsdGlwbGUsLXN1Y2Nlc3MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzMS4wMDAwMDAsIDEyNjMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImZpbGVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTIuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZmlsZS1zdWNjZXNzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbnMvU3lzdGVtLWljb25zL0ljb24tVHlwZS9EZWxldGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikljb24iIGZpbGwtcnVsZT0ibm9uemVybyI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSItSWNvbi1Db2xvdXIiIGZpbGw9IiMzMTk5ODgiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTIpIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";

/* babel-plugin-inline-import '../assets/images/Uploading.svg' */
var Uploading = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTggMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvU3lzdGVtIGljb25zL0ljb24gVHlwZS9EZWxldGU8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggZD0iTTEwLjUsMTcgQzExLjMyODQyNzEsMTcgMTIsMTcuNjcxNTcyOSAxMiwxOC41IEMxMiwxOS4zMjg0MjcxIDExLjMyODQyNzEsMjAgMTAuNSwyMCBDOS42NzE1NzI4OCwyMCA5LDE5LjMyODQyNzEgOSwxOC41IEM5LDE3LjY3MTU3MjkgOS42NzE1NzI4OCwxNyAxMC41LDE3IFogTTUsMTQgQzYuMTA0NTY5NSwxNCA3LDE0Ljg5NTQzMDUgNywxNiBDNywxNy4xMDQ1Njk1IDYuMTA0NTY5NSwxOCA1LDE4IEMzLjg5NTQzMDUsMTggMywxNy4xMDQ1Njk1IDMsMTYgQzMsMTQuODk1NDMwNSAzLjg5NTQzMDUsMTQgNSwxNCBaIE0xNiwxNSBDMTYuNTUyMjg0NywxNSAxNywxNS40NDc3MTUzIDE3LDE2IEMxNywxNi41NTIyODQ3IDE2LjU1MjI4NDcsMTcgMTYsMTcgQzE1LjQ0NzcxNTMsMTcgMTUsMTYuNTUyMjg0NyAxNSwxNiBDMTUsMTUuNDQ3NzE1MyAxNS40NDc3MTUzLDE1IDE2LDE1IFogTTIuNSw5IEMzLjMyODQyNzEyLDkgNCw5LjY3MTU3Mjg4IDQsMTAuNSBDNCwxMS4zMjg0MjcxIDMuMzI4NDI3MTIsMTIgMi41LDEyIEMxLjY3MTU3Mjg4LDEyIDEsMTEuMzI4NDI3MSAxLDEwLjUgQzEsOS42NzE1NzI4OCAxLjY3MTU3Mjg4LDkgMi41LDkgWiBNMTgsOSBDMTguNTUyMjg0Nyw5IDE5LDkuNDQ3NzE1MjUgMTksMTAgQzE5LDEwLjU1MjI4NDcgMTguNTUyMjg0NywxMSAxOCwxMSBDMTcuNDQ3NzE1MywxMSAxNywxMC41NTIyODQ3IDE3LDEwIEMxNyw5LjQ0NzcxNTI1IDE3LjQ0NzcxNTMsOSAxOCw5IFogTTUsMyBDNi4xMDQ1Njk1LDMgNywzLjg5NTQzMDUgNyw1IEM3LDYuMTA0NTY5NSA2LjEwNDU2OTUsNyA1LDcgQzMuODk1NDMwNSw3IDMsNi4xMDQ1Njk1IDMsNSBDMywzLjg5NTQzMDUgMy44OTU0MzA1LDMgNSwzIFogTTE2LDQgQzE2LjU1MjI4NDcsNCAxNyw0LjQ0NzcxNTI1IDE3LDUgQzE3LDUuNTUyMjg0NzUgMTYuNTUyMjg0Nyw2IDE2LDYgQzE1LjQ0NzcxNTMsNiAxNSw1LjU1MjI4NDc1IDE1LDUgQzE1LDQuNDQ3NzE1MjUgMTUuNDQ3NzE1Myw0IDE2LDQgWiBNMTAuNSwwIEMxMS44ODA3MTE5LDAgMTMsMS4xMTkyODgxMyAxMywyLjUgQzEzLDMuODgwNzExODcgMTEuODgwNzExOSw1IDEwLjUsNSBDOS4xMTkyODgxMyw1IDgsMy44ODA3MTE4NyA4LDIuNSBDOCwxLjExOTI4ODEzIDkuMTE5Mjg4MTMsMCAxMC41LDAgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkRlZmF1bHQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSIwMmItUmVxdWlyZWQtRG9jdW1lbnRzLVN0YXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1NC4wMDAwMDAsIC0xMjk1LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iRm9ybS9GaWxlLXVwbG9hZC9EZXNrdG9wL011bHRpcGxlLC1zdWNjZXNzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MzEuMDAwMDAwLCAxMjYzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDMwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJmaWxlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzkyLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikljb25zL1N5c3RlbS1pY29ucy9JY29uLVR5cGUvRGVsZXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikljb24iIGZpbGwtcnVsZT0ibm9uemVybyI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9Ii1JY29uLUNvbG91ciIgZmlsbD0iIzMxOTk4OCIgZmlsbC1ydWxlPSJub256ZXJvIiBtYXNrPSJ1cmwoI21hc2stMikiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="; // import icon

/* babel-plugin-inline-import '../assets/images/icon-upload.png' */
var uploadIcon = "data:image/png;base64,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";

/* babel-plugin-inline-import '../assets/images/bin.svg' */
var DeleteIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYjcwaTNycTFiYSIgZD0iTTEyLjYyMiAyLjYyNWMuMDkxIDAgLjE2OC0uMDMyLjIzMi0uMDk2cy4wOTYtLjE0MS4wOTYtLjIzMlYxLjUzYzAtLjE4Mi0uMDY0LS4zMzctLjE5MS0uNDY1LS4xMjgtLjEyNy0uMjgzLS4xOTEtLjQ2NS0uMTkxSDkuMjNsLS4yNDYtLjUyQzguOTMuMjQ2IDguODQ4LjE2IDguNzQuMDk1IDguNjMuMDMzIDguNTExIDAgOC4zODQgMEg1LjI2NmMtLjEyNyAwLS4yNDYuMDMyLS4zNTUuMDk2LS4xMS4wNjQtLjE5MS4xNS0uMjQ2LjI2bC0uMjQ2LjUxOUgxLjM1NmMtLjE4MiAwLS4zMzcuMDY0LS40NjUuMTkxQy43NjQgMS4xOTQuNyAxLjM1LjcgMS41MzF2Ljc2NmMwIC4wOTEuMDMyLjE2OC4wOTYuMjMycy4xNDEuMDk2LjIzMi4wOTZoMTEuNTk0ek0xMC43NjIgMTRjLjM2NSAwIC42NzUtLjEyOC45My0uMzgzcy4zODMtLjU2NS4zODMtLjkzVjMuODI5YzAtLjA5MS0uMDMyLS4xNjgtLjA5Ni0uMjMycy0uMTQxLS4wOTYtLjIzMi0uMDk2SDEuOTAzYy0uMDkxIDAtLjE2OC4wMzItLjIzMi4wOTZzLS4wOTYuMTQxLS4wOTYuMjMydjguODZjMCAuMzY0LjEyOC42NzQuMzgzLjkzLjI1NS4yNTQuNTY1LjM4Mi45My4zODJoNy44NzR6TTQuMiAxMi4yNWMtLjEyOCAwLS4yMzItLjA0MS0uMzE0LS4xMjMtLjA4Mi0uMDgyLS4xMjMtLjE4Ny0uMTIzLS4zMTVWNS42ODljMC0uMTI4LjA0LS4yMzMuMTIzLS4zMTUuMDgyLS4wODIuMTg2LS4xMjMuMzE0LS4xMjNzLjIzMi4wNDEuMzE0LjEyM2MuMDgyLjA4Mi4xMjMuMTg3LjEyMy4zMTR2Ni4xMjVjMCAuMTI4LS4wNC4yMzMtLjEyMy4zMTUtLjA4Mi4wODItLjE4Ni4xMjMtLjMxNC4xMjN6bTIuNjI1IDBjLS4xMjggMC0uMjMyLS4wNDEtLjMxNC0uMTIzLS4wODItLjA4Mi0uMTIzLS4xODctLjEyMy0uMzE1VjUuNjg5YzAtLjEyOC4wNC0uMjMzLjEyMy0uMzE1LjA4Mi0uMDgyLjE4Ni0uMTIzLjMxNC0uMTIzcy4yMzIuMDQxLjMxNC4xMjNjLjA4Mi4wODIuMTIzLjE4Ny4xMjMuMzE0djYuMTI1YzAgLjEyOC0uMDQuMjMzLS4xMjMuMzE1LS4wODIuMDgyLS4xODYuMTIzLS4zMTQuMTIzem0yLjYyNSAwYy0uMTI4IDAtLjIzMi0uMDQxLS4zMTQtLjEyMy0uMDgyLS4wODItLjEyMy0uMTg3LS4xMjMtLjMxNVY1LjY4OWMwLS4xMjguMDQtLjIzMy4xMjMtLjMxNS4wODItLjA4Mi4xODYtLjEyMy4zMTQtLjEyM3MuMjMyLjA0MS4zMTQuMTIzYy4wODIuMDgyLjEyMy4xODcuMTIzLjMxNHY2LjEyNWMwIC4xMjgtLjA0LjIzMy0uMTIzLjMxNS0uMDgyLjA4Mi0uMTg2LjEyMy0uMzE0LjEyM3oiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzYgLTExNjQpIHRyYW5zbGF0ZSgxNzYgMTE2NCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9InZhb3M1amp4emIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2I3MGkzcnExYmEiLz4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM4ODgiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMEgxNFYxNEgweiIgbWFzaz0idXJsKCN2YW9zNWpqeHpiKSIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K";

/* babel-plugin-inline-import '../assets/images/binHover.svg' */
var DeleteIconHover = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iaGZzd3R4OGc2YSIgZD0iTTEyLjYyMiAyLjYyNWMuMDkxIDAgLjE2OC0uMDMyLjIzMi0uMDk2cy4wOTYtLjE0MS4wOTYtLjIzMlYxLjUzYzAtLjE4Mi0uMDY0LS4zMzctLjE5MS0uNDY1LS4xMjgtLjEyNy0uMjgzLS4xOTEtLjQ2NS0uMTkxSDkuMjNsLS4yNDYtLjUyQzguOTMuMjQ2IDguODQ4LjE2IDguNzQuMDk1IDguNjMuMDMzIDguNTExIDAgOC4zODQgMEg1LjI2NmMtLjEyNyAwLS4yNDYuMDMyLS4zNTUuMDk2LS4xMS4wNjQtLjE5MS4xNS0uMjQ2LjI2bC0uMjQ2LjUxOUgxLjM1NmMtLjE4MiAwLS4zMzcuMDY0LS40NjUuMTkxQy43NjQgMS4xOTQuNyAxLjM1LjcgMS41MzF2Ljc2NmMwIC4wOTEuMDMyLjE2OC4wOTYuMjMycy4xNDEuMDk2LjIzMi4wOTZoMTEuNTk0ek0xMC43NjIgMTRjLjM2NSAwIC42NzUtLjEyOC45My0uMzgzcy4zODMtLjU2NS4zODMtLjkzVjMuODI5YzAtLjA5MS0uMDMyLS4xNjgtLjA5Ni0uMjMycy0uMTQxLS4wOTYtLjIzMi0uMDk2SDEuOTAzYy0uMDkxIDAtLjE2OC4wMzItLjIzMi4wOTZzLS4wOTYuMTQxLS4wOTYuMjMydjguODZjMCAuMzY0LjEyOC42NzQuMzgzLjkzLjI1NS4yNTQuNTY1LjM4Mi45My4zODJoNy44NzR6TTQuMiAxMi4yNWMtLjEyOCAwLS4yMzItLjA0MS0uMzE0LS4xMjMtLjA4Mi0uMDgyLS4xMjMtLjE4Ny0uMTIzLS4zMTVWNS42ODljMC0uMTI4LjA0LS4yMzMuMTIzLS4zMTUuMDgyLS4wODIuMTg2LS4xMjMuMzE0LS4xMjNzLjIzMi4wNDEuMzE0LjEyM2MuMDgyLjA4Mi4xMjMuMTg3LjEyMy4zMTR2Ni4xMjVjMCAuMTI4LS4wNC4yMzMtLjEyMy4zMTUtLjA4Mi4wODItLjE4Ni4xMjMtLjMxNC4xMjN6bTIuNjI1IDBjLS4xMjggMC0uMjMyLS4wNDEtLjMxNC0uMTIzLS4wODItLjA4Mi0uMTIzLS4xODctLjEyMy0uMzE1VjUuNjg5YzAtLjEyOC4wNC0uMjMzLjEyMy0uMzE1LjA4Mi0uMDgyLjE4Ni0uMTIzLjMxNC0uMTIzcy4yMzIuMDQxLjMxNC4xMjNjLjA4Mi4wODIuMTIzLjE4Ny4xMjMuMzE0djYuMTI1YzAgLjEyOC0uMDQuMjMzLS4xMjMuMzE1LS4wODIuMDgyLS4xODYuMTIzLS4zMTQuMTIzem0yLjYyNSAwYy0uMTI4IDAtLjIzMi0uMDQxLS4zMTQtLjEyMy0uMDgyLS4wODItLjEyMy0uMTg3LS4xMjMtLjMxNVY1LjY4OWMwLS4xMjguMDQtLjIzMy4xMjMtLjMxNS4wODItLjA4Mi4xODYtLjEyMy4zMTQtLjEyM3MuMjMyLjA0MS4zMTQuMTIzYy4wODIuMDgyLjEyMy4xODcuMTIzLjMxNHY2LjEyNWMwIC4xMjgtLjA0LjIzMy0uMTIzLjMxNS0uMDgyLjA4Mi0uMTg2LjEyMy0uMzE0LjEyM3oiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzYgLTExOTUpIHRyYW5zbGF0ZSgxNzYgMTE5NSkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Ink0N2x1NjZ5d2IiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2hmc3d0eDhnNmEiLz4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM0ODQ4NDgiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMEgxNFYxNEgweiIgbWFzaz0idXJsKCN5NDdsdTY2eXdiKSIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K";
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {},
    container: {
      padding: '0 10px',
      minHeight: 'calc(100vh - 490px)',
      '@media (min-width: 1600px)': {
        maxWidth: '1440px'
      },
      '@media (max-width: 768px)': {
        padding: '0'
      }
    },
    uploadWrapper: {},
    uploadFile: {
      position: 'relative',
      height: '150px',
      padding: '30px',
      border: "dashed 1px ".concat(theme.palette.$lightGreyBlue),
      borderRadius: '5px',
      textAlign: 'center',
      boxSizing: 'border-box'
    },
    onHover: {
      borderStyle: 'solid'
    },
    uploadFileContent: {
      fontSize: theme.typography.$fzH6,
      lineHeight: '24px',
      textAlign: 'center',
      wordBreak: 'break-all',
      cursor: 'pointer',
      display: 'inline-block'
    },
    inputFile: {
      width: '100%',
      height: '100%',
      opacity: 0,
      position: 'absolute',
      left: 0,
      top: 0,
      cursor: 'pointer',
      outline: 'none'
    },
    iconUpload: {
      width: '55px',
      height: '55px'
    },
    hiddenM: {
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    showM: {
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'initial'
      }
    },
    linkDot: {
      color: theme.palette.$clearBlue
    },
    title: {
      fontSize: theme.typography.$fzH4,
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.33',
      letterSpacing: 'normal',
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5,
        lineHeight: '24px'
      }
    },
    cursorPointer: {
      cursor: 'pointer'
    },
    wordBreak: {
      wordBreak: 'break-all',
      paddingRight: '10px'
    },
    listItem: {
      fontSize: '14px',
      lineHeight: '24px',
      color: '#484848',
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '10px',
      '@media screen and (max-width: 1024px)': {
        alignItems: 'flex-start'
      },
      '& > a ': {
        cursor: 'pointer'
      }
    },
    checkIcon: {
      marginRight: '8px',
      color: theme.palette.$greenIcon,
      '@media screen and (max-width: 1024px)': {
        marginTop: '8px'
      }
    },
    message: {
      color: '#cb2d3e',
      fontSize: theme.typography.$fzH6,
      lineHeight: '24px',
      marginTop: '5px'
    },
    iconDelete: {
      marginTop: '5px'
    },
    marginBoxUpload: {
      margin: function margin(props) {
        return props.marginBoxUpload ? props.marginBoxUpload : '30px 0 0';
      }
    },
    margin: {
      margin: function margin(props) {
        return props.marginErrorMessage ? props.marginErrorMessage : '30px 0 0';
      }
    },
    deleteIcon: {
      position: 'relative',
      '&:hover': {
        '& img': {
          '&:first-child': {
            display: 'none'
          },
          '&:last-child': {
            display: 'block'
          }
        }
      },
      '& img': {
        position: 'absolute',
        width: '14px',
        height: '14px',
        '&:last-child': {
          display: 'none'
        },
        '@media (max-width: 1024px)': {
          position: 'relative',
          top: 0
        }
      }
    },
    content: {
      maxWidth: '430px',
      marginTop: 5,
      fontSize: theme.typography.$fzH4,
      lineHeight: 1.67,
      '@media (max-width: 768px)': {
        maxWidth: '90%',
        fontSize: theme.typography.$fzH5
      }
    },
    linkDownload: {
      fontSize: theme.typography.$fzH4,
      textDecoration: 'none',
      color: theme.palette.$clearBlue
    },
    fullWith: {
      maxWidth: '100%'
    }
  };
});

var InputFile = function InputFile(props) {
  var classes = useStyles(props);
  var acceptFile = props.acceptFile,
      multiple = props.multiple,
      labelBefore = props.labelBefore,
      labelAfter = props.labelAfter,
      hiddenInput = props.hiddenInput,
      getValue = props.getValue,
      maxFileName = props.maxFileName,
      required = props.required,
      inputKey = props.inputKey,
      id = props.id,
      defaultValue = props.defaultValue,
      title = props.title,
      messageError = props.messageError,
      labelFooter = props.labelFooter,
      maxFiles = props.maxFiles,
      contentBody = props.contentBody,
      errorConnection = props.errorConnection,
      marginErrorMessage = props.marginErrorMessage,
      hasLoading = props.hasLoading,
      marginBoxUpload = props.marginBoxUpload,
      textLinkDownload = props.textLinkDownload,
      fileDownload = props.fileDownload,
      children = props.children,
      renaming = props.renaming,
      maxSizeFile = props.maxSizeFile;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var refInput = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      focusInput = _useState4[0],
      setFocusInput = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      signatureFiles = _useState6[0],
      setSignatureFiles = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      multiFiles = _useState8[0],
      setMultiFiles = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      uploadFiles = _useState10[0],
      setUploadFiles = _useState10[1];

  var totalSizeUpload = _lodash["default"].sumBy(signatureFiles, function (item) {
    return Number(item.Size);
  });

  (0, _react.useEffect)(function () {
    setSignatureFiles(defaultValue);
    setMultiFiles(defaultValue);
  }, []);
  (0, _react.useEffect)(function () {
    getValue(signatureFiles);
  }, [signatureFiles]); // set muiltiFile

  (0, _react.useEffect)(function () {
    setMultiFiles(multiFiles);
  }, [multiFiles]);

  var compressImage = function compressImage(base64) {
    var canvas = document.createElement('canvas');
    var img = document.createElement('img');
    return new Promise(function (resolve, reject) {
      img.onload = function () {
        var width = img.width;
        var height = img.height;
        var maxHeight = 1500;
        var maxWidth = 1500;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round(height *= maxWidth / width);
            width = maxWidth;
          }
        } else if (height > maxHeight) {
          width = Math.round(width *= maxHeight / height);
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };

      img.onerror = function (err) {
        reject(err);
      };

      img.src = base64;
      return img;
    });
  };

  var handleFileUpload = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fileList) {
      var errorFile, arrListFile;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (fileList.length) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              if (!errorConnection) {
                _context2.next = 5;
                break;
              }

              setErrorMessage('An error occurred, please re-upload your document');
              return _context2.abrupt("return");

            case 5:
              if (!(multiple && maxFiles && fileList.length + signatureFiles.length > maxFiles)) {
                _context2.next = 8;
                break;
              }

              setErrorMessage("Maximum upload ".concat(maxFiles, " files"));
              return _context2.abrupt("return");

            case 8:
              errorFile = [];
              arrListFile = multiple ? (0, _toConsumableArray2["default"])(signatureFiles) : [];
              Object.values(fileList).map(function (item, index) {
                var sizeFile = (item.size / (1024 * 1024)).toFixed(2);

                if (sizeFile > maxSizeFile) {
                  setErrorMessage('Acceptable file size max 2MB');
                } else {
                  setErrorMessage('');
                  setUploadFiles(function (uploadFiles) {
                    return (0, _objectSpread4["default"])((0, _objectSpread4["default"])({}, uploadFiles), {}, (0, _defineProperty2["default"])({}, "".concat(item.name), true));
                  });
                  var reader = new FileReader();
                  reader.onload = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                    var dataBase64, checkTypeFile, itemUpload;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            dataBase64 = reader.result.replace(/data:.*?\/.*?;base64,/i, '');
                            checkTypeFile = ['image/jpeg', 'image/png', 'image/x-eps', 'application/pdf'].includes(item.type);
                            itemUpload = {
                              Name: item.name,
                              Size: sizeFile,
                              contentType: item.type,
                              DocType: item.type.split('/')[1],
                              Attachment: dataBase64
                            };

                            if (!(reader.result === 'data:' || reader.result === '' || !checkTypeFile)) {
                              _context.next = 7;
                              break;
                            }

                            errorFile.push({
                              field: 'invalidFile',
                              status: true,
                              mess: ['Please upload valid files']
                            });
                            setErrorMessage('Please upload valid files');
                            return _context.abrupt("return");

                          case 7:
                            if (!['image/jpeg', 'image/png', 'image/x-eps'].includes(item.type)) {
                              _context.next = 11;
                              break;
                            }

                            if (!(sizeFile >= 1)) {
                              _context.next = 11;
                              break;
                            }

                            _context.next = 11;
                            return compressImage(reader.result).then(function (resl) {
                              var head = 'data:image/jpeg;base64,';
                              var imgFileSize = Math.round((resl.length - head.length) * 3 / 4) / (1024 * 1024);
                              itemUpload.Size = imgFileSize.toFixed(2);
                              itemUpload.Attachment = resl.replace(/data:.*?\/.*?;base64,/i, '');
                            });

                          case 11:
                            arrListFile.push(itemUpload);

                            if (renaming) {
                              setSignatureFiles((0, _toConsumableArray2["default"])(arrListFile.map(function (item, index) {
                                return (0, _objectSpread4["default"])((0, _objectSpread4["default"])({}, item), {}, {
                                  Name: "".concat(renaming, "_").concat(index + 1, ".").concat(item.DocType)
                                });
                              })));
                            } else {
                              setSignatureFiles((0, _toConsumableArray2["default"])(arrListFile));
                            }

                            refInput.current = null;
                            setErrorMessage('');

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  reader.readAsDataURL(item);
                  setTimeout(function () {
                    setUploadFiles(function (uploadFiles) {
                      return (0, _objectSpread4["default"])((0, _objectSpread4["default"])({}, uploadFiles), {}, (0, _defineProperty2["default"])({}, "".concat(item.name), false));
                    });
                  }, 3000); // if (item.name.length > maxFileName) {
                  //   setErrorMessage('File name too long');
                  // } else {
                  //   setErrorMessage('');
                  //   if (sizeFile > (acceptFile[item.type] !== undefined ? parseFloat(acceptFile[item.type]) : 1024) || totalSizeUpload > 5) {
                  //     setErrorMessage('Acceptable file size max 5MB');
                  //   } else {
                  //     // debugger
                  //     setUploadFiles((uploadFiles) => ({
                  //       ...uploadFiles,
                  //       [`${item.name}`]: true,
                  //     }));
                  //     const reader = new FileReader();
                  //     reader.onload = async function () {
                  //       const dataBase64 = reader.result.replace(/data:.*?\/.*?;base64,/i, '');
                  //       const checkTypeFile = ['image/jpeg', 'image/png', 'image/x-eps', 'application/pdf'].includes(item.type);
                  //       const itemUpload = {
                  //         Name: item.name,
                  //         Size: sizeFile,
                  //         contentType: item.type,
                  //         DocType: item.type.split('/')[1],
                  //         Attachment: dataBase64,
                  //       };
                  //       if (reader.result === 'data:' || reader.result === '' || !checkTypeFile) {
                  //         errorFile.push({
                  //           field: 'invalidFile',
                  //           status: true,
                  //           mess: ['Please upload valid files'],
                  //         });
                  //         return;
                  //       }
                  //       if (['image/jpeg', 'image/png', 'image/x-eps'].includes(item.type)) {
                  //         if (sizeFile >= 1) {
                  //           await compressImage(reader.result).then(resl => {
                  //             const head = 'data:image/jpeg;base64,';
                  //             const imgFileSize = Math.round((resl.length - head.length) * 3 / 4) / (1024 * 1024);
                  //             itemUpload.Size = imgFileSize.toFixed(2);
                  //             itemUpload.Attachment = resl.replace(/data:.*?\/.*?;base64,/i, '');
                  //           });
                  //         }
                  //       }
                  //       arrListFile.push(itemUpload);
                  //       setSignatureFiles([...arrListFile]);
                  //       refInput.current = null;
                  //       setErrorMessage('');
                  //     };
                  //     reader.readAsDataURL(item);
                  //     setTimeout(() => {
                  //       setUploadFiles((uploadFiles) => ({
                  //         ...uploadFiles,
                  //         [`${item.name}`]: false,
                  //       }));
                  //     }, 3000);
                  //   }
                  // }
                }
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleFileUpload(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var deleteFile = function deleteFile(indexFile) {
    var listFileDraf = (0, _toConsumableArray2["default"])(signatureFiles);
    listFileDraf.splice(indexFile, 1);
    setSignatureFiles(listFileDraf);
  };

  var validationInput = function validationInput(value) {
    if (value.length <= 0 || !multiple && value.length <= 0) {
      setErrorMessage(messageError);
    } else setErrorMessage('');
  }; // render content


  var uploadFileContent = function uploadFileContent() {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _clsx["default"])(classes.uploadFileContent)
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: uploadIcon,
      className: classes.iconUpload,
      alt: "#"
    }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: classes.hiddenM
    }, "Drag and drop to upload a file, or"), ' ', /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _clsx["default"])(classes.linkDot, classes.hiddenM)
    }, "browse"), /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _clsx["default"])(classes.linkDot, classes.showM)
    }, "Browse to upload a file")))), /*#__PURE__*/_react["default"].createElement("input", {
      ref: refInput,
      className: classes.inputFile,
      type: "file",
      multiple: multiple,
      accept: Object.keys(acceptFile),
      onChange: function onChange(e) {
        handleFileUpload(e.target.files);
      }
    }));
  };

  (0, _react.useEffect)(function () {
    if (required && inputKey) {
      validationInput(signatureFiles);
    } else setErrorMessage('');
  }, [inputKey, signatureFiles]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "".concat(errorMessage ? "errorType-label-".concat(id) : id)
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 7,
    md: 7,
    sm: 7,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.title)
  }, title, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.content, "".concat(textLinkDownload ? classes.fullWith : ''))
  }, signatureFiles.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, labelAfter) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, labelBefore), textLinkDownload && /*#__PURE__*/_react["default"].createElement("a", {
    href: fileDownload,
    download: true,
    className: classes.linkDownload
  }, ' ', textLinkDownload)), contentBody.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-20"
  }, contentBody)), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 5,
    md: 5,
    sm: 5,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.preUploaded
  }, signatureFiles && signatureFiles.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: classes.listItem
    }, uploadFiles["".concat(item.Name)] && uploadFiles["".concat(item.Name)] ? /*#__PURE__*/_react["default"].createElement("img", {
      src: Uploading,
      className: (0, _clsx["default"])(classes.checkIcon, 'spin'),
      alt: "upload"
    }) : /*#__PURE__*/_react["default"].createElement("img", {
      src: CheckIcon,
      className: classes.checkIcon,
      alt: "check"
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: classes.wordBreak
    }, "".concat(item.Name, " (").concat(item.Size, " MB)")), /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _clsx["default"])(classes.cursorPointer, classes.deleteIcon),
      onClick: function onClick() {
        return deleteFile(index);
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      className: classes.iconDelete,
      src: DeleteIcon,
      alt: "delete"
    }), /*#__PURE__*/_react["default"].createElement("img", {
      className: classes.iconDelete,
      src: DeleteIconHover,
      alt: "delete"
    })));
  })))), hiddenInput && multiple && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((0, _clsx["default"])(classes.marginBoxUpload, classes.uploadFile, focusInput && classes.onHover)),
    onMouseEnter: function onMouseEnter() {
      return setFocusInput(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setFocusInput(false);
    }
  }, uploadFileContent()), errorMessage && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(classes.message, " ").concat(classes.marginErrorMessage)
  }, errorMessage)), !hiddenInput && multiple && maxFiles && signatureFiles.length < maxFiles && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat((0, _clsx["default"])(classes.marginBoxUpload, classes.uploadFile, focusInput && classes.onHover, signatureFiles.length > 0 && classes.onHover)),
    onMouseEnter: function onMouseEnter() {
      return setFocusInput(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setFocusInput(false);
    }
  }, uploadFileContent()), errorMessage && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(classes.message, " ").concat(classes.marginErrorMessage)
  }, errorMessage)), signatureFiles.length <= maxFiles && labelFooter && errorMessage === '' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fz-14 mt-30"
  }, labelFooter));
};

InputFile.defaultProps = {
  acceptFile: {
    'image/jpeg': 2,
    'application/pdf': 5,
    'image/x-eps': 2,
    'image/png': 2
  },
  multiple: false,
  marginErrorMessage: '',
  marginBoxUpload: '',
  labelBefore: 'Acceptable file types: PDF, JPG, PNG (Max 2MB)',
  labelAfter: 'Acceptable file types: PDF, JPG, PNG (Max 2MB)',
  labelFooter: '',
  hiddenInput: false,
  getValue: function getValue(_) {
    return _;
  },
  maxFileName: 1000,
  maxSizeFile: 2,
  maxFiles: 1000,
  required: false,
  defaultValue: [],
  title: '',
  contentBody: [],
  errorConnection: false,
  hasLoading: false,
  messageError: 'Please upload your signature to proceed',
  textLinkDownload: '',
  fileDownload: '',
  children: '',
  id: '',
  inputKey: '',
  renaming: ''
};
InputFile.propTypes = {
  acceptFile: _propTypes["default"].object,
  multiple: _propTypes["default"].bool,
  labelBefore: _propTypes["default"].string,
  marginErrorMessage: _propTypes["default"].string,
  marginBoxUpload: _propTypes["default"].string,
  labelAfter: _propTypes["default"].string,
  labelFooter: _propTypes["default"].string,
  hiddenInput: _propTypes["default"].bool,
  getValue: _propTypes["default"].func,
  maxFileName: _propTypes["default"].number,
  maxFiles: _propTypes["default"].number,
  required: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].array,
  title: _propTypes["default"].string,
  contentBody: _propTypes["default"].any,
  errorConnection: _propTypes["default"].bool,
  hasLoading: _propTypes["default"].bool,
  messageError: _propTypes["default"].string,
  textLinkDownload: _propTypes["default"].string,
  fileDownload: _propTypes["default"].string,
  id: _propTypes["default"].string,
  renaming: _propTypes["default"].string,
  children: _propTypes["default"].any,
  inputKey: _propTypes["default"].any,
  maxSizeFile: _propTypes["default"].number
};
var _default = InputFile;
exports["default"] = _default;