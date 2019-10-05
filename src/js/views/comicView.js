import { elements } from './base';

const createCreator = (role, name) => {
  return `
  <div class="artists">
    <h3 class="title writer__title">${role}</h3>
    <span class="text writer__text">${name.split('|').join('<br>')}</span>
  </div>
  `;
};

const createButton = (type, url) => {
  if (url) {
    return `
    <a href="${url}" target="_blank" class="button">
      <svg class="button__icon">
        <use href="images/icons.svg#icon-${type}"></use>
      </svg>
    </a>
    `;
  } else {
    return `
    <button class="button">
      <svg class="button__icon">
        <use href="images/icons.svg#icon-${type}"></use>
      </svg>
    </button>
    `;
  }
};

export const renderComic = (comic, isLiked, isReaded) => {
  const markup = `
      <section class="detail">
        <button class="detail__back"><i class="fas fa-angle-left detail__back__icon"></i>Go Back</button>
        <div class="detail__cover animated fadeIn">
          <img src="${comic.cover}" alt="${comic.title}" class="detail__image" />
        </div>
        <div class="detail__info animated fadeInRight">
          <h2 class="detail__title">${comic.title.toUpperCase()}</h2>
          <div class="detail__data">
            <div class="published">
              <h3 class="title published__title">published:</h3>
              <span class="text published__text">${comic.date}</span>
            </div>
            ${comic.creators.map(item => createCreator(item.role, item.name)).join('')}
          </div>
          <p class="detail__text">
            ${comic.description || 'There is no description for this comic'}
          </p>
          <div class="detail__buttons">
            ${createButton('shopping-cart', comic.url)}
            ${createButton('check')}
            ${isLiked ? createButton('heart') : createButton('heart-outlined')}
          </div>
        </div>
      </section>
      `;

  elements.mainContent.insertAdjacentHTML('afterbegin', markup);
};
