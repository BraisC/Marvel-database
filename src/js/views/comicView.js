import { elements } from './base';

const createCreator = (role, name) => {
  return `
  <div class="artists">
    <h3 class="title writer__title">${role}</h3>
    <span class="text writer__text">${name.join('<br>')}</span>
  </div>
  `;
};

const parseCreators = creators => {
  const creatorList = [];
  Object.keys(creators).forEach(key => {
    creatorList.push(createCreator(key, creators[key]));
  });

  return creatorList;
};

export const renderComic = comic => {
  const markup = `
      <section class="detail">
        <div class="detail__cover">
          <img src="${comic.cover}" alt="${comic.title}" class="detail__image" />
        </div>
        <div class="detail__info">
          <h2 class="detail__title">${comic.title.toUpperCase()}</h2>
          <div class="detail__data">
            <div class="published">
              <h3 class="title published__title">published:</h3>
              <span class="text published__text">${comic.date}</span>
            </div>
            ${parseCreators(comic.creators).join('')}
          </div>
          <p class="detail__text">
            ${comic.description || 'There is no description for this comic'}
          </p>
        </div>
      </section>
      `;

  elements.mainContent.insertAdjacentHTML('afterbegin', markup);
};
