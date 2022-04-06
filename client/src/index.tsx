import React from "react";
import ReactDom from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:8080/",
  cache: new InMemoryCache(),
});

ReactDom.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
