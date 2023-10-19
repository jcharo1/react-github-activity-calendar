// Import everything needed to use the `useQuery` hook
// import { useQuery, gql } from "@apollo/client";
import Graph from "./lib/components/Graph";

export default function App() {
  const githubApiKey = ""; // <your-github-api-key>
  const githubUserName = ""; // <github-username>
  const bgcolor = "";
  const textColor = "";

  return (
    <Graph
      userName={githubUserName}
      githubApiKey={githubApiKey}
      backgroundColor={bgcolor}
      color={textColor}
    />
  );
}
