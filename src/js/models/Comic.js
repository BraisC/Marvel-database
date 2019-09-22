import Axios from 'axios';

export default class Comic {
  constructor(id) {
    this.id = id;
  }

  async getComic() {
    try {
      const result = await Axios(
        `https://gateway.marvel.com/v1/public/comics/${this.id}?apikey=${process.env.API_KEY}`
      );
      console.log(result);
      this.title = result.data.data.results[0].title;
      this.issue = result.data.data.results[0].issueNumber;
      this.description = result.data.data.results[0].description;
      this.url = result.data.data.results[0].urls[0].url;
      this.cover =
        result.data.data.results[0].thumbnail.path +
        '.' +
        result.data.data.results[0].thumbnail.extension;
      this.creators = result.data.data.results[0].creators.items;
      this.date = result.data.data.results[0].dates[0].date;
      console.log(this.creators);
    } catch (error) {
      alert(error);
    }
  }

  formatDate() {
    let date = new Date(this.date);
    date = date.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    this.date = date;
  }

  setCreators() {
    const creators = {};
    this.creators.forEach(item => {
      if (creators.hasOwnProperty(item.role)) {
        creators[item.role].push(item.name);
      } else {
        creators[item.role] = [item.name];
      }
    });

    this.creators = creators;
  }
}
