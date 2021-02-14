import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/",
});

// Allow you to send/receive subscriptions over a web socket
const wsLink = new WebSocketLink({
  uri: "ws://localhost:4000/",
  options: {
    reconnect: true,
  },
});

// Acts as "middleware" for directing our operations over http or via web sockets
const terminatingLink = split(
  ({ query: { definitions } }) =>
    definitions.some((node) => {
      const { kind, operation } = node;
      return kind === "OperationDefinition" && operation === "subscription";
    }),
  wsLink,
  httpLink
);
// Create a new client to make requests with, use the appropriate link returned
// by termintating link (either ws or http)
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: terminatingLink,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
