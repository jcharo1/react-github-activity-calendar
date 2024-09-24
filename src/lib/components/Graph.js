// import React from "react";
// import {
//   getColor,
//   months,
//   DayName,
//   requestOptions,
//   getAllContributionsByYear,
// } from "./functions.js";
// import { useEffect, useState } from "react";
// import "./style.css";

// const Graph = (props) => {
//   const [apicall, setApiCall] = useState({});
//   const [loading, setloading] = useState(false);
//   let formatData;
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const rest = await getAllContributionsByYear(
//           props.userName,
//           props.githubApiKey
//         );
//         // const rest = await getUserContributionsFromStart(
//         //   props.userName,
//         //   props.githubApiKey
//         // );
//         console.log("🚀 ~ getData ~ rest:", rest);
//         fetch(
//           "https://api.github.com/graphql",
//           requestOptions(props.userName, props.githubApiKey)
//         )
//           .then((response) => response.json())
//           .then((result) => {
//             console.log(result);

//             setApiCall(result.data);
//             setloading(true);
//           })
//           .catch((error) => console.log("error", error));
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     if (props.githubApiKey && props.userName) {
//       getData();
//     }
//   }, [props.githubApiKey, props.userName]);

//   if (loading) {
//     formatData = apicall?.user.contributionsCollection.contributionCalendar;
//   }
//   let count = 0;
//   let styleOptionsDay;
//   const calenderWeeks = formatData?.weeks.map((week) => {
//     let displayMonth;
//     count += 1;
//     if (count <= 5) {
//       styleOptionsDay = {
//         backgroundColor: `${props.color ? props.color : ``}`,
//         color: `${props.backgroundColor ? props.backgroundColor : ``}`,
//         clipPath: `polygon(0% 0%, 100% 0%, 100% 75%, 5% 77%, 0 100%, 0 78%)`,
//         transform: "translate(0%, 0%) scaleY(1)",
//       };
//     } else if (count <= 48) {
//       styleOptionsDay = {
//         backgroundColor: `${props.color ? props.color : ``}`,
//         color: `${props.backgroundColor ? props.backgroundColor : ``}`,
//       };
//     } else {
//       styleOptionsDay = {
//         backgroundColor: `${props.color ? props.color : ``}`,
//         color: `${props.backgroundColor ? props.backgroundColor : ``}`,
//         clipPath: `polygon(0% 0%, 100% 0%, 100% 75%, 100% 74%, 100% 100%, 94% 77%, 0 76%)`,
//         transform: "translate(-100%, 0%) scaleY(1)",
//       };
//     }

//     const weekDays = week.contributionDays.map((day) => {
//       const dayCount = day.contributionCount;
//       const dayDate = new Date(day.date);

//       const formattedYear = dayDate.getFullYear();
//       const formattedDay = dayDate.getDate();
//       const formattedDayName = dayDate.getDay();
//       let month = dayDate.getMonth();

//       if (formattedDay === 1) {
//         displayMonth = months[month];
//       }
//       let bgOutline;
//       let bgColorClass = getColor(dayCount);
//       if (dayCount === 0) {
//         bgOutline = "react-github-activity-calendar-remove-outline";
//       }
//       return (
//         <div
//           className={`react-github-activity-calendar-calender-day ${bgColorClass} ${bgOutline}   `}
//         >
//           <div
//             className={`react-github-activity-calendar-calender-day__text-container `}
//             style={styleOptionsDay}
//           >
//             <div className="react-github-activity-calendar-calender-day__text">
//               {dayCount}&#160;contributions on {DayName[formattedDayName]}
//               ,&#160;
//               {months[month]} {formattedDay}, {formattedYear}
//             </div>
//           </div>
//         </div>
//       );
//     });
//     return (
//       <>
//         <div className="react-github-activity-calendar-calender-week__month">
//           {displayMonth}
//         </div>

//         <div className="react-github-activity-calendar-calender-week">
//           {weekDays}
//         </div>
//       </>
//     );
//   });

//   return (
//     <div
//       className="react-github-activity-calendar-container"
//       style={{
//         backgroundColor: `${
//           props.backgroundColor ? props.backgroundColor : ``
//         }`,
//         color: `${props.color ? props.color : ``}`,
//       }}
//     >
//       <a
//         className="react-github-activity-calendar-github-mark"
//         href={`https://github.com/${props.userName}`}
//       >
//         <svg
//           viewBox="0 0 100 100"
//           width="12px"
//           height="12px"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
//         </svg>
//       </a>
//       <div className="react-github-activity-calendar-calender-day-label">
//         <div className="react-github-activity-calendar-calender-day-label__name">
//           Mon
//         </div>
//         <div className="react-github-activity-calendar-calender-day-label__name">
//           Wed
//         </div>

//         <div className="react-github-activity-calendar-calender-day-label__name">
//           Fri
//         </div>
//       </div>

//       {calenderWeeks}
//       <div className="react-github-activity-calendar-bottom-row">
//         <a
//           className="react-github-activity-calendar-bottom-row__link"
//           href={`https://github.com/${props.userName}`}
//         >
//           <span>
//             {formatData?.totalContributions} contributions in the last
//             year&#160;
//           </span>
//         </a>
//         <div className="react-github-activity-calendar-less-more-container">
//           <span> Less </span>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day react-github-activity-calendar-example-size `}
//           ></div>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L1 react-github-activity-calendar-example-size `}
//           ></div>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L2 react-github-activity-calendar-example-size `}
//           ></div>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L3 react-github-activity-calendar-example-size `}
//           ></div>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L4 react-github-activity-calendar-example-size `}
//           ></div>
//           <span> More </span>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Graph;
// components/Graph.js
import React, { useState, useEffect } from "react";
import "./style.css"; // Import the styles
import {
  getAllContributionsByYear,
  requestOptions,
  getColor,
  DayName,
  months,
  createInitialWeeks,
} from "./functions"; // Make sure to import necessary utilities
// components/Graph.js

const Graph = (props) => {
  // Initialize weeks with initial data
  const [weeks, setWeeks] = useState(createInitialWeeks());

  // State to track loading and total contributions
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch contributions by year (ensure this function returns the needed data)
        const rest = await getAllContributionsByYear(
          props.userName,
          props.githubApiKey
        );
        console.log("🚀 ~ getData ~ rest:", rest);

        // Fetch data from GitHub GraphQL API
        const response = await fetch(
          "https://api.github.com/graphql",
          requestOptions(props.userName, props.githubApiKey)
        );
        const result = await response.json();
        console.log("🚀 ~ getData ~ result:", result);

        // Extract weeks and total contributions from the response
        const contributionCalendar =
          result.data.user.contributionsCollection.contributionCalendar;
        setWeeks(contributionCalendar.weeks);
        setTotalContributions(contributionCalendar.totalContributions);
        setLoading(false); // Data has been loaded
      } catch (e) {
        console.error("Error fetching data:", e);
        setLoading(false); // Even if there's an error, stop loading
        // Optionally, you can handle the error state separately
      }
    };

    if (props.githubApiKey && props.userName) {
      getData();
    }
  }, [props.githubApiKey, props.userName]);

  // Define style options based on week index
  const getStyleOptions = (count) => {
    if (count <= 5) {
      return {
        backgroundColor: props.color || "",
        color: props.backgroundColor || "",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 5% 77%, 0 100%, 0 78%)",
        transform: "translate(0%, 0%) scaleY(1)",
      };
    } else if (count <= 48) {
      return {
        backgroundColor: props.color || "",
        color: props.backgroundColor || "",
      };
    } else {
      return {
        backgroundColor: props.color || "",
        color: props.backgroundColor || "",
        clipPath:
          "polygon(0% 0%, 100% 0%, 100% 75%, 100% 74%, 100% 100%, 94% 77%, 0 76%)",
        transform: "translate(-100%, 0%) scaleY(1)",
      };
    }
  };

  let count = 0;
  const [weekIndexHovered, setWeekIndexHovered] = useState(null);
  const calendarWeeks = weeks.map((week, weekIndex) => {
    let displayMonth;
    count += 1;
    const styleOptionsDay = getStyleOptions(count);

    const weekDays = week.contributionDays.map((day, dayIndex) => {
      const dayCount = day.contributionCount;
      const dayDate = new Date(day.date);

      const formattedYear = dayDate.getFullYear();
      const formattedDay = dayDate.getDate();
      const formattedDayName = dayDate.getDay();
      let month = dayDate.getMonth();

      if (formattedDay === 1) {
        displayMonth = months[month];
      }

      const bgOutline =
        dayCount === 0 ? "react-github-activity-calendar-remove-outline" : "";
      const bgColorClass = getColor(dayCount);

      return (
        <div
          key={`day-${weekIndex}-${dayIndex}`}
          className={`react-github-activity-calendar-calender-day ${
            loading && "react-github-activity-calendar-calender-day-loading"
          } ${bgColorClass} ${bgOutline} ${
            Math.abs(weekIndex - weekIndexHovered) <= 2 &&
            weekIndexHovered !== null
              ? weekIndex === weekIndexHovered
                ? ""
                : "react-github-activity-calendar-bg-day-scale-down"
              : ""
          }`}
          style={{
            transitionDuration: "0.3s",
            transition: "transform 0.3s, box-shadow 0.3s",
            transitionDelay: !loading ? `${0.1}s` : `${(dayIndex % 7) * 0.1}s`,
          }}
        >
          <div
            className="react-github-activity-calendar-calender-day__text-container"
            style={styleOptionsDay}
          >
            <div className="react-github-activity-calendar-calender-day__text">
              {dayCount}&nbsp;contributions on {DayName[formattedDayName]}
              ,&nbsp;
              {months[month]} {formattedDay}, {formattedYear}
            </div>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment key={`week-${weekIndex}`}>
        {/* {displayMonth && ( */}
        <div className="react-github-activity-calendar-calender-week__month ">
          {displayMonth}
        </div>
        {/* /* )} */}
        <div
          // style={{
          //   backgroundColor:
          //     Math.abs(weekIndex - weekIndexHovered) <= 3 ? "red" : "yellow",
          // }}
          onMouseEnter={() => {
            setWeekIndexHovered(weekIndex);
          }}
          onMouseLeave={() => {
            setWeekIndexHovered(null);
          }}
          className="react-github-activity-calendar-calender-week"
        >
          {weekDays}
        </div>
      </React.Fragment>
    );
  });
  useEffect(() => {
    console.log("weekIndexHovered", weekIndexHovered);
  }, [weekIndexHovered]);
  return (
    <div
      className="react-github-activity-calendar-container"
      style={{
        backgroundColor: props.backgroundColor || "",
        color: props.color || "",
      }}
    >
      <a
        className="react-github-activity-calendar-github-mark"
        href={`https://github.com/${props.userName}`}
      >
        {/* GitHub SVG Icon */}
        <svg
          viewBox="0 0 100 100"
          width="12px"
          height="12px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
        </svg>
      </a>

      <div className="react-github-activity-calendar-calender-day-label">
        <div className="react-github-activity-calendar-calender-day-label__name">
          Mon
        </div>
        <div className="react-github-activity-calendar-calender-day-label__name">
          Wed
        </div>
        <div className="react-github-activity-calendar-calender-day-label__name">
          Fri
        </div>
      </div>

      {calendarWeeks}

      <div className="react-github-activity-calendar-bottom-row">
        <a
          className="react-github-activity-calendar-bottom-row__link"
          href={`https://github.com/${props.userName}`}
        >
          <span>{totalContributions} contributions in the last year&nbsp;</span>
        </a>
        <div className="react-github-activity-calendar-less-more-container">
          <span> Less </span>
          <div className="react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day react-github-activity-calendar-example-size"></div>
          <div className="react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L1 react-github-activity-calendar-example-size"></div>
          <div className="react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L2 react-github-activity-calendar-example-size"></div>
          <div className="react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L3 react-github-activity-calendar-example-size"></div>
          <div className="react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L4 react-github-activity-calendar-example-size"></div>
          <span> More </span>
        </div>
      </div>
    </div>
  );
};

export default Graph;

// const Graph = (props) => {
//   // Initialize the state with initial weeks
//   const [apicall, setApiCall] = useState({
//     user: {
//       contributionsCollection: {
//         contributionCalendar: {
//           weeks: createInitialWeeks(),
//         },
//       },
//     },
//   });
//   const [loading, setLoading] = useState(true); // Start with loading=true

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const rest = await getAllContributionsByYear(
//           props.userName,
//           props.githubApiKey
//         );
//         console.log("🚀 ~ getData ~ rest:", rest);

//         const response = await fetch(
//           "https://api.github.com/graphql",
//           requestOptions(props.userName, props.githubApiKey)
//         );
//         const result = await response.json();
//         console.log(result);

//         setApiCall(result.data);
//         setLoading(false); // Data has been loaded
//       } catch (e) {
//         console.error("Error fetching data:", e);
//         setLoading(false); // Even if there's an error, stop loading
//       }
//     };

//     if (props.githubApiKey && props.userName) {
//       getData();
//     }
//   }, [props.githubApiKey, props.userName]);

//   // Determine which data to use: real data or initial weeks
//   const formatData = loading
//     ? apicall.user.contributionsCollection.contributionCalendar
//     : {
//         weeks: createInitialWeeks(),
//       };

//   let count = 0;
//   let styleOptionsDay;

//   const calendarWeeks = formatData?.weeks.map((week, weekIndex) => {
//     let displayMonth;
//     count += 1;
//     if (count <= 5) {
//       styleOptionsDay = {
//         backgroundColor: props.color || "",
//         color: props.backgroundColor || "",
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 5% 77%, 0 100%, 0 78%)",
//         transform: "translate(0%, 0%) scaleY(1)",
//       };
//     } else if (count <= 48) {
//       styleOptionsDay = {
//         backgroundColor: props.color || "",
//         color: props.backgroundColor || "",
//       };
//     } else {
//       styleOptionsDay = {
//         backgroundColor: props.color || "",
//         color: props.backgroundColor || "",
//         clipPath:
//           "polygon(0% 0%, 100% 0%, 100% 75%, 100% 74%, 100% 100%, 94% 77%, 0 76%)",
//         transform: "translate(-100%, 0%) scaleY(1)",
//       };
//     }

//     const weekDays = week.contributionDays.map((day, dayIndex) => {
//       const dayCount = day.contributionCount;
//       const dayDate = new Date(day.date);

//       const formattedYear = dayDate.getFullYear();
//       const formattedDay = dayDate.getDate();
//       const formattedDayName = dayDate.getDay();
//       let month = dayDate.getMonth();

//       if (formattedDay === 1) {
//         displayMonth = months[month];
//       }
//       let bgOutline =
//         dayCount === 0 ? "react-github-activity-calendar-remove-outline" : "";
//       let bgColorClass = getColor(dayCount);

//       return (
//         <div
//           key={`day-${weekIndex}-${dayIndex}`}
//           className={`react-github-activity-calendar-calender-day ${bgColorClass} ${bgOutline}`}
//         >
//           <div
//             className="react-github-activity-calendar-calender-day__text-container"
//             style={styleOptionsDay}
//           >
//             <div className="react-github-activity-calendar-calender-day__text">
//               {dayCount}&nbsp;contributions on {DayName[formattedDayName]}
//               ,&nbsp;
//               {months[month]} {formattedDay}, {formattedYear}
//             </div>
//           </div>
//         </div>
//       );
//     });

//     return (
//       <React.Fragment key={`week-${weekIndex}`}>
//         <div className="react-github-activity-calendar-calender-week__month">
//           {displayMonth}
//         </div>

//         <div className="react-github-activity-calendar-calender-week">
//           {weekDays}
//         </div>
//       </React.Fragment>
//     );
//   });

//   return (
//     <div
//       className="react-github-activity-calendar-container"
//       style={{
//         backgroundColor: props.backgroundColor || "",
//         color: props.color || "",
//       }}
//     >
//       <a
//         className="react-github-activity-calendar-github-mark"
//         href={`https://github.com/${props.userName}`}
//       >
//         {/* GitHub SVG Icon */}
//         <svg
//           viewBox="0 0 100 100"
//           width="12px"
//           height="12px"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
//         </svg>
//       </a>
//       <div className="react-github-activity-calendar-calender-day-label">
//         <div className="react-github-activity-calendar-calender-day-label__name">
//           Mon
//         </div>
//         <div className="react-github-activity-calendar-calender-day-label__name">
//           Wed
//         </div>

//         <div className="react-github-activity-calendar-calender-day-label__name">
//           Fri
//         </div>
//       </div>

//       {calendarWeeks}

//       <div className="react-github-activity-calendar-bottom-row">
//         <a
//           className="react-github-activity-calendar-bottom-row__link"
//           href={`https://github.com/${props.userName}`}
//         >
//           <span>
//             {formatData?.totalContributions || "0"} contributions in the last
//             year&nbsp;
//           </span>
//         </a>
//         <div className="react-github-activity-calendar-less-more-container">
//           <span> Less </span>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day react-github-activity-calendar-example-size `}
//           ></div>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L1 react-github-activity-calendar-example-size `}
//           ></div>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L2 react-github-activity-calendar-example-size `}
//           ></div>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L3 react-github-activity-calendar-example-size `}
//           ></div>
//           <div
//             className={`react-github-activity-calendar-calender-day react-github-activity-calendar-bg-day--L4 react-github-activity-calendar-example-size `}
//           ></div>
//           <span> More </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Graph;
