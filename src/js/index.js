import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';

//This variable will store all the state of the app
const state = {};

const searchController = async (page = 1) => {
  //We get the search query
  if (page === 1) {
    const query = searchView.getInput();

    if (query) {
      //Instantiate a new Search
      state.search = new Search(query);

      //Getting ready the UI
      searchView.clearInput();
      searchView.clearContent();
      renderLoader(elements.mainContent);

      //Getting the results
      await state.search.getResults();

      //Get rid of the loader
      clearLoader();

      //Showing the results on the UI
      searchView.renderResults(state.search.results);
    }
  } else {
    //Getting ready the UI
    searchView.clearInput();
    searchView.clearContent();
    renderLoader(elements.mainContent);

    //Getting the results
    await state.search.getResults(page);

    //Get rid of the loader
    clearLoader();

    //Showing the results on the UI
    searchView.renderResults(state.search.results);
  }
};

elements.searchBar.addEventListener('submit', e => {
  e.preventDefault();
  searchController();
});
