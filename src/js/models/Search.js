import Axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(page = 1, resultsPerPage = 8) {
    const offset = page * resultsPerPage - resultsPerPage;
    try {
      const result = await Axios(
        `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${this.query}&orderBy=onsaleDate&limit=${resultsPerPage}&offset=${offset}&apikey=${process.env.API_KEY}`
      );

      this.results = result.data.data.results;
    } catch (error) {
      alert(error);
    }
  }
}
