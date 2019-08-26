import Search from './models/Search';
import { elements, renderLoader } from './views/base';
import * as searchView from './views/searchView';

//En esta variable guardaremos todo el estado de la app
const state = {};

const controlSearch = async () => {
  //Obtenemos la cadena de busqueda
  const query = searchView.getInput();

  if (query) {
    //Creamos nueva búsqueda
    state.search = new Search(query);

    //Preparamos interfaz
    searchView.clearInput();
    searchView.clearContent();

    renderLoader(elements.mainContent);

    await state.search.getResults();

    console.log(query);
    console.log(state.search.results);
  }
};

elements.searchBar.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
