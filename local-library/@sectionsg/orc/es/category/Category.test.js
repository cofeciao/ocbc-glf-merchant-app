/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Category from './Category';
describe('Category', function () {
  var renderComponent = function renderComponent() {
    return render( /*#__PURE__*/React.createElement(Category, {
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