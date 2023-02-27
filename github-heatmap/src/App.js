// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import Graph from "./Graph";
const GET_LOCATIONS = gql`
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { userName: "jcharo1" },
  });

  const formatData = data?.user.contributionsCollection.contributionCalendar;
  console.log(formatData);
  return (
    <div>
      <Graph data={formatData} />
    </div>
  );
}
