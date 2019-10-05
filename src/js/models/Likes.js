export default class Likes {
  constructor() {
    this.likes = [];
  }

  //Method to add
  addLike(comic) {
    const like = {
      id: comic.id,
      title: comic.title,
      cover: comic.cover,
    };

    //Insert the new like into the array
    this.likes.push(like);

    //Save it to localStorage
    this.saveToLocal();

    return like;
  }

  //Method to delete like from the array
  deleteLike(id) {
    //First we need to obtain the index of that element in the array
    const index = this.likes.findIndex(elemento => {
      return elemento.id === id;
    });

    //Then we delete one item from the index of the element
    this.likes.splice(index, 1);

    //Update localStorage
    this.saveToLocal();
  }

  //Method to check if a comic is liked
  isLiked(id) {
    return this.likes.findIndex(elemento => elemento.id === id) != -1;
  }

  //Method to obtain number of likes
  getNumberLikes() {
    return this.likes.length;
  }

  saveToLocal() {
    localStorage.setItem('likesMarvelDatabase', JSON.stringify(this.likes));
  }

  readFromLocal() {
    const likes = JSON.parse(localStorage.getItem('likesMarvelDatabase'));

    if (likes) {
      this.likes = likes;
    }
  }
}
