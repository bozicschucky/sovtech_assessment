export const resolvers = {
  Query: {
    // @ts-ignore
    people: async (source, args, { dataSources }) => {
      const page = args.page;
      return dataSources.peopleAPi.getPeople(page);
    },
  },
};
