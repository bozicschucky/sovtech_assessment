import { RESTDataSource } from "apollo-datasource-rest";

export class peopleAPi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async getPeople(page = 1) {
    const pageNumber = page || 1;
    const response = await this.get(`people/?page=${pageNumber}`);
    if (response) {
      const { results, previous, next, count } = response;
      return { previous, next, count, results };
    }
  }
}
