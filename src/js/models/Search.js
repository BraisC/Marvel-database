import Axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const result = await Axios(
        `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${this.query}&orderBy=onsaleDate&limit=15&offset=0&apikey=${process.env.API_KEY}`
      );

      this.results = result.data.data.results;
    } catch (error) {
      alert(error);
    }
  }
}
