import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'; // import icons

/* babel-plugin-inline-import '../assets/images/icon-info.svg' */
var iconInfo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+NEM5QTAwRTEtNEFFQS00RkU4LUIzOTMtODVGNUQxRUE2QTJCPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik05LDAgQzEwLjYyMDk2NzksMCAxMi4xMjA5Njc3LDAuNDA1MjQyMTIgMTMuNSwxLjIxNTcyNTgxIEMxNC44NzkwMzIzLDIuMDI2MjA5NDkgMTUuOTczNzkwNSwzLjEyMDk2Nzc0IDE2Ljc4NDI3NDIsNC41IEMxNy41OTQ3NTc5LDUuODc5MDMyMjYgMTgsNy4zNzkwMzIwNyAxOCw5IEMxOCwxMC42MjA5Njc5IDE3LjU5NDc1NzksMTIuMTIwOTY3NyAxNi43ODQyNzQyLDEzLjUgQzE1Ljk3Mzc5MDUsMTQuODc5MDMyMyAxNC44NzkwMzIzLDE1Ljk3Mzc5MDUgMTMuNSwxNi43ODQyNzQyIEMxMi4xMjA5Njc3LDE3LjU5NDc1NzkgMTAuNjIwOTY3OSwxOCA5LDE4IEM3LjM3OTAzMjA3LDE4IDUuODc5MDMyMjYsMTcuNTk0NzU3OSA0LjUsMTYuNzg0Mjc0MiBDMy4xMjA5Njc3NCwxNS45NzM3OTA1IDIuMDI2MjA5NDksMTQuODc5MDMyMyAxLjIxNTcyNTgxLDEzLjUgQzAuNDA1MjQyMTIsMTIuMTIwOTY3NyAwLDEwLjYyMDk2NzkgMCw5IEMwLDcuMzc5MDMyMDcgMC40MDUyNDIxMiw1Ljg3OTAzMjI2IDEuMjE1NzI1ODEsNC41IEMyLjAyNjIwOTQ5LDMuMTIwOTY3NzQgMy4xMjA5Njc3NCwyLjAyNjIwOTQ5IDQuNSwxLjIxNTcyNTgxIEM1Ljg3OTAzMjI2LDAuNDA1MjQyMTIgNy4zNzkwMzIwNywwIDksMCBaIE05LjcyNTgwNjQ1LDcuODM4NzA5NjggTDcuNDAzMjI1ODEsNy44Mzg3MDk2OCBDNy4yODIyNTgyNSw3LjgzODcwOTY4IDcuMTc5NDM1Myw3Ljg4MTA0ODU3IDcuMDk0NzU4MDYsNy45NjU3MjU4MSBDNy4wMzEyNTAxNCw4LjAyOTIzMzczIDYuOTkxNTU3NTMsOC4xMDI5NDg2MiA2Ljk3NTY4MDQ3LDguMTg2ODcwMDEgTDYuOTY3NzQxOTQsOC4yNzQxOTM1NSBMNi45Njc3NDE5NCw5LjE0NTE2MTI5IEM2Ljk2Nzc0MTk0LDkuMjY2MTI4ODUgNy4wMTAwODA4Myw5LjM2ODk1MTggNy4wOTQ3NTgwNiw5LjQ1MzYyOTAzIEM3LjE1ODI2NTk5LDkuNTE3MTM2OTYgNy4yMzE5ODA4OCw5LjU1NjgyOTU3IDcuMzE1OTAyMjcsOS41NzI3MDY2MyBMNy40MDMyMjU4MSw5LjU4MDY0NTE2IEw3LjgzODcwOTY4LDkuNTgwNjQ1MTYgTDcuODM4NzA5NjgsMTEuOTAzMjI1OCBMNy40MDMyMjU4MSwxMS45MDMyMjU4IEM3LjI4MjI1ODI1LDExLjkwMzIyNTggNy4xNzk0MzUzLDExLjk0NTU2NDcgNy4wOTQ3NTgwNiwxMi4wMzAyNDE5IEM3LjAzMTI1MDE0LDEyLjA5Mzc0OTkgNi45OTE1NTc1MywxMi4xNjc0NjQ4IDYuOTc1NjgwNDcsMTIuMjUxMzg2MSBMNi45Njc3NDE5NCwxMi4zMzg3MDk3IEw2Ljk2Nzc0MTk0LDEzLjIwOTY3NzQgQzYuOTY3NzQxOTQsMTMuMzMwNjQ1IDcuMDEwMDgwODMsMTMuNDMzNDY3OSA3LjA5NDc1ODA2LDEzLjUxODE0NTIgQzcuMTU4MjY1OTksMTMuNTgxNjUzMSA3LjIzMTk4MDg4LDEzLjYyMTM0NTcgNy4zMTU5MDIyNywxMy42MzcyMjI4IEw3LjQwMzIyNTgxLDEzLjY0NTE2MTMgTDEwLjU5Njc3NDIsMTMuNjQ1MTYxMyBDMTAuNzE3NzQxOCwxMy42NDUxNjEzIDEwLjgyMDU2NDcsMTMuNjAyODIyNCAxMC45MDUyNDE5LDEzLjUxODE0NTIgQzEwLjk2ODc0OTksMTMuNDU0NjM3MiAxMS4wMDg0NDI1LDEzLjM4MDkyMjMgMTEuMDI0MzE5NSwxMy4yOTcwMDEgTDExLjAzMjI1ODEsMTMuMjA5Njc3NCBMMTEuMDMyMjU4MSwxMi4zMzg3MDk3IEMxMS4wMzIyNTgxLDEyLjIxNzc0MjEgMTAuOTg5OTE5MiwxMi4xMTQ5MTkyIDEwLjkwNTI0MTksMTIuMDMwMjQxOSBDMTAuODQxNzM0LDExLjk2NjczNCAxMC43NjgwMTkxLDExLjkyNzA0MTQgMTAuNjg0MDk3NywxMS45MTExNjQzIEwxMC41OTY3NzQyLDExLjkwMzIyNTggTDEwLjE2MTI5MDMsMTEuOTAzMjI1OCBMMTAuMTYxMjkwMyw4LjI3NDE5MzU1IEMxMC4xNjEyOTAzLDguMTUzMjI1OTkgMTAuMTE4OTUxNCw4LjA1MDQwMzA0IDEwLjAzNDI3NDIsNy45NjU3MjU4MSBDOS45NzA3NjYyNyw3LjkwMjIxNzg4IDkuODk3MDUxMzgsNy44NjI1MjUyNyA5LjgxMzEyOTk5LDcuODQ2NjQ4MjEgTDkuNzI1ODA2NDUsNy44Mzg3MDk2OCBaIE05LDMuOTkxOTM1NDggQzguNTg4NzA5ODYsMy45OTE5MzU0OCA4LjIzMTg1NDY1LDQuMTQzMTQ1MzUgNy45Mjk0MzU0OCw0LjQ0NTU2NDUyIEM3LjYyNzAxNjMxLDQuNzQ3OTgzNjkgNy40NzU4MDY0NSw1LjEwNDgzODg5IDcuNDc1ODA2NDUsNS41MTYxMjkwMyBDNy40NzU4MDY0NSw1LjkyNzQxOTE3IDcuNjI3MDE2MzEsNi4yODQyNzQzOCA3LjkyOTQzNTQ4LDYuNTg2NjkzNTUgQzguMjMxODU0NjUsNi44ODkxMTI3MiA4LjU4ODcwOTg2LDcuMDQwMzIyNTggOSw3LjA0MDMyMjU4IEM5LjQxMTI5MDE0LDcuMDQwMzIyNTggOS43NjgxNDUzNSw2Ljg4OTExMjcyIDEwLjA3MDU2NDUsNi41ODY2OTM1NSBDMTAuMzcyOTgzNyw2LjI4NDI3NDM4IDEwLjUyNDE5MzUsNS45Mjc0MTkxNyAxMC41MjQxOTM1LDUuNTE2MTI5MDMgQzEwLjUyNDE5MzUsNS4xMDQ4Mzg4OSAxMC4zNzI5ODM3LDQuNzQ3OTgzNjkgMTAuMDcwNTY0NSw0LjQ0NTU2NDUyIEM5Ljc2ODE0NTM1LDQuMTQzMTQ1MzUgOS40MTEyOTAxNCwzLjk5MTkzNTQ4IDksMy45OTE5MzU0OCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iTXlJbmZvLShkZXNrdG9wKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjItMDdlLVJlY2VpdmUtZnVuZC1zdGF0ZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04ODMuMDAwMDAwLCAtNDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0icmVjZWl2ZS1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTAuMDAwMDAwLCAzOTcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaGVhZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDMwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJJY29ucy8xLS0tVXRpbGl0eS9JbmZvLUNpcmNsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAzLjAwMDAwMCwgNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbiIgZmlsbC1ydWxlPSJub256ZXJvIj48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSItSWNvbi1Db2xvdXIiIGZpbGw9IiM0ODQ4NDgiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTIpIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";

/* babel-plugin-inline-import '../assets/images/icon-info-blue.svg' */
var iconInfoBlue = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+NEM5QTAwRTEtNEFFQS00RkU4LUIzOTMtODVGNUQxRUE2QTJCPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik05LDAgQzEwLjYyMDk2NzksMCAxMi4xMjA5Njc3LDAuNDA1MjQyMTIgMTMuNSwxLjIxNTcyNTgxIEMxNC44NzkwMzIzLDIuMDI2MjA5NDkgMTUuOTczNzkwNSwzLjEyMDk2Nzc0IDE2Ljc4NDI3NDIsNC41IEMxNy41OTQ3NTc5LDUuODc5MDMyMjYgMTgsNy4zNzkwMzIwNyAxOCw5IEMxOCwxMC42MjA5Njc5IDE3LjU5NDc1NzksMTIuMTIwOTY3NyAxNi43ODQyNzQyLDEzLjUgQzE1Ljk3Mzc5MDUsMTQuODc5MDMyMyAxNC44NzkwMzIzLDE1Ljk3Mzc5MDUgMTMuNSwxNi43ODQyNzQyIEMxMi4xMjA5Njc3LDE3LjU5NDc1NzkgMTAuNjIwOTY3OSwxOCA5LDE4IEM3LjM3OTAzMjA3LDE4IDUuODc5MDMyMjYsMTcuNTk0NzU3OSA0LjUsMTYuNzg0Mjc0MiBDMy4xMjA5Njc3NCwxNS45NzM3OTA1IDIuMDI2MjA5NDksMTQuODc5MDMyMyAxLjIxNTcyNTgxLDEzLjUgQzAuNDA1MjQyMTIsMTIuMTIwOTY3NyAwLDEwLjYyMDk2NzkgMCw5IEMwLDcuMzc5MDMyMDcgMC40MDUyNDIxMiw1Ljg3OTAzMjI2IDEuMjE1NzI1ODEsNC41IEMyLjAyNjIwOTQ5LDMuMTIwOTY3NzQgMy4xMjA5Njc3NCwyLjAyNjIwOTQ5IDQuNSwxLjIxNTcyNTgxIEM1Ljg3OTAzMjI2LDAuNDA1MjQyMTIgNy4zNzkwMzIwNywwIDksMCBaIE05LjcyNTgwNjQ1LDcuODM4NzA5NjggTDcuNDAzMjI1ODEsNy44Mzg3MDk2OCBDNy4yODIyNTgyNSw3LjgzODcwOTY4IDcuMTc5NDM1Myw3Ljg4MTA0ODU3IDcuMDk0NzU4MDYsNy45NjU3MjU4MSBDNy4wMzEyNTAxNCw4LjAyOTIzMzczIDYuOTkxNTU3NTMsOC4xMDI5NDg2MiA2Ljk3NTY4MDQ3LDguMTg2ODcwMDEgTDYuOTY3NzQxOTQsOC4yNzQxOTM1NSBMNi45Njc3NDE5NCw5LjE0NTE2MTI5IEM2Ljk2Nzc0MTk0LDkuMjY2MTI4ODUgNy4wMTAwODA4Myw5LjM2ODk1MTggNy4wOTQ3NTgwNiw5LjQ1MzYyOTAzIEM3LjE1ODI2NTk5LDkuNTE3MTM2OTYgNy4yMzE5ODA4OCw5LjU1NjgyOTU3IDcuMzE1OTAyMjcsOS41NzI3MDY2MyBMNy40MDMyMjU4MSw5LjU4MDY0NTE2IEw3LjgzODcwOTY4LDkuNTgwNjQ1MTYgTDcuODM4NzA5NjgsMTEuOTAzMjI1OCBMNy40MDMyMjU4MSwxMS45MDMyMjU4IEM3LjI4MjI1ODI1LDExLjkwMzIyNTggNy4xNzk0MzUzLDExLjk0NTU2NDcgNy4wOTQ3NTgwNiwxMi4wMzAyNDE5IEM3LjAzMTI1MDE0LDEyLjA5Mzc0OTkgNi45OTE1NTc1MywxMi4xNjc0NjQ4IDYuOTc1NjgwNDcsMTIuMjUxMzg2MSBMNi45Njc3NDE5NCwxMi4zMzg3MDk3IEw2Ljk2Nzc0MTk0LDEzLjIwOTY3NzQgQzYuOTY3NzQxOTQsMTMuMzMwNjQ1IDcuMDEwMDgwODMsMTMuNDMzNDY3OSA3LjA5NDc1ODA2LDEzLjUxODE0NTIgQzcuMTU4MjY1OTksMTMuNTgxNjUzMSA3LjIzMTk4MDg4LDEzLjYyMTM0NTcgNy4zMTU5MDIyNywxMy42MzcyMjI4IEw3LjQwMzIyNTgxLDEzLjY0NTE2MTMgTDEwLjU5Njc3NDIsMTMuNjQ1MTYxMyBDMTAuNzE3NzQxOCwxMy42NDUxNjEzIDEwLjgyMDU2NDcsMTMuNjAyODIyNCAxMC45MDUyNDE5LDEzLjUxODE0NTIgQzEwLjk2ODc0OTksMTMuNDU0NjM3MiAxMS4wMDg0NDI1LDEzLjM4MDkyMjMgMTEuMDI0MzE5NSwxMy4yOTcwMDEgTDExLjAzMjI1ODEsMTMuMjA5Njc3NCBMMTEuMDMyMjU4MSwxMi4zMzg3MDk3IEMxMS4wMzIyNTgxLDEyLjIxNzc0MjEgMTAuOTg5OTE5MiwxMi4xMTQ5MTkyIDEwLjkwNTI0MTksMTIuMDMwMjQxOSBDMTAuODQxNzM0LDExLjk2NjczNCAxMC43NjgwMTkxLDExLjkyNzA0MTQgMTAuNjg0MDk3NywxMS45MTExNjQzIEwxMC41OTY3NzQyLDExLjkwMzIyNTggTDEwLjE2MTI5MDMsMTEuOTAzMjI1OCBMMTAuMTYxMjkwMyw4LjI3NDE5MzU1IEMxMC4xNjEyOTAzLDguMTUzMjI1OTkgMTAuMTE4OTUxNCw4LjA1MDQwMzA0IDEwLjAzNDI3NDIsNy45NjU3MjU4MSBDOS45NzA3NjYyNyw3LjkwMjIxNzg4IDkuODk3MDUxMzgsNy44NjI1MjUyNyA5LjgxMzEyOTk5LDcuODQ2NjQ4MjEgTDkuNzI1ODA2NDUsNy44Mzg3MDk2OCBaIE05LDMuOTkxOTM1NDggQzguNTg4NzA5ODYsMy45OTE5MzU0OCA4LjIzMTg1NDY1LDQuMTQzMTQ1MzUgNy45Mjk0MzU0OCw0LjQ0NTU2NDUyIEM3LjYyNzAxNjMxLDQuNzQ3OTgzNjkgNy40NzU4MDY0NSw1LjEwNDgzODg5IDcuNDc1ODA2NDUsNS41MTYxMjkwMyBDNy40NzU4MDY0NSw1LjkyNzQxOTE3IDcuNjI3MDE2MzEsNi4yODQyNzQzOCA3LjkyOTQzNTQ4LDYuNTg2NjkzNTUgQzguMjMxODU0NjUsNi44ODkxMTI3MiA4LjU4ODcwOTg2LDcuMDQwMzIyNTggOSw3LjA0MDMyMjU4IEM5LjQxMTI5MDE0LDcuMDQwMzIyNTggOS43NjgxNDUzNSw2Ljg4OTExMjcyIDEwLjA3MDU2NDUsNi41ODY2OTM1NSBDMTAuMzcyOTgzNyw2LjI4NDI3NDM4IDEwLjUyNDE5MzUsNS45Mjc0MTkxNyAxMC41MjQxOTM1LDUuNTE2MTI5MDMgQzEwLjUyNDE5MzUsNS4xMDQ4Mzg4OSAxMC4zNzI5ODM3LDQuNzQ3OTgzNjkgMTAuMDcwNTY0NSw0LjQ0NTU2NDUyIEM5Ljc2ODE0NTM1LDQuMTQzMTQ1MzUgOS40MTEyOTAxNCwzLjk5MTkzNTQ4IDksMy45OTE5MzU0OCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iTXlJbmZvLShkZXNrdG9wKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjItMDdlLVJlY2VpdmUtZnVuZC1zdGF0ZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04ODMuMDAwMDAwLCAtNDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0icmVjZWl2ZS1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTAuMDAwMDAwLCAzOTcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaGVhZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDMwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJJY29ucy8xLS0tVXRpbGl0eS9JbmZvLUNpcmNsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAzLjAwMDAwMCwgNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbiIgZmlsbC1ydWxlPSJub256ZXJvIj48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSItSWNvbi1Db2xvdXIiIGZpbGw9IiMyOTc5ZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTIpIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
var useStyles = makeStyles(function (theme) {
  return {
    checkboxComponent: {
      '& .MuiFormGroup-root': {
        marginTop: '10px',
        '& .MuiIconButton-colorSecondary': {
          '&:hover': {
            backgroundColor: 'rgba(238, 238, 238, 0.5)'
          }
        },
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
          color: theme.palette.$battleshipGrey
        },
        '& .MuiTypography-root': {
          corlor: theme.palette.$greyishBrown,
          fontSize: theme.typography.$fzBody
        },
        '& .MuiTypography-body1': {
          fontSize: theme.typography.$fzH4
        }
      }
    },
    rowCheckboxWrapper: {
      '& .MuiSvgIcon-root': {
        display: 'none'
      },
      '& .MuiSvgIcon-root.MuiSelect-icon': {
        display: 'block'
      },
      '& .MuiFormControlLabel-root': {
        marginLeft: '0',
        marginBottom: '10px',
        alignItems: 'flex-start'
      },
      '& .MuiTouchRipple-root': {
        width: '20px',
        height: '20px',
        borderRadius: '5px',
        border: 'solid 1px #667c88'
      },
      '& .MuiIconButton-colorSecondary:hover': {
        background: 'transparent'
      },
      '& .MuiCheckbox-colorSecondary.Mui-checked:hover': {
        background: 'transparent'
      },
      '& .MuiCheckbox-colorSecondary.Mui-checked': {
        color: 'transparent'
      },
      '& .MuiButtonBase-root': {
        marginRight: '15px',
        padding: '0',
        width: '20px',
        height: '20px',
        marginTop: '4px'
      },
      '& .Mui-checked': {
        '& .MuiTouchRipple-root': {
          backgroundColor: '#667c88',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '2px',
            left: '-5px',
            transform: 'rotate(45deg)',
            display: 'inline-block',
            height: '10px',
            width: '4px',
            marginLeft: '60%',
            borderBottom: '3px solid #ffffff',
            borderRight: '3px solid #ffffff'
          }
        }
      }
    },
    iconInfo: {
      verticalAlign: 'middle',
      color: theme.palette.$greyishBrown,
      cursor: 'pointer',
      width: '18px',
      height: '18px',
      marginLeft: '5px',
      marginTop: '-4px',
      '@media (max-width: 768px)': {
        width: '16px',
        height: '16px'
      }
    },
    arrow: {
      verticalAlign: 'sub',
      display: 'inline-block'
    },
    labelCheckbox: {
      fontSize: '18px',
      color: theme.palette.$greyishBrown
    },
    errorMessage: {
      color: theme.palette.$lipstick,
      fontSize: theme.typography.$fzH6
    },
    label: {
      fontSize: theme.typography.$fzH4,
      '@media (max-width: 768px)': {
        fontSize: theme.typography.$fzH5
      },
      '& span': {
        '&:hover': {
          '& img': {
            '&:nth-child(1)': {
              display: 'none'
            },
            '&:nth-child(2)': {
              display: 'inline-block'
            }
          }
        }
      },
      '& img': {
        maxWidth: '18px',
        '@media (max-width: 768px)': {
          maxWidth: '16px'
        },
        '&:nth-child(1)': {
          display: 'inline-block'
        },
        '&:nth-child(2)': {
          display: 'none'
        }
      }
    }
  };
});

var RowCheckbox = function RowCheckbox(_ref) {
  var content = _ref.content,
      label = _ref.label,
      getValue = _ref.getValue,
      hasIcon = _ref.hasIcon,
      handleDialog = _ref.handleDialog,
      keyValue = _ref.keyValue,
      error = _ref.error,
      checked = _ref.checked,
      handleCheckBox = _ref.handleCheckBox;
  var classes = useStyles();

  var handleDialogPrevent = function handleDialogPrevent(e) {
    handleDialog();
    e.preventDefault();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.rowCheckboxWrapper
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    onChange: function onChange() {
      getValue(keyValue);
      handleCheckBox();
    },
    control: /*#__PURE__*/React.createElement(Checkbox, {
      name: "checkbox",
      checked: checked
    }),
    label: /*#__PURE__*/React.createElement("span", {
      className: classes.label
    }, label, hasIcon && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("img", {
      src: iconInfo,
      className: classes.iconInfo,
      alt: "info",
      onClick: function onClick(e) {
        return handleDialogPrevent(e);
      },
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("img", {
      src: iconInfoBlue,
      className: classes.iconInfo,
      alt: "info",
      onClick: function onClick(e) {
        return handleDialogPrevent(e);
      },
      "aria-hidden": "true"
    })))
  }), content);
};

RowCheckbox.defaultProps = {
  label: '',
  keyValue: '',
  getValue: function getValue(_) {
    return _;
  },
  error: '',
  checked: false,
  hasIcon: false,
  handleDialog: function handleDialog(_) {
    return _;
  },
  handleCheckBox: function handleCheckBox(_) {
    return _;
  }
};
RowCheckbox.propTypes = {
  label: PropTypes.string,
  getValue: PropTypes.func,
  checked: PropTypes.bool,
  error: PropTypes.string,
  hasIcon: PropTypes.bool,
  handleDialog: PropTypes.func,
  content: PropTypes.node.isRequired,
  keyValue: PropTypes.string,
  handleCheckBox: PropTypes.func
};
export default RowCheckbox;