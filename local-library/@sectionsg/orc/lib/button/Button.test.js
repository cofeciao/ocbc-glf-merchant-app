"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Button = _interopRequireDefault(require("./Button"));

/* eslint-disable no-undef */
describe('Button', function () {
  var renderComponent = function renderComponent() {
    return (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      classNameCustom: "",
      onClick: function onClick() {
        return console.log('has list');
      },
      backgroundClass: "bg-lipstick-orangey"
    }, "Test"));
  };

  it('renders component and its children', function () {
    var _renderComponent = renderComponent(),
        getByText = _renderComponent.getByText;

    var button = document.getElementsByClassName('custom-button'); // text

    expect(getByText('Test')).toBeTruthy();
    expect(button).toBeTruthy();
  });
});