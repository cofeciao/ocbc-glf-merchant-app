/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Dialog from './Dialog';
describe('Dialog', function () {
  var renderComponent = function renderComponent() {
    return render( /*#__PURE__*/React.createElement(Dialog, {
      isOpen: true,
      onRequestClose: function onRequestClose() {
        return console.log('aaa');
      }
    }, /*#__PURE__*/React.createElement("div", null, "Test")));
  };

  it('renders component and its children', function () {
    var _renderComponent = renderComponent(),
        getByText = _renderComponent.getByText;

    var dialog = document.getElementById('common-dialog'); // text

    expect(getByText('Test')).toBeTruthy();
    expect(dialog).toBeTruthy();
  });
});