"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _Pagination = _interopRequireDefault(require("@material-ui/lab/Pagination"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
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

  var _useState = (0, _react.useState)(1),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      pageNumber = _useState2[0],
      setPageNumber = _useState2[1];

  var handleFilter = function handleFilter(value, offset) {
    if (value && value.length > 0) {
      return value.slice(offset.start, offset.end);
    }
  };

  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.Pagination
  }, /*#__PURE__*/_react["default"].createElement(_Pagination["default"], {
    count: paginationNumber(dataFiltered),
    page: pageNumber,
    onChange: handleChangePage
  }));
};

var _default = PaginationCard;
exports["default"] = _default;