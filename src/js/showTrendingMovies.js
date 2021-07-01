import FilmApiService from './apiService';
import markUpFilmCardTpl from '../templates/films.hbs';
import getRefs from './refs';
import debounce from 'lodash.debounce';
import { renderPaginationPopularFilms } from './pagination';
import toastify from './notification';
import { showSpinner, hideSpinner } from './spinner';

const refs = getRefs();

const filmsApiService = new FilmApiService();

refs.searchInput.addEventListener('input', debounce(onSearch, 500));

let galleryRef = document.querySelector('.gallery');

// фетч популярных фильмов - стартовая страница
showSpinner();
renderTrendingMovies();

function renderTrendingMovies() {
  filmsApiService
    .fetchTrendingMovies()
    .then(createFilmCardsMarkUp)
    .catch(error => console.log('error', error))
    .finally(hideSpinner);
}

// поиск фильмов
function onSearch(e) {
  filmsApiService.searchQuery = e.target.value;
  showSpinner();
  renderPaginationPopularFilms();

  if (filmsApiService.searchQuery.trim() === '') {
    hideSpinner();
    return toastify.needMoreInfo();
  }

  filmsApiService.resetPage();
  clearMoviesContainer();

  if (filmsApiService.searchQuery !== '') {
    filmsApiService.fetchSearch().then(movies => {
      if (movies.length === 0) {
        hideSpinner();
        toastify.onError();
        // renderTrendingMovies();
      } else {
        toastify.onSuccess();
        hideSpinner();
        createFilmCardsMarkUp(movies);
      }
    });
  }
}

function createFilmCardsMarkUp(movieInfo) {
  galleryRef.insertAdjacentHTML('beforeend', markUpFilmCardTpl(movieInfo));
}

function clearMoviesContainer() {
  galleryRef.innerHTML = '';
}

// Изменение стилей и рендеринг при клике на home и logo
refs.logo.addEventListener('click', onLogo);
refs.home.addEventListener('click', onHome);

function onLogo() {
  // e.preventDefault();
  // clearMoviesContainer();
  showSpinner();
  toggleHomeLogo();
}

function onHome() {
  // e.preventDefault();
  // clearMoviesContainer();
  showSpinner();
  toggleHomeLogo();
}

function toggleHomeLogo() {
  refs.library.classList.remove('nav-link-current');
  refs.searchForm.classList.remove('is-hidden');
  refs.btnsLibrary.classList.add('is-hidden');
  refs.overlay.classList.remove('library-open');
  refs.home.classList.add('nav-link-current');
  renderTrendingMovies();
}

export { clearMoviesContainer };
export { renderTrendingMovies };
export { createFilmCardsMarkUp };
