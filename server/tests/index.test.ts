// For clarity in this example we included our typeDefs and resolvers above our test,
// but in a real world situation you'd be importing these in from different files
import { ApolloServer } from "apollo-server";
import { typeDefs } from "../src/schema";
import { resolvers } from "../src/resolvers";
import { peopleAPi } from "../src/swapi";
// const typeDefs = gql`
//   type Query {
//     hello(name: String): String!
//   }
// `;

// const resolvers = {
//   Query: {
//     // @ts-ignore
//     hello: (_, { name }) => `Hello ${name}!`,
//   },
// };

describe("tests the get user test", () => {
  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env.API_URL = "https://swapi.dev/api/";
  });

  afterAll(() => {
    process.env.API_URL = "https://swapi.dev/api/"; // Restore old environment
    jest.resetModules();
  });
  it("tests the get all user details", async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => {
        return {
          peopleAPi: new peopleAPi(),
        };
      },
    });

    const result = await testServer.executeOperation({
      query: `query People($page: Int) {
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
          }`,
      variables: {
        page: 2,
        name: "Anakin Skywalker",
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.people?.results).toBeTruthy();
    // expect(result.data?.people).toBe("Hello world!");
  });
});
