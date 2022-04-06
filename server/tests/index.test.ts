import { server } from "../src/index";

describe("tests the get user test", () => {
  it("tests the get all user details", async () => {
    const result = await server.executeOperation({
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
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.people?.results).toBeTruthy();
  });
  it("tests the get one user details by searching using the name", async () => {
    const result = await server.executeOperation({
      query: `query Search($name: String!) {
      search(name: $name) {
        count
        results {
          name
          gender
          height
          mass
          gender
        }
      }
    }`,
      variables: {
        name: "Anakin Skywalker",
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.search?.results).toBeTruthy();
  });
});
