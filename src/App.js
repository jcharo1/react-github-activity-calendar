// Import everything needed to use the `useQuery` hook
// import { useQuery, gql } from "@apollo/client";
import Graph from "./lib/components/Graph";

export default function App() {
  const githubApiKey = process.env.REACT_APP_PUBLIC_GITHUB; // <your-github-api-key>
  const githubUserName = "jcharo1"; // <github-username>
  const bgcolor = "";
  const textColor = "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: bgcolor,
        color: textColor,
      }}
    >
      <Graph
        userName={githubUserName}
        githubApiKey={githubApiKey}
        backgroundColor={bgcolor}
        color={textColor}
        // enableAnimations={false}
      />
    </div>
  );
}
