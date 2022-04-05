export const resolvers = {
  Query: {
    // @ts-ignore
    people: async (source, args, { dataSources }) => {
      const page = args?.page;
      return dataSources.peopleAPi.getPeople(page);
    },
    // @ts-ignore
    search: async (source, args, { dataSources }) => {
      const personName = args?.name;
      return dataSources.peopleAPi.searchPerson(personName);
    },
  },
};
