import filmTpl from '../templates/filmModal.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import FilmApiService from './apiService';
import addToLibrary from './library';

import toastify from '../js/notification';

const filmsApiService = new FilmApiService();

const cardFilm = document.querySelector('.gallery');
cardFilm.addEventListener('click', openModal);

//функция получения фильма по ид

function getFullMovieInfo(id) {
  filmsApiService
    .getFullMovieInfo(id)
    .then(movieInfo => {
      const markup = filmTpl(movieInfo);
      const modal = basicLightbox.create(markup);
      modal.show();

      addToLibrary(id);

      // cardFilm.removeEventListener('click', openModal);
      //  modalClose();

      const buttonCls = document.querySelector('.modal-button-close');
      buttonCls.addEventListener('click', closeModal);
      window.addEventListener('keydown', closeModalHandler);

      //функция закрытия по escape
      function closeModalHandler(evt) {
        if (evt.code === 'Escape') {
          modal.close();
          // window.removeEventListener('click', closeModal);
          window.removeEventListener('keydown', closeModalHandler);
        }
      }

      function closeModal() {
        modal.close();

        // window.removeEventListener('click', closeModal);
        window.removeEventListener('keydown', closeModalHandler);
      }
    })
    .catch(error => console.log('error', error));
}

function openModal(evt) {
  evt.preventDefault();
  let id = evt.target.dataset.action;
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  getFullMovieInfo(id);
  toastify.joySuccess();
}
