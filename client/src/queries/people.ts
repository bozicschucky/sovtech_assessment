import { gql } from "@apollo/client";

export const GET_ALL_PEOPLE_QUERY = gql`
  query People($page: Int) {
    people(page: $page) {
      next
      previous
      count
      results {
        name
        gender
        homeworld
        mass
        height
      }
    }
  }
`;
