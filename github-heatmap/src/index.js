import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  useMutation,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { Authorization: "Bearer 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" },
  cache: new InMemoryCache(),
});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
