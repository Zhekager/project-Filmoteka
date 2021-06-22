// import MyLibraryBtns from './button.js';
import markUpFilmCardTpl from '../templates/films.hbs';
import FilmApiService from './apiService.js';
import { clearImagesContainer, createFilmCardsMarkUp } from './showTrendingMovies.js';
import getRefs from './refs.js';

const refs = getRefs();

const filmsApiService = new FilmApiService();

export default function addToLibrary(movieId) {
    const btnAddToWatched = document.querySelector('#add-to-watched');
    const btnAddToQueue = document.querySelector('#add-to-queue');

    btnAddToWatched.addEventListener('click', onBtnAddToWatched);
    btnAddToQueue.addEventListener('click', onBtnAddToQueue);

    function onBtnAddToWatched(e) {
        filmsApiService.watchedLocalStorage(movieId)
            console.log('movieId', movieId);
            // e.target.disabled = true;  
        e.target.textContent = 'remove from watched';
        // btnAddToWatched.removeEventListener('click', nBtnAddToWatched);
    }
    

    function onBtnAddToQueue(e) {
        filmsApiService.queueLocalStorage(movieId)
            console.log('movieId', movieId);
        // e.target.disabled = true;
        e.target.textContent = 'remove from queue';
    }
}

refs.btnQueue.addEventListener('click', onBtnQueue);
refs.btnWatched.addEventListener('click', onBtnWatched);

function onBtnQueue() {
    let saveFilm = localStorage.getItem('queue');

    if (saveFilm) {
        const parceFilm = JSON.parse(saveFilm);

        for (let i = 0; i < parceFilm.MovieIDQ.length; i += 1) {
            let id = parceFilm.MovieIDQ[i];
    
            filmsApiService
                .getFullMovieInfo(id)
                .then(movieInfo => {
                    createFilmCardsMarkUp([movieInfo]);
                }).catch(error => console.log('error', error));
        }
        refs.btnQueue.removeEventListener('click', onBtnQueue);
        refs.btnWatched.addEventListener('click', onBtnWatched);
        clearImagesContainer();
    }
}

function onBtnWatched() {
    let saveFilm = localStorage.getItem('watched');
    
    if (saveFilm) {
        const parceFilm = JSON.parse(saveFilm);

        for (let i = 0; i < parceFilm.MovieIDW.length; i += 1) {
            let id = parceFilm.MovieIDW[i];
    
            filmsApiService
                .getFullMovieInfo(id)
                .then(movieInfo => {
                    createFilmCardsMarkUp([movieInfo]);
                }).catch(error => console.log('error', error));
        }
        refs.btnWatched.removeEventListener('click', onBtnWatched);
        refs.btnQueue.addEventListener('click', onBtnQueue);
        clearImagesContainer();
    }
}

// Изменение стилей, очистка контейнера и рендеринг из localStories при клике на My Library
refs.library.addEventListener('click', onLibraryClick);

function onLibraryClick(e) {
    e.preventDefault();
    // renderTrendingMovies();
    
    clearImagesContainer()
    
        refs.library.classList.add('nav-link-current');
        refs.home.classList.remove('nav-link-current');
        refs.overlay.classList.add('library-open');
        refs.searchForm.classList.add('is-hidden');
        refs.btnsLibrary.classList.remove('is-hidden');

     renderLibrary();
}

function renderLibrary() {
    let saveFilmWatched = localStorage.getItem('watched');
    let saveFilmQueue = localStorage.getItem('queue');

    if (saveFilmWatched || saveFilmQueue) {
        let parceFilmWatched = JSON.parse(saveFilmWatched);
        console.log(parceFilmWatched);
        let parceFilmQueue = JSON.parse(saveFilmQueue);
        console.log(parceFilmQueue);

        let parceLibraryObj = { ...parceFilmWatched, ...parceFilmQueue };
        console.log(parceLibraryObj);

        const parceLibraryArr = parceFilmWatched.MovieIDW.concat(parceFilmQueue.MovieIDQ);
        console.log(parceLibraryArr);
       
        for (let i = 0; i < parceLibraryArr.length; i += 1) {
            // if (parceLibraryArr[0] === parceLibraryArr[i]) {
            //     parceLibraryArr.shift();
            // }
             let id = parceLibraryArr[i];
                console.log(id);
            
            filmsApiService
                .getFullMovieInfo(id)
                .then(movieInfo => {
                    createFilmCardsMarkUp([movieInfo]);
                }).catch(error => console.log('error', error));
        }
    }
}
