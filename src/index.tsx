import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
//@ts-ignore
import graphql from "babel-plugin-relay/macro";

const AppQuery = graphql`
  query srcQuery {
    users {
      id
      name
      user {
        edges {
          cursor
          node {
            id
            name
            age
          }
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, AppQuery, {
  /* query variables */
});

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} relayTestQuery={AppQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
// reportWebVitals(console.log);
