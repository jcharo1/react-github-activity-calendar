export function getColor(count) {
  if (count <= 0) {
    return "bg-day";
  } else if (count > 0 && count < 6) {
    return "bg-day--L1";
  } else if (count < 9) {
    return "bg-day--L2";
  } else if (count < 14) {
    return "bg-day--L3";
  } else {
    return "bg-day--L4";
  }
}

export const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const DayName = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",
};

export function requestOptions(githubUserName, token) {
  const graphql = JSON.stringify({
    query:
      "query ($userName: String!) {\n    user(login: $userName) {\n      contributionsCollection {\n        contributionCalendar {\n          totalContributions\n          weeks {\n            contributionDays {\n              contributionCount\n              date\n            }\n          }\n        }\n      }\n    }\n  }",
    variables: { userName: githubUserName },
  });
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  return {
    method: "POST",
    headers: myHeaders,
    body: graphql,
    redirect: "follow",
  };
}
