import FilmApiService from './apiService.js';
import markUpFilmCardTpl from '../templates/films.hbs';
import getRefs from './refs.js';
import debounce from 'lodash.debounce';

const refs = getRefs();

const filmsApiService = new FilmApiService();

refs.searchInput.addEventListener('input', debounce(onSearch, 500));

let galleryRef = document.querySelector('.gallery');

// фетч популярных фильмов - стартовая страница
renderTrendingMovies();

function renderTrendingMovies() {
  filmsApiService
    .fetchTrendingMovies()
    .then(createFilmCardsMarkUp)
    .catch(error => console.log('error', error));
}

// поиск фильмов
function onSearch(e) {
  filmsApiService.searchQuery = e.target.value.trim();

  if (filmsApiService.searchQuery === '') {
    filmsApiService
      .fetchTrendingMovies()
      .then(createFilmCardsMarkUp)
      .catch(error => console.log('error', error));
  }

  filmsApiService.resetPage();
  clearImagesContainer();

  if (filmsApiService.searchQuery !== '') {
    filmsApiService
      .fetchSearch()
      .then(createFilmCardsMarkUp)
      .catch(error => console.log('error', error));
  }
}
function createFilmCardsMarkUp(movieInfo) {
  galleryRef.insertAdjacentHTML('beforeend', markUpFilmCardTpl(movieInfo));
 
}

function clearImagesContainer() {
  galleryRef.innerHTML = '';
}

// Изменение стилей и рендеринг при клике на home и logo
refs.logo.addEventListener('click', onLogo);
refs.home.addEventListener('click', onHome);

function onLogo() {
  e.preventDefault();
  // clearImagesContainer();
  toggleHomeLogo();
}

function onHome() {
  e.preventDefault();
  // clearImagesContainer();
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

export { clearImagesContainer };
export { renderTrendingMovies };
export { createFilmCardsMarkUp };