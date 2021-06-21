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
    .then(movieData => {
      let result = movieData.results;
      // createFilmCardsMarkUp(result);
      initialize(result);
    })
    .catch(error => console.log('error', error));
}

// поиск фильмов
function onSearch(e) {
  filmsApiService.searchQuery = e.target.value.trim();

  if (filmsApiService.searchQuery === '') {
    filmsApiService
      .fetchTrendingMovies()
      .then(movieData => {
        let result = movieData.results;
        initialize(result);
      })
      .catch(error => console.log('error', error));
    // fetchTrending()
  }

  filmsApiService.resetPage();
  clearImagesContainer();

  if (filmsApiService.searchQuery !== '') {
    filmsApiService
      .fetchSearch()
      .then(movieData => {
        let result = movieData.results;
        initialize(result);
      })
      .catch(error => console.log('error', error));
    // fetchTrending()
  }
}

// драфт вынесения функции
// function fetchTrending() {
//       filmsApiService.fetchTrendingMovies()
//   .then(movieData => {
//     let result = movieData.results;
//     // createFilmCardsMarkUp(result);
//         initialize(result);

//   })
//   .catch(error => console.log('error', error));
// }

function initialize(movieInfo) {
  for (let i = 0; i < movieInfo.length; i++) {
    let id = movieInfo[i].id;

    filmsApiService
      .getFullMovieInfo(id)
      .then(movieInfo => {
        createFilmCardsMarkUp([movieInfo]);
      })
      .catch(error => console.log('error', error));
  }
}

function createFilmCardsMarkUp(movieInfo) {
  galleryRef.insertAdjacentHTML('beforeend', markUpFilmCardTpl(movieInfo));
}

function clearImagesContainer() {
  galleryRef.innerHTML = '';
}

export { clearImagesContainer, renderTrendingMovies }