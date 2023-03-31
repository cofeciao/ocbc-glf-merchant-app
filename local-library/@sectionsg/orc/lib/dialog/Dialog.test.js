"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Dialog = _interopRequireDefault(require("./Dialog"));

/* eslint-disable no-undef */
describe('Dialog', function () {
  var renderComponent = function renderComponent() {
    return (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
      isOpen: true,
      onRequestClose: function onRequestClose() {
        return console.log('aaa');
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, "Test")));
  };

  it('renders component and its children', function () {
    var _renderComponent = renderComponent(),
        getByText = _renderComponent.getByText;

    var dialog = document.getElementById('common-dialog'); // text

    expect(getByText('Test')).toBeTruthy();
    expect(dialog).toBeTruthy();
  });
});