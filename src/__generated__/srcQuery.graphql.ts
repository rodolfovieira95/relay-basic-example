/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type srcQueryVariables = {};
export type srcQueryResponse = {
    readonly users: {
        readonly id: string;
        readonly name: string | null;
        readonly user: {
            readonly edges: ReadonlyArray<{
                readonly cursor: string;
                readonly node: {
                    readonly id: string;
                    readonly name: string | null;
                    readonly age: number | null;
                } | null;
            } | null> | null;
        } | null;
    } | null;
};
export type srcQuery = {
    readonly response: srcQueryResponse;
    readonly variables: srcQueryVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Users",
    "kind": "LinkedField",
    "name": "users",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "age",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "srcQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a0caff8c3f5988a498a20cdf3e10cb24",
    "id": null,
    "metadata": {},
    "name": "srcQuery",
    "operationKind": "query",
    "text": "query srcQuery {\n  users {\n    id\n    name\n    user {\n      edges {\n        cursor\n        node {\n          id\n          name\n          age\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2262f46e7012af83aa26f341bd202995';
export default node;
