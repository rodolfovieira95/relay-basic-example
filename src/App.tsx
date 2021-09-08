import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";

function App(props: any) {
  const AppQuery = graphql`
    query AppQuery {
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
  const data: any = usePreloadedQuery(AppQuery, props.preloadedQuery);
  return (
    <div className="App">
      <header className="App-header">
        <p>{data.users.user.edges[0].node.name}</p>
      </header>
    </div>
  );
}

export default App;
