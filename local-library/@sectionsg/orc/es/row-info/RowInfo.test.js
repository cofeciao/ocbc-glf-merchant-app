/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import RowInfo from './RowInfo';
describe('Row', function () {
  var renderComponent = function renderComponent() {
    return render( /*#__PURE__*/React.createElement(RowInfo, {
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