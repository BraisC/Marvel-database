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
      <div class="results__item animated fadeIn" data-id="${comic.id}">
        <img src="${comic.thumbnail.path}/portrait_incredible.jpg" 
        alt="${comic.title}" class="results__image" />
        <div class="results__layer">
          <p class="results__title">${comic.title.toUpperCase()}</p>
        </div>
      </div>
  `;

  comicContainer.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => {
  const markup = `
  <div class="pagination__side pagination__side--${type}" data-goto=${
    type === 'prev' ? page - 1 : page + 1
  }>
    <svg class="pagination__icon">
      <use href="images/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
    </svg>
    <span class="pagination__text">Go to page ${type === 'prev' ? page - 1 : page + 1}</span>
  </div>
  `;
  return markup;
};

const renderButtons = (page, numResults, resultsPerPage) => {
  let button;
  const numPages = Math.ceil(numResults / resultsPerPage);
  if (numResults > 8) {
    if (page === 1 && numPages > 1) {
      button = createButton(page, 'next');
    } else if (page === numPages && numPages > 1) {
      button = createButton(page, 'prev');
    } else if (page < numPages) {
      button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
      `;
    }
  }

  document.querySelector('.pagination').insertAdjacentHTML('afterbegin', button);
};

//Render the entire list of results calling 'renderComic' on each item of the array 'comics'
export const renderResults = (comics, numResults, page = 1, resultsPerPage = 8) => {
  const results = document.createElement('section');
  results.classList.add('results');
  elements.mainContent.appendChild(results);
  if (comics.length > 0) {
    //Function for rendering each item of the array 'comics'
    comics.forEach(renderComic);
    //Append container for pagination buttons
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');
    results.appendChild(pagination);
    //Call to renderButtons to show the buttons
    renderButtons(page, numResults, resultsPerPage);
  } else {
    results.innerHTML = 'Balanced, like everything should be';
  }
};
