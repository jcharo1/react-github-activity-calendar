// Day.js
import React from "react";
import PropTypes from "prop-types";
import { getColor, DayName, months } from "./functions";

const Day = ({ day, styleOptions, loading }) => {
  if (loading) {
    return (
      <div className="react-github-activity-calendar-calendar-day loading">
        <div className="react-github-activity-calendar-calendar-day__placeholder"></div>
      </div>
    );
  }

  const dayCount = day.contributionCount;
  const dayDate = new Date(day.date);
  const formattedYear = dayDate.getFullYear();
  const formattedDay = dayDate.getDate();
  const formattedDayName = dayDate.getDay();
  const month = dayDate.getMonth();

  const bgColorClass = getColor(dayCount);
  const bgOutline =
    dayCount === 0 ? "react-github-activity-calendar-remove-outline" : "";

  return (
    <div
      className={`react-github-activity-calendar-calendar-day ${bgColorClass} ${bgOutline}`}
    >
      <div
        className="react-github-activity-calendar-calendar-day__text-container"
        style={styleOptions}
      >
        <div className="react-github-activity-calendar-calendar-day__text">
          {dayCount}&#160;contributions on {DayName[formattedDayName]},&#160;
          {months[month]} {formattedDay}, {formattedYear}
        </div>
      </div>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.object.isRequired,
  styleOptions: PropTypes.object,
  loading: PropTypes.bool,
};

Day.defaultProps = {
  loading: false,
};

export default React.memo(Day);
