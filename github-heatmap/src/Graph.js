import { getColor, months, isFirstOfMonth, DayName } from "./functions.js";
import { useEffect } from "react";
import "./style.css";

// const githubApiToken = "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";
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer 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"
);
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query:
    "query ($userName: String!) {\n    user(login: $userName) {\n      contributionsCollection {\n        contributionCalendar {\n          totalContributions\n          weeks {\n            contributionDays {\n              contributionCount\n              date\n            }\n          }\n        }\n      }\n    }\n  }",
  variables: { userName: "jcharo1" },
});
var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: graphql,
  redirect: "follow",
};

const Graph = () => {
  let data;
  useEffect(() => {
    const getData = async () => {
      try {
        const getdata = await fetch(
          "https://api.github.com/graphql",
          requestOptions
        );

        const response = await getdata;
        let data = response;
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const formatData = data?.user.contributionsCollection.contributionCalendar;

  const calenderWeeks = formatData?.weeks?.map((week) => {
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
    <div className="container">
      <div className="github-mark"></div>
      <div className="calender-day-label">
        <div className="calender-day-label__name">Mon</div>
        <div className="calender-day-label__name">Wed</div>

        <div className="calender-day-label__name">Fri</div>
      </div>
      {/* <div className="calender-week__month">test</div> */}
      {calenderWeeks}
      <div className="bottom-row">
        <span>
          {formatData?.totalContributions} contributions in the last year&#160;
        </span>

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
  );
};
export default Graph;
