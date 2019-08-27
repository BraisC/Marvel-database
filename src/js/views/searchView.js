import { elements } from './base';

export const getInput = () => {
  return elements.searchInput.value;
};

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearContent = () => {
  elements.mainContent.innerHTML = '';
};

//Render a single comic item
const renderComic = comic => {
  const comicContainer = document.querySelector('.results');
  const markup = `
      <div class="results__item" data-id="${comic.id}">
        <img src="${comic.thumbnail.path}/portrait_incredible.jpg" 
        alt="${comic.title}" class="results__image" />
        <div class="results__layer">
          <p class="results__title">${comic.title.toUpperCase()}</p>
        </div>
      </div>
  `;

  comicContainer.insertAdjacentHTML('beforeend', markup);
};

//Render the entire list of results calling 'renderComic' on each item of the array 'comics'
export const renderResults = comics => {
  const results = document.createElement('section');
  results.classList.add('results');
  elements.mainContent.appendChild(results);
  //Function for rendering each item of the array 'comics'
  comics.forEach(renderComic);
};
