import { elements } from './base';

//Method to change the like button color
export const toggleLikeButton = isLiked => {
  const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';

  document
    .querySelector('.button--like use')
    .setAttribute('href', `images/icons.svg#${iconString}`);
};

export const toggleLikeMenu = numLikes => {
  elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = like => {
  const markup = `
        <li>
            <div class="likes__link" data-id="${like.id}">
                <figure class="likes__fig">
                    <img src="${like.cover}" alt="${like.title}">
                </figure>
                <div class="likes__data">
                    <h4 class="likes__name">${like.title}</h4>
                </div>
            </div>
        </li>
    `;

  elements.likesList.insertAdjacentHTML('beforeend', markup);
};

export const deleteLike = id => {
  const elemento = document.querySelector(`.likes__link[data-id="${id}"]`).parentElement;
  if (elemento) elemento.parentElement.removeChild(elemento);
};
