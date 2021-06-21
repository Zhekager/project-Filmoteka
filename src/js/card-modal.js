import filmTpl from '../templates/film.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import getRefs from '../js/refs';
import FilmApiService from './apiService.js';
import addToLibrary from './library.js';
const refs = getRefs();

const filmsApiService = new FilmApiService();

const cardFilm = document.querySelector('.gallery');
cardFilm.addEventListener('click', openModal);
 
function openModal(evt) {
    evt.preventDefault();
    let id = evt.target.dataset.action;

    if (evt.target.nodeName !== 'li') {
        getFullMovieInfo(id)
    }
}

function getFullMovieInfo(id) {
    filmsApiService.getFullMovieInfo(id)
        .then(movieInfo => {
            const markup = filmTpl(movieInfo);
            const modal = basicLightbox.create(markup);
            modal.show();

            addToLibrary();

        })
        .catch(error => console.log('error', error));
   
}
            

//ryjgrf pfrhsnm

