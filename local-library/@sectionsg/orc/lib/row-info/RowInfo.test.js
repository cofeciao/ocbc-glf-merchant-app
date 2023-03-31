"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _RowInfo = _interopRequireDefault(require("./RowInfo"));

/* eslint-disable no-undef */
describe('Row', function () {
  var renderComponent = function renderComponent() {
    return (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_RowInfo["default"], {
      classNameCustom: "",
      label: "Username",
      content: "Test"
    }));
  };

  it('renders component and its children', function () {
    var link = document.getElementsByClassName('row-info-component'); // text

    expect(link).toBeTruthy();
  });
});