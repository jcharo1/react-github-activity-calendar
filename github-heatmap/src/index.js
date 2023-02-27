import React from "react";
import * as ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "./css/style.css";

const githubApiToken = "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";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { Authorization: `Bearer ${githubApiToken}` },
  cache: new InMemoryCache(),
});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
