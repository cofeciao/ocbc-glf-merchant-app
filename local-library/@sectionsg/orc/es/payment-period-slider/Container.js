import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["isMobile"];
import React from 'react';
import PropStyles from 'prop-types';
import SliderDesktop from './Desktop';
import SliderMobile from './Mobile';
export default function PaymentPeriodSlider(_ref) {
  var isMobile = _ref.isMobile,
      props = _objectWithoutProperties(_ref, _excluded);

  return isMobile ? /*#__PURE__*/React.createElement(SliderMobile, props) : /*#__PURE__*/React.createElement(SliderDesktop, props);
}
PaymentPeriodSlider.defaultProps = {
  isMobile: false
};
PaymentPeriodSlider.propStyles = {
  isMobile: PropStyles.bool
};