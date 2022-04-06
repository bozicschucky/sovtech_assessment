import { gql } from "@apollo/client";

export const GET_PERSON_DETAILS_QUERY = gql`
  query Search($name: String!) {
    search(name: $name) {
      count
      results {
        name
        gender
        height
        mass
        gender
        homeworld
      }
    }
  }
`;
