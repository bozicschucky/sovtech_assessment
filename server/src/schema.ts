import { gql } from "apollo-server";

export const typeDefs = gql`
  type personDetails {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type Page {
    next: String
    previous: String
    count: Int
    results: [personDetails]
  }

  type SearchPerson {
    count: Int
    results: [personDetails]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    people(page: Int): Page
    search(name: String!): SearchPerson
  }
`;
