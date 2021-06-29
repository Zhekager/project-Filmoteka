import FilmApiService from './apiService.js';
import { clearMoviesContainer, createFilmCardsMarkUp } from './showTrendingMovies.js';
import getRefs from './refs.js';
import { clearPaginationEl } from './pagination';
import { clearSlider } from './slider';

const refs = getRefs();

const filmsApiService = new FilmApiService();

export default function addToLibrary(movieId) {

    const btnAddToWatched = document.querySelector('#add-to-watched');
    const btnAddToQueue = document.querySelector('#add-to-queue');

    // Реализация кнопки Queue внутри модалки на добавление и удаление с библиотеки и изменение стиля
    
    let saveFilmWatched = JSON.parse(localStorage.getItem('watched'));

    btnAddToWatched.addEventListener('click', onBtnAddToWatched);
    btnAddToWatched.addEventListener('click', onBtnRemoveFromWatched);
    
    if (saveFilmWatched && saveFilmWatched.MovieIDW.includes(movieId)) {
        btnAddToWatched.textContent = 'remove from watched';
        btnAddToWatched.style.backgroundColor = '#ff6b01';
        btnAddToWatched.style.color = '#ffffff';
        btnAddToWatched.style.borderColor = '#ff6b01';
    } 
   
    if (btnAddToWatched.textContent === 'add to watched') {
      btnAddToWatched.removeEventListener('click', onBtnRemoveFromWatched);
         
    } else if (btnAddToWatched.textContent === 'remove from watched') {
      btnAddToWatched.removeEventListener('click', onBtnAddToWatched);
    }
  
    function onBtnAddToWatched(e) {
        filmsApiService.watchedLocalStorage(movieId);
        e.target.textContent = 'remove from watched';
      
        e.target.style.backgroundColor = '#ff6b01';
        e.target.style.color = '#ffffff';
        e.target.style.borderColor = '#ff6b01';

      btnAddToWatched.removeEventListener('click', onBtnAddToWatched);
        btnAddToWatched.addEventListener('click', onBtnRemoveFromWatched);
      
      updateLibraryWatched();
    }
    
    function onBtnRemoveFromWatched(e) {
        filmsApiService.watchedLocalStorage(movieId);
        e.target.textContent = 'add to watched';
        e.target.style.backgroundColor = '#ffffff';
        e.target.style.color = '#000000';
        e.target.style.borderColor = '#000000';
     
        btnAddToWatched.removeEventListener('click', onBtnRemoveFromWatched); 
      btnAddToWatched.addEventListener('click', onBtnAddToWatched);
        
      updateLibraryWatched()
  }
  
  function updateLibraryWatched() {
    if (document.querySelector('.js-nav-library').classList.length === 3) {
      onBtnWatched();
    }
}
    
// Реализация кнопки Queue внутри модалки на добавление и удаление с библиотеки и изменение стиля
    let saveFilmQueue = JSON.parse(localStorage.getItem('queue'));

    btnAddToQueue.addEventListener('click', onBtnAddToQueue);
    btnAddToQueue.addEventListener('click', onBtnRemoveFromQueue);

    if (saveFilmQueue && saveFilmQueue.MovieIDQ.includes(movieId)) {
        btnAddToQueue.textContent = 'remove from queue';
        btnAddToQueue.style.backgroundColor = '#ff6b01';
        btnAddToQueue.style.color = '#ffffff';
        btnAddToQueue.style.borderColor = '#ff6b01';
    }

    if (btnAddToQueue.textContent === 'add to queue') {
        btnAddToQueue.removeEventListener('click', onBtnRemoveFromQueue);
    } else if (btnAddToQueue.textContent === 'remove from queue') {
        btnAddToQueue.removeEventListener('click', onBtnAddToQueue);
    }

    function onBtnAddToQueue(e) {
        filmsApiService.queueLocalStorage(movieId);
        e.target.textContent = 'remove from queue';
        e.target.style.backgroundColor = '#ff6b01';
        e.target.style.color = '#ffffff';
        e.target.style.borderColor = '#ff6b01';
  
        btnAddToQueue.removeEventListener('click', onBtnAddToQueue);
      btnAddToQueue.addEventListener('click', onBtnRemoveFromQueue);
  
      updateLibraryQueue()
    }

    function onBtnRemoveFromQueue(e) {
      filmsApiService.queueLocalStorage(movieId);
      e.target.textContent = 'add to queue';
      e.target.style.backgroundColor = '#ffffff';
      e.target.style.color = '#000000';
      e.target.style.borderColor = '#000000';
        
      btnAddToQueue.removeEventListener('click', onBtnRemoveFromQueue);
      btnAddToQueue.addEventListener('click', onBtnAddToQueue);
    
      updateLibraryQueue()
    }
}

function updateLibraryQueue() {
    if (document.querySelector('.js-nav-library').classList.length === 3) {
      onBtnQueue();
    }
  }
    
// Реализация кнопок Watched и Queue в разделе My library

refs.btnQueue.addEventListener('click', onBtnQueue);
refs.btnWatched.addEventListener('click', onBtnWatched);

function onBtnWatched() {
  refs.btnQueue.classList.remove('add');
  refs.btnWatched.classList.add('add');

  updateWatched();
  
  // refs.btnQueue.addEventListener('click', onBtnQueue);
      // clearMoviesContainer();
}

function updateWatched() {
  let saveFilm = localStorage.getItem('watched');
    if (saveFilm) {
      const parceFilm = JSON.parse(saveFilm);

      for (let i = 0; i < parceFilm.MovieIDW.length; i += 1) {
        let id = parceFilm.MovieIDW[i];

      filmsApiService
        .getFullMovieInfo(id)
        .then(movieInfo => {
          createFilmCardsMarkUp([movieInfo]);
          removeHiddenVoteAverage();
        })
          .catch(error => console.log('error', error));
      }

    refs.btnQueue.addEventListener('click', onBtnQueue);
      clearMoviesContainer();
  }
}

function onBtnQueue() {
  refs.btnWatched.classList.remove('add');
  refs.btnQueue.classList.add('add');

  updateQueue();

  //  refs.btnWatched.addEventListener('click', onBtnWatched);
      // clearMoviesContainer();
}
  

function updateQueue() {
  let saveFilm = localStorage.getItem('queue');
    if (saveFilm) {
      const parceFilm = JSON.parse(saveFilm);

      for (let i = 0; i < parceFilm.MovieIDQ.length; i += 1) {
        let id = parceFilm.MovieIDQ[i];

        filmsApiService.getFullMovieInfo(id).then(movieInfo => {
          createFilmCardsMarkUp([movieInfo]);
          removeHiddenVoteAverage();
        }).catch(error => console.log('error', error));
      }

      refs.btnWatched.addEventListener('click', onBtnWatched);
      clearMoviesContainer();
  }
  
}

// Изменение стилей, очистка контейнера и рендеринг из localStories при клике на My Library
refs.library.addEventListener('click', onLibraryClick);

function onLibraryClick(e) {
  e.preventDefault();
  clearSlider();
  clearPaginationEl();
  clearMoviesContainer();

  e.target.classList.add('nav-link-current');
  refs.home.classList.remove('nav-link-current');
  refs.overlay.classList.add('library-open');
  refs.searchForm.classList.add('is-hidden');
  refs.btnsLibrary.classList.remove('is-hidden');
  refs.btnQueue.classList.add('add');
  onBtnQueue();
}

//додає рейтинг в бібліотеку
function removeHiddenVoteAverage() {
  document
    .querySelectorAll('.film-vote-background')
    .forEach(el => el.classList.remove('visually-hidden'));
}


function renderMarkup(moviesArray) {
  refs.cardLibrary.innerHTML = cardFilmsTpl(moviesArray);
  trailer.createTrailerLink(document.querySelectorAll('.btn-youtube'));
}

