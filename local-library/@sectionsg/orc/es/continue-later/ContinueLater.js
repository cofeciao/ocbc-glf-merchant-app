import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../index';

var ContinueLater = function ContinueLater(_ref) {
  var handleContinueLater = _ref.handleContinueLater,
      translate = _ref.translate;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: "/",
    classHover: "linkUnderline",
    target: "",
    fontSizeMB: 14,
    isOnClick: true,
    onClick: handleContinueLater
  }, translate('continue-later')));
};

ContinueLater.propTypes = {
  handleContinueLater: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
};
export default ContinueLater;