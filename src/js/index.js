import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';

//This variable will store all the state of the app
const state = {};

const searchController = async (page = 1) => {
  //We get the search query
  const query = searchView.getInput();
  if (page === 1 && query) {
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

document.addEventListener('click', event => {
  const btn = event.target.closest('.pagination__side');

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto);
    searchController(goToPage);
  }
});
