import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
var useStyles = makeStyles(function (theme) {
  return {
    root: {}
  };
});

var PaginationCard = function PaginationCard(props) {
  var classes = useStyles(props);
  var setArrFilter = props.setArrFilter,
      dataFiltered = props.dataFiltered,
      defaultNumber = props.defaultNumber;

  var paginationNumber = function paginationNumber(value) {
    if (value && value.length > 0) {
      return Math.ceil(value.length / 3);
    }
  };

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      pageNumber = _useState2[0],
      setPageNumber = _useState2[1];

  var handleFilter = function handleFilter(value, offset) {
    if (value && value.length > 0) {
      return value.slice(offset.start, offset.end);
    }
  };

  useEffect(function () {
    if (dataFiltered) {
      var firstFilter = handleFilter(dataFiltered, {
        start: 0,
        end: defaultNumber
      });
      setArrFilter(firstFilter);
    }
  }, [dataFiltered]);

  var handleChangePage = function handleChangePage(event, value) {
    setPageNumber(value);
    setArrFilter(handleFilter(dataFiltered, {
      start: defaultNumber * value - defaultNumber,
      end: defaultNumber * value
    }));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.Pagination
  }, /*#__PURE__*/React.createElement(Pagination, {
    count: paginationNumber(dataFiltered),
    page: pageNumber,
    onChange: handleChangePage
  }));
};

export default PaginationCard;