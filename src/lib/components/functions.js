export function getColor(count) {
  if (count <= 0) {
    return "react-github-activity-calendar-bg-day";
  } else if (count > 0 && count < 6) {
    return "react-github-activity-calendar-bg-day--L1";
  } else if (count < 9) {
    return "react-github-activity-calendar-bg-day--L2";
  } else if (count < 14) {
    return "react-github-activity-calendar-bg-day--L3";
  } else {
    return "react-github-activity-calendar-bg-day--L4";
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
      "query ($userName: String!) {\n" +
      "  user(login: $userName) {\n" +
      "    contributionsCollection {\n" +
      "      startedAt\n" + // The date when contributions start being recorded
      "      totalCommitContributions\n" + // Total commits made by the user
      "      totalPullRequestContributions\n" + // Total pull requests made by the user
      "      totalIssueContributions\n" + // Total issues created by the user
      "      totalPullRequestReviewContributions\n" + // Total pull request reviews made by the user
      "      totalRepositoriesWithContributedCommits\n" + // Repositories where user contributed commits
      "      totalRepositoriesWithContributedPullRequests\n" + // Repositories where user contributed pull requests
      "      totalRepositoriesWithContributedIssues\n" + // Repositories where user contributed issues
      "      totalRepositoriesWithContributedPullRequestReviews\n" + // Repositories where user contributed pull request reviews
      "      totalRepositoryContributions\n" + // Total repositories created by the user
      "      contributionCalendar {\n" + // The calendar view of contributions
      "        totalContributions\n" + // Total number of contributions
      "        weeks {\n" +
      "          contributionDays {\n" +
      "            contributionCount\n" +
      "            date\n" +
      "          }\n" +
      "        }\n" +
      "      }\n" +
      "    }\n" +
      "  }\n" +
      "}",
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
export const getStyleOptions = (weekIndex, props) => {
  if (weekIndex <= 5) {
    return {
      backgroundColor: props.color || "",
      color: props.backgroundColor || "",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 5% 77%, 0 100%, 0 78%)",
      transform: "translate(0%, 0%) scaleY(1)",
    };
  } else if (weekIndex <= 48) {
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

export function getAllContributionsByYear(githubUserName, token) {
  // First, fetch the contribution years
  const graphql = JSON.stringify({
    query:
      "query ($userName: String!) {\n" +
      "  user(login: $userName) {\n" +
      "    contributionsCollection {\n" +
      "      contributionYears\n" + // Get all years the user has contributions
      "    }\n" +
      "  }\n" +
      "}",
    variables: { userName: githubUserName },
  });

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  fetch("https://api.github.com/graphql", {
    method: "POST",
    headers,
    body: graphql,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("🚀 ~ .then ~ data:", data);
      const contributionYears =
        data.data.user.contributionsCollection.contributionYears;
      console.log("Contribution Years:", contributionYears);

      // Loop through each year and fetch contributions
      contributionYears.forEach((year) => {
        getContributionsForYear(githubUserName, year, token);
      });
    })
    .catch((error) => {
      console.error("Error fetching contribution years:", error);
    });
}

export function getContributionsForYear(githubUserName, year, token) {
  const graphql = JSON.stringify({
    query:
      "query ($userName: String!, $from: DateTime!, $to: DateTime!) {\n" +
      "  user(login: $userName) {\n" +
      "    contributionsCollection(from: $from, to: $to) {\n" +
      "      startedAt\n" +
      "      totalCommitContributions\n" +
      "      totalPullRequestContributions\n" +
      "      totalIssueContributions\n" +
      "      totalPullRequestReviewContributions\n" +
      "      totalRepositoriesWithContributedCommits\n" +
      "      totalRepositoriesWithContributedPullRequests\n" +
      "      totalRepositoriesWithContributedIssues\n" +
      "      totalRepositoriesWithContributedPullRequestReviews\n" +
      "      totalRepositoryContributions\n" +
      "      contributionCalendar {\n" +
      "        totalContributions\n" +
      "        weeks {\n" +
      "          contributionDays {\n" +
      "            contributionCount\n" +
      "            date\n" +
      "          }\n" +
      "        }\n" +
      "      }\n" +
      "    }\n" +
      "  }\n" +
      "}",
    variables: {
      userName: githubUserName,
      from: `${year}-01-01T00:00:00Z`, // Start of the year
      to: `${year}-12-31T23:59:59Z`, // End of the year
    },
  });

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers,
    body: graphql,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Contributions for ${year}:`, data);
      return data.data.user.contributionsCollection;
    })
    .catch((error) => {
      console.error(`Error fetching contributions for ${year}:`, error);
    });
}
// utils/createInitialWeeks.js
export const createInitialWeeks = () => {
  const weeks = [];
  const today = new Date();
  // Start from a year ago
  const startDate = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  for (let w = 0; w < 52; w++) {
    const week = { contributionDays: [] };
    for (let d = 0; d < 7; d++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + w * 7 + d);
      week.contributionDays.push({
        date: date.toISOString().split("T")[0], // Format: YYYY-MM-DD
        contributionCount: 0, // Default contribution count
      });
    }
    weeks.push(week);
  }
  console.log("🚀 ~ createInitialWeeks ~ weeks", weeks);
  return weeks;
};
