// Import everything needed to use the `useQuery` hook
// import { useQuery, gql } from "@apollo/client";
import Graph from "./lib/components/Graph";

export default function App() {
  //   console.log(formatData);
  const githubUserName = "";

  const bgcolor = "";
  const color = "";
  return (
    <div>
      <Graph
        userName={githubUserName}
        // githubApiToken={githubApiToken}
        backgroundColor={bgcolor}
        color={color}
      />
    </div>
  );
}
