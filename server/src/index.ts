import { ApolloServer } from "apollo-server";
import "dotenv/config";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { peopleAPi } from "./swapi";

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      peopleAPi: new peopleAPi(),
    };
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`the server is listening @ ${url}`);
});
