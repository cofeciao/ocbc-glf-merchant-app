import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx'; // IMPORT COMPONENT

import RowInfo from '../row-info';
import CardAnimation from './CardAnimation';
import CardPromo from './CardPromo';
import SelectGroup from '../select-group/SelectGroup';
import { stylesCard } from './styles';
var useStyles = makeStyles(function (theme) {
  return createStyles(_objectSpread({}, stylesCard(theme)));
});

var Card = function Card(props) {
  var dataCard = props.dataCard,
      isCreditCard = props.isCreditCard,
      translate = props.translate,
      formatCurrency = props.formatCurrency;
  var classes = useStyles();

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isPrincipalCardSelected = _useState2[0],
      setPrincipalCardSelected = _useState2[1];

  return /*#__PURE__*/React.createElement("div", {
    className: classes.cardWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.cardTop
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.cardtype
  }, dataCard.cardTitle || 'Updating'), /*#__PURE__*/React.createElement("div", {
    className: classes.cardNames
  }, dataCard.cardName && dataCard.subCard && dataCard.subCard.length > 0 ? /*#__PURE__*/React.createElement(SelectGroup, {
    isCard: true,
    principalCard: "Principal Card",
    supplementaryCard: "Supplementary Card",
    listValues: dataCard.subCard,
    cardName: dataCard.cardName,
    getValue: function getValue(value) {
      if (value.value === dataCard.cardName) {
        setPrincipalCardSelected(true);
      } else {
        setPrincipalCardSelected(false);
      }
    }
  }) : dataCard.cardName), /*#__PURE__*/React.createElement("div", {
    className: classes.cardAnimationWrapper
  }, /*#__PURE__*/React.createElement(CardAnimation, {
    front: dataCard.frontCardImage,
    back: dataCard.backCardImage
  })), /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.rowInfoWrapper, 'mt-40')
  }, isCreditCard && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RowInfo, {
    label: "Credit limit for this card",
    content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: classes.rowInfoContent
    }, "SGD", dataCard.creditLimit && formatCurrency(dataCard.creditLimit, 2)))
  }), isPrincipalCardSelected && /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.rowInfoExtra, 'mt-10 fz14')
  }, translate('includes-supplementary-card-spend'), ' ')))), dataCard.promoInfo && /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.cardPromoWrapper, 'mt-30')
  }, /*#__PURE__*/React.createElement(CardPromo, {
    textPromo: dataCard.promoInfo
  })));
};

Card.defaultProps = {
  dataCard: {},
  isCreditCard: false,
  translate: function translate(_) {
    return _;
  },
  formatCurrency: function formatCurrency(_) {
    return _;
  }
};
Card.propTypes = {
  dataCard: PropTypes.object,
  isCreditCard: PropTypes.bool,
  translate: PropTypes.func,
  formatCurrency: PropTypes.func
};
export default Card;