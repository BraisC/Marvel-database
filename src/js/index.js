import Search from './models/Search';
import Comic from './models/Comic';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as comicView from './views/comicView';

//This variable will store all the state of the app
const state = {};

const searchController = async (page = 1) => {
  //We get the search query
  const query = searchView.getInput();
  if (query) {
    //Instantiate a new Search
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
  searchView.renderResults(state.search.results, state.search.numResults, page);
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
  console.log(comicId);

  if (comicId) {
    searchView.clearContent();
    renderLoader(elements.mainContent);

    state.comic = new Comic(comicId);

    await state.comic.getComic();

    state.comic.formatDate();
    state.comic.setCreators();

    console.log(state.comic.creators);
    comicView.renderComic(state.comic);

    clearLoader();
    console.log(state.comic);
  }
};

elements.mainContent.addEventListener('click', event => {
  const comic = event.target.closest('.results__item');

  if (comic) comicController(comic.dataset.id);
});
