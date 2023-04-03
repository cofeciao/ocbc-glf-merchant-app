"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Category = _interopRequireDefault(require("./Category"));

/* eslint-disable no-undef */
describe('Category', function () {
  var renderComponent = function renderComponent() {
    return (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Category["default"], {
      classNameCustom: ""
    }, "Test"));
  };

  it('renders component and its children', function () {
    var _renderComponent = renderComponent(),
        getByText = _renderComponent.getByText;

    var category = document.getElementsByClassName('category-component'); // text

    expect(getByText('Test')).toBeTruthy();
    expect(category).toBeTruthy();
  });
});