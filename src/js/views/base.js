export const elements = {
  searchBar: document.querySelector('.searchbar'),
  searchInput: document.querySelector('.searchbar__input'),
  mainContent: document.querySelector('.content'),
  likesList: document.querySelector('.likes__list'),
  likesMenu: document.querySelector('.likes__field'),
};

export const renderLoader = parent => {
  //Loader HTML
  const loader = `
      <div class="loader">
          <img src="./images/logo-rojo-peq.png" alt=""/>
      </div>
  `;

  //Injecting the loader HTML into the page
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) loader.parentElement.removeChild(loader);
};
