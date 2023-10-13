// Import everything needed to use the `useQuery` hook
// import { useQuery, gql } from "@apollo/client";
import Graph from "./lib/components/Graph";

export default function App() {
  const githubApiKey = "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"; // <your-github-api-key>
  const githubUserName = "jcharo1"; // <github-username>
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
