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
    } catch (error) {
      alert(error);
    }
  }

  formatDate() {
    let date = new Date(this.date);
    date = date.toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    });
    this.date = date;
  }

  setCreators() {
    this.creators = this.creators.reduce((acc, elem) => {
      const creator = acc.find(item => item.role === elem.role);
      if (creator) {
        creator.name += '|' + elem.name;
        creator.resourceURI += '|' + elem.resourceURI;
      } else {
        acc.push(elem);
      }
      return acc;
    }, []);
  }
}
