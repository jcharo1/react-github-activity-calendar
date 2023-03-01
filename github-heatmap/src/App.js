// Import everything needed to use the `useQuery` hook
// import { useQuery, gql } from "@apollo/client";
import Graph from "./lib/components/Graph";

export default function App() {
  //   console.log(formatData);

  const githubApiKey = ""; // <your-github-api-key>
  const githubUserName = ""; // <github-username>
  const bgcolor = "";
  const textColor = "";

  const color = "";
  return (
    <div>
      <Graph
        userName={githubUserName}
        githubApiToken={githubApiKey}
        backgroundColor={bgcolor}
        color={color}
      />
    </div>
  );
}
