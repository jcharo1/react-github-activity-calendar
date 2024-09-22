// Legend.js
import React from "react";

const Legend = () => (
  <div className="react-github-activity-calendar-less-more-container">
    <span>Less</span>
    <div className="react-github-activity-calendar-legend">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`react-github-activity-calendar-calendar-day react-github-activity-calendar-bg-day--L${index} react-github-activity-calendar-example-size`}
        ></div>
      ))}
    </div>
    <span>More</span>
  </div>
);

export default React.memo(Legend);
