import React from "react";

import { useState } from "react";
import "./Graph.scss";
import { getColor, months, isFirstOfMonth, DayName } from "./functions.js";

export default function Graph(props) {
  //   console.log(props);

  const calenderWeeks = props?.data?.weeks?.map((week) => {
    let displayMonth;

    const weekDays = week.contributionDays.map((day) => {
      const dayCount = day.contributionCount;
      const dayDate = new Date(day.date);

      const formattedYear = dayDate.getFullYear();
      const formattedDay = dayDate.getDate();
      const formattedDayName = dayDate.getDay();
      let month = dayDate.getMonth();

      if (isFirstOfMonth(formattedDay)) {
        displayMonth = months[month];
      }
      let bgOutline;
      let bgColorClass = getColor(dayCount);
      if (dayCount === 0) {
        bgOutline = "remove-outline";
      }
      return (
        <div className={`calender-day ${bgColorClass} ${bgOutline}`}>
          <div class="calender-day__text-container">
            <div class="calender-day__text">
              {dayCount}&#160;contributions on {DayName[formattedDayName]}
              ,&#160;
              {months[month]} {formattedDay}, {formattedYear}
            </div>
          </div>
        </div>
      );
    });
    return (
      <>
        <div className="calender-week__month">{displayMonth}</div>

        <div className="calender-week">{weekDays}</div>
      </>
    );
  });
  return (
    <div className="wrapper">
      <div className="container">
        <div className="calender-day-label">
          <div className="calender-day-label__name">Mon</div>
          <div className="calender-day-label__name">Wed</div>

          <div className="calender-day-label__name">Fri</div>
        </div>
        {/* <div className="calender-week__month">test</div> */}

        {calenderWeeks}
        <div className="bottom-row">
          <span>
            {props?.data?.totalContributions} contributions in the last
            year&#160;
          </span>
          <div className="github-mark"></div>
          <div className="example-container">
            <span> Less </span>
            <div className={`calender-day bg-day example-size `}></div>
            <div className={`calender-day bg-day--L1 example-size `}></div>
            <div className={`calender-day bg-day--L2 example-size `}></div>
            <div className={`calender-day bg-day--L3 example-size `}></div>
            <div className={`calender-day bg-day--L4 example-size `}></div>
            <span> More </span>
          </div>
        </div>
      </div>
    </div>
  );
}
