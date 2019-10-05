import Search from './models/Search';
import Comic from './models/Comic';
import Likes from './models/Likes';
import { elements, renderLoader, clearLoader, renderHome } from './views/base';
import * as searchView from './views/searchView';
import * as comicView from './views/comicView';
import * as likesView from './views/likesView';

//This variable will store all the state of the app
const state = {};

const searchController = async (page = 1) => {
  //We get the search query
  const query = searchView.getInput();
  if (query || state.search) {
    //Instantiate a new Search
    if (query) {
      state.search = new Search(query);
    }

    //Getting ready the UI
    searchView.clearInput();
    searchView.clearContent();
    renderLoader(elements.mainContent);

    //Getting the results
    await state.search.getResults(page);

    //Get rid of the loader
    clearLoader();

    //Showing the results on the UI
    if (state.search.results.length > 0) {
      searchView.renderResults(state.search.results, state.search.numResults, page);
    } else {
      searchView.renderNotFound();
    }
  }
};

elements.searchBar.addEventListener('submit', e => {
  e.preventDefault();
  searchController();
});

elements.mainContent.addEventListener('click', event => {
  const btn = event.target.closest('.pagination__side');

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto);
    searchController(goToPage);
  }
});

//Comic controller
const comicController = async id => {
  const comicId = id;

  if (comicId) {
    searchView.clearContent();
    renderLoader(elements.mainContent);

    state.comic = new Comic(comicId);

    await state.comic.getComic();

    state.comic.formatDate();
    state.comic.setCreators();

    comicView.renderComic(state.comic, state.likes.isLiked(comicId));

    clearLoader();
  }
};

//Likes controller
const likeController = () => {
  if (!state.likes) state.likes = new Likes();

  if (!state.likes.isLiked(state.comic.id)) {
    const newLike = state.likes.addLike(state.comic);

    likesView.toggleLikeButton(true);

    likesView.renderLike(newLike);
  } else {
    state.likes.deleteLike(state.comic.id);

    likesView.toggleLikeButton(false);

    likesView.deleteLike(state.comic.id);
  }

  likesView.toggleLikeMenu(state.likes.getNumberLikes());
};

window.addEventListener('load', () => {
  if (!state.likes) state.likes = new Likes();

  state.likes.readFromLocal();

  likesView.toggleLikeMenu(state.likes.getNumberLikes());

  state.likes.likes.forEach(like => {
    likesView.renderLike(like);
  });
});

elements.mainContent.addEventListener('click', event => {
  const comic = event.target.closest('.results__item');
  const backButton = event.target.closest('.detail__back');
  const likeButton = event.target.closest('.button--like');

  if (comic) comicController(comic.dataset.id);
  if (backButton) state.search ? searchController(state.search.page) : renderHome();
  if (likeButton) likeController();
});

elements.likesMenu.addEventListener('click', event => {
  const likeMenu = event.target.closest('.likes__field');
  if (likeMenu) {
    likeMenu.classList.contains('activo')
      ? likeMenu.classList.remove('activo')
      : likeMenu.classList.add('activo');
  }
});

elements.likesList.addEventListener('click', event => {
  const comic = event.target.closest('.likes__link');
  if (comic) {
    comicController(comic.dataset.id);
  }
});

document.querySelector('.main').addEventListener('click', () => {
  const activo = document.querySelector('.activo');
  if (activo) {
    activo.classList.remove('activo');
  }
});
