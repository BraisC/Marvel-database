export const elements = {
  searchBar: document.querySelector('.searchbar'),
  searchInput: document.querySelector('.searchbar__input'),
  mainContent: document.querySelector('.content'),
};

export const renderLoader = parent => {
  //Creamos el HTML del loader
  const loader = `
      <div class="loader">
          <img src="./images/logo-rojo-peq.png" alt=""/>
      </div>
  `;

  //Insertamos el HTML del loader en el elemento que hayamos recibido como parámetro
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) loader.parentElement.removeChild(loader);
};
