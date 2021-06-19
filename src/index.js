import './sass/main.scss';

import './js/showTrendingMovies';

import './js/upScrol';
import getRefs from './js/refs';
import FilmApiService from './js/apiService.js'
import markUpFilmCardTpl from './templates/film.hbs'

const refs = getRefs();

const filmsApiService = new FilmApiService();

refs.searchInput.addEventListener('input', onSearch);

let galleryRef = document.querySelector('#gallery');
    filmsApiService.fetchTrendingMovies()
    .then(filmData => {
    let result = filmData.results
    createFilmCardsMarkUp(result);
    })
    .catch(error => console.log('error', error));
            
function onSearch(e) {
    e.preventDefault();
    filmsApiService.searchQuery = e.target.value;

    if (filmsApiService.searchQuery === '') {
              filmsApiService.fetchTrendingMovies()
            .then(filmData => {
                let result = filmData.results
        createFilmCardsMarkUp(result);
    })
            .catch(error => console.log('error', error));
    };

    filmsApiService.resetPage()

    clearImagesContainer();

    filmsApiService.fetchFilms()
            .then(filmData => {
                let result = filmData.results
        createFilmCardsMarkUp(result);
    })
    .catch(error => console.log('error', error));
};

function createFilmCardsMarkUp(films) {
    galleryRef.insertAdjacentHTML('beforeend', markUpFilmCardTpl(films));
}

function clearImagesContainer() {
  galleryRef.innerHTML = '';
}



