// Import everything needed to use the `useQuery` hook
// import { useQuery, gql } from "@apollo/client";
import Graph from "./Graph";

export default function App() {
  //   console.log(formatData);
  const githubUserName = "jcharo1";

  const githubApiToken = "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";
  return (
    <div>
      <Graph userName={githubUserName} githubApiToken={githubApiToken} />
    </div>
  );
}
