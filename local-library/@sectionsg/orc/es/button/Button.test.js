/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
describe('Button', function () {
  var renderComponent = function renderComponent() {
    return render( /*#__PURE__*/React.createElement(Button, {
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