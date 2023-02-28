import { getColor, months, isFirstOfMonth, DayName } from "./functions.js";
import { useEffect, useState } from "react";
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
  const [apicall, setApiCall] = useState({});
  const [loading, setloading] = useState(false);
  let formatData;
  let data;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/graphql",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            // console.log(result);
            data = result.data;
            setApiCall(data);
            setloading(true);
          })
          .catch((error) => console.log("error", error));

        // const response = await result;
        // let data = response;
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  if (loading) {
    formatData = apicall?.user.contributionsCollection.contributionCalendar;
  }
  //   console.log(apicall);

  //   const formatData =
  //     apicall?.user?.contributionsCollection.contributionCalendar;

  const calenderWeeks = formatData?.weeks.map((week) => {
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
    // <div className="wrapper">
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
    // </div>
  );
};
export default Graph;
