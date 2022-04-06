import { ApolloServer } from "apollo-server";
import "dotenv/config";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { peopleAPi } from "./swapi";

let PORT = process.env.PORT || 3000;

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      peopleAPi: new peopleAPi(),
    };
  },
});

if (process.env.NODE_ENV === "test") {
  PORT = 5050;
}

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`the server is listening @ ${url}`);
});
