"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Day = _interopRequireDefault(require("./Day"));
var _functions = require("./functions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Week.js

const Week = _ref => {
  let {
    week,
    weekIndex,
    props,
    loading
  } = _ref;
  // Compute displayMonth directly without using state
  const displayMonth = week.contributionDays.find(day => new Date(day.date).getDate() === 1) ? _functions.months[new Date(week.contributionDays.find(day => new Date(day.date).getDate() === 1).date).getMonth()] : "";
  const styleOptionsDay = (0, _functions.getStyleOptions)(weekIndex, props);
  const weekDays = week.contributionDays.map(day => /*#__PURE__*/_react.default.createElement(_Day.default, {
    key: day.date,
    day: day,
    styleOptions: styleOptionsDay,
    loading: loading
  }));
  return /*#__PURE__*/_react.default.createElement("div", {
    key: weekIndex
  }, displayMonth && /*#__PURE__*/_react.default.createElement("div", {
    className: "react-github-activity-calendar-calendar-week__month"
  }, displayMonth), /*#__PURE__*/_react.default.createElement("div", {
    className: "react-github-activity-calendar-calendar-week"
  }, weekDays));
};
Week.propTypes = {
  week: _propTypes.default.object.isRequired,
  weekIndex: _propTypes.default.number.isRequired,
  props: _propTypes.default.object.isRequired,
  loading: _propTypes.default.bool.isRequired
};
var _default = /*#__PURE__*/_react.default.memo(Week);
exports.default = _default;