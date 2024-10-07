// Week.js
import React from "react";
import PropTypes from "prop-types";
import Day from "./Day";
import { months, getStyleOptions } from "./functions";

const Week = ({ week, weekIndex, props, loading }) => {
  // Compute displayMonth directly without using state
  const displayMonth = week.contributionDays.find(
    (day) => new Date(day.date).getDate() === 1
  )
    ? months[
        new Date(
          week.contributionDays.find(
            (day) => new Date(day.date).getDate() === 1
          ).date
        ).getMonth()
      ]
    : "";

  const styleOptionsDay = getStyleOptions(weekIndex, props);

  const weekDays = week.contributionDays.map((day) => (
    <Day
      key={day.date}
      day={day}
      styleOptions={styleOptionsDay}
      loading={loading}
    />
  ));

  return (
    <div key={weekIndex}>
      {displayMonth && (
        <div className="react-github-activity-calendar-calendar-week__month">
          {displayMonth}
        </div>
      )}
      <div className="react-github-activity-calendar-calendar-week">
        {weekDays}
      </div>
    </div>
  );
};

Week.propTypes = {
  week: PropTypes.object.isRequired,
  weekIndex: PropTypes.number.isRequired,
  props: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default React.memo(Week);
