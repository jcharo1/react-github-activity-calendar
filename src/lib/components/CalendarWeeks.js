import { useEffect, useState, useMemo } from "react";
import { getColor, months, DayName, requestOptions } from "./functions.js";

// const CalendarWeeks = ({ formatData, props }) => {
//   const [count, setCount] = useState(1);
//   const styleOptionsDay = useMemo(
//     () => getStyleOptionsDay(count, props),
//     [count, props]
//   );
//   //   useEffect(() => {
//   //     console.log(formatData);
//   //   }, [formatData]);
//   useEffect(() => {
//     // Reset count when data changes
//     setCount(1);
//   }, [formatData]);

//   if (!formatData?.weeks) {
//     return null;
//   }

//   return (
//     <>
//       {formatData.weeks.map((week) => {
//         let displayMonth;

//         const weekDays = week.contributionDays.map((day) => {
//           const { contributionCount, date } = day;
//           const dayDate = new Date(date);
//           const formattedYear = dayDate.getFullYear();
//           const formattedDay = dayDate.getDate();
//           const formattedDayName = dayDate.getDay();
//           const month = dayDate.getMonth();

//           if (formattedDay === 1) {
//             displayMonth = months[month];
//           }

//           const bgColorClass = getColor(contributionCount);
//           const bgOutline =
//             contributionCount === 0
//               ? "react-github-activity-calendar-remove-outline"
//               : "";

//           return (
//             <div
//               className={`react-github-activity-calendar-calender-day ${bgColorClass} ${bgOutline}`}
//             >
//               <div
//                 className={`react-github-activity-calendar-calender-day__text-container`}
//                 style={styleOptionsDay}
//               >
//                 <div className="react-github-activity-calendar-calender-day__text">
//                   {contributionCount} contributions on{" "}
//                   {DayName[formattedDayName]}, {months[month]} {formattedDay},{" "}
//                   {formattedYear}
//                 </div>
//               </div>
//             </div>
//           );
//         });

//         setCount((prevCount) => prevCount + 1);

//         return (
//           <>
//             <div className="react-github-activity-calendar-calender-week__month">
//               {displayMonth}
//             </div>
//             <div className="react-github-activity-calendar-calender-week">
//               {weekDays}
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default CalendarWeeks;

const getStyleOptionsDay = (count, props) => {
  // Logic for getting styleOptionsDay based on count and props
  if (count <= 5) {
    return {
      backgroundColor: `${props.color ? props.color : ``}`,
      color: `${props.backgroundColor ? props.backgroundColor : ``}`,
      clipPath: `polygon(0% 0%, 100% 0%, 100% 75%, 5% 77%, 0 100%, 0 78%)`,
      transform: "translate(0%, 0%) scaleY(1)",
    };
  } else if (count <= 48) {
    return {
      backgroundColor: `${props.color ? props.color : ``}`,
      color: `${props.backgroundColor ? props.backgroundColor : ``}`,
    };
  } else {
    return {
      backgroundColor: `${props.color ? props.color : ``}`,
      color: `${props.backgroundColor ? props.backgroundColor : ``}`,
      clipPath: `polygon(0% 0%, 100% 0%, 100% 75%, 100% 74%, 100% 100%, 94% 77%, 0 76%)`,
      transform: "translate(-100%, 0%) scaleY(1)",
    };
  }
};

const CalendarWeeks = ({ formatData, props }) => {
  let count = 0; // Initialize count as a regular variable

  const styleOptionsDay = useMemo(
    () => getStyleOptionsDay(count, props),
    [count, props]
  );

  if (!formatData?.weeks) {
    return null;
  }

  return (
    <>
      {formatData.weeks.map((week) => {
        let displayMonth;
        count += 1; // Increment count

        const weekDays = week.contributionDays.map((day) => {
          const { contributionCount, date } = day;
          const dayDate = new Date(date);
          const formattedYear = dayDate.getFullYear();
          const formattedDay = dayDate.getDate();
          const formattedDayName = dayDate.getDay();
          const month = dayDate.getMonth();

          if (formattedDay === 1) {
            displayMonth = months[month];
          }

          const bgColorClass = getColor(contributionCount);
          const bgOutline =
            contributionCount === 0
              ? "react-github-activity-calendar-remove-outline"
              : "";

          return (
            <div
              className={`react-github-activity-calendar-calender-day ${bgColorClass} ${bgOutline}`}
            >
              <div
                className={`react-github-activity-calendar-calender-day__text-container`}
                style={styleOptionsDay}
              >
                <div className="react-github-activity-calendar-calender-day__text">
                  {contributionCount} contributions on{" "}
                  {DayName[formattedDayName]}, {months[month]} {formattedDay},{" "}
                  {formattedYear}
                </div>
              </div>
            </div>
          );
        });

        return (
          <>
            <div className="react-github-activity-calendar-calender-week__month">
              {displayMonth}
            </div>
            <div className="react-github-activity-calendar-calender-week">
              {weekDays}
            </div>
          </>
        );
      })}
    </>
  );
};

export default CalendarWeeks;
