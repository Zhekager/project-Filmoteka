import MyLibraryBtns from './button.js';
import markUpFilmCardTpl from '../templates/films.hbs';
import FilmApiService from './apiService.js';
import { clearImagesContainer, renderTrendingMovies } from './showTrendingMovies.js';
import getRefs from './refs.js';

const refs = getRefs();

const filmsApiService = new FilmApiService();


// добавление в библиотеку при клике на кнопки в модальной карточке фильма
// const Library = {
//   QUEUE: 'queue-library',
//   WATCHED: 'watched-library',
// };

// const QUEUE_KEY = "queue";
// const WATCHED_KEY = "watched";


// let STORAGE_MOVIE = ;

export default function addToLibrary() {
    let btnAddToWatched = document.querySelector('#add-to-watched');
    let btnAddToQueue = document.querySelector('#add-to-queue');

    btnAddToWatched.addEventListener('click', onBtnAddToWatched);
    btnAddToQueue.addEventListener('click', onBtnAddToQueue);

    function onBtnAddToWatched(e) {
        console.log(e.target);
        let movieId = e.target.dataset.act;
        getMovie(movieId);

        let movieIdStorage = {
                    'Movie ID': movieId,
        }
        
        localStorage.setItem('watched', JSON.stringify(movieIdStorage));

    }

    function onBtnAddToQueue(e) {
        console.log(e.target);
        let movieId = e.target.dataset.act;
        getMovie(movieId);

        let movieIdStorage = {
                    'Movie ID': movieId,
        }
        
        localStorage.setItem('queue', JSON.stringify(movieIdStorage));
    }
}

// export default function addToLibrary() {
//     let btnAddToLibrary = document.querySelector('#add-to-library');
//     btnAddToLibrary.addEventListener('click', onBtnAddToLibrary);

//     function onBtnAddToLibrary(e) {
//         e.target.disabled = true;
//         console.log(e.target);
//         let movieId = e.target.dataset.act;

//         getMovie(movieId);

//         let movieIdStorage = {
//                     'Movie ID': movieId,
//         }
        
//         localStorage.setItem(STORAGE_MOVIE, JSON.stringify(movieIdStorage));
//     };
// }

function getMovie(id) {
    filmsApiService.getFullMovieInfo(id)
        .then(movieInfo => {
            const markup = markUpFilmCardTpl(movieInfo);
        })
        .catch(error => console.log('error', error));
   
}


// Изменение стилей, очистка контейнера и рендеринг из localStories при клике на My Library
refs.library.addEventListener('click', onLibraryClick);

function onLibraryClick(e) {
    e.preventDefault();
    clearImagesContainer()
    
        refs.library.classList.add('nav-link-current');
        refs.home.classList.remove('nav-link-current');
        refs.overlay.classList.add('library-open');
        refs.searchForm.classList.add('is-hidden');
        refs.btnsLibrary.classList.remove('is-hidden');
    
        // localStorage.getItem(queue);
        // localStorage.getItem(watched);

}

// Изменение стилей и рендеринг при клике на home и logo   
refs.logo.addEventListener('click', onLogo);
refs.home.addEventListener('click', onHome);

function onLogo(e) {
    e.preventDefault();
    toggleHomeLogo()
}

function onHome(e) {
    e.preventDefault();
    toggleHomeLogo()
}

function toggleHomeLogo() {
refs.home.classList.add('nav-link-current');
    refs.library.classList.remove('nav-link-current');
    refs.searchForm.classList.remove('is-hidden');
    refs.btnsLibrary.classList.add('is-hidden');
    refs.overlay.classList.remove('library-open');
    renderTrendingMovies();
}



    // const myLibraryBtnQueue = new MyLibraryBtns({ selector: '[data-action="btn-queue"]'});
    // const myLibraryBtnWatched = new MyLibraryBtns({ selector: '[data-action="btn-watched"]'});

    // myLibraryBtnQueue.refs.button.addEventListener('click', onLibraryBtnQueue);
    // myLibraryBtnWatched.refs.button.addEventListener('click', onLibraryBtnWatched);


    // function onLibraryBtnModalWatched(e) {
    //     myLibraryBtnModalWatched.disable();
    //     localStorage.setItem('watched', JSON.stringify({ name: '', age: '' }));
    //     localStorage.removeItem('queue');
    // }

    // refs.btnsLibrary.addEventListener('click', onLibraryBtnQueue)


    // function onLibraryBtnQueue() {
    //     // myLibraryBtnQueue.disable();
    //     savedData('queue');
    // }

    // function onLibraryBtnWatched(e) {
    // myLibraryBtnsShown.disable();
    //     savedData('watched');
    // }


    // function savedData(key) {
    //     const saveFilm = localStorage.getItem(key);

    //     if (saveFilm) {
    //         const parceFilm = JSON.parse(saveFilm);
    //         createFilmCardsMarkUp(saveFilm);
    //     // return parceFilm;
    //     }
    // }


    // let libraryLocal = [];


    // const myLibraryBtnModalShown = new MyLibraryBtns({ selector: '[data-action="btn-modal-shown"]', hidden: true });
    // const myLibraryBtnsShown = new MyLibraryBtns({ selector: '[data-action="btn-library-shown"]', hidden: true });
    // myLibraryBtnModalShown.refs.button.addEventListener('click', onBtnLibraryModal);
    // myLibraryBtnsShown.refs.button.addEventListener('click', onBtnLibrary);


    // function onBtnLibraryModal() {
    //     myLibraryBtnModalShown.disable();
    //     localStorage.setItem(key, JSON.stringify({name: '', age: ''}));
    // }

    // function onBtnLibrary(e) {
    //     myLibraryBtnsShown.disable();
    //     const saveFilm = localStorage.getItem('queue');
    //     const parceFilm = JSON.stringify(saveFilm);
    //     return parceFilm;
    // }