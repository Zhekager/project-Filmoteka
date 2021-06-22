// import MyLibraryBtns from './button.js';
import markUpFilmCardTpl from '../templates/films.hbs';
import FilmApiService from './apiService.js';
import { clearImagesContainer } from './showTrendingMovies.js';
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
    const btnAddToWatched = document.querySelector('#add-to-watched');
    const btnAddToQueue = document.querySelector('#add-to-queue');

    btnAddToWatched.addEventListener('click', onBtnAddToWatched);
    btnAddToQueue.addEventListener('click', onBtnAddToQueue);

    function onBtnAddToWatched(e) {
        console.log(e.target);

        let movieId = e.target.dataset.act;
        getMovie(movieId);

        let movieIdStorage = {
                    'Movie ID': movieId,
        }

        let listWatched = [];
        listWatched.push(movieIdStorage);

        localStorage.setItem('watched', JSON.stringify(movieIdStorage));
        // e.target.textContent = 'remove from watched';
        
    }
    

    function onBtnAddToQueue(e) {
        console.log(e.target);
        let movieId = e.target.dataset.act;
        getMovie(movieId);

        let movieIdStorage = {
                    'Movie ID': movieId,
        }

        let listQueue = [];
        listQueue.push(movieIdStorage);
        localStorage.setItem("queue", JSON.stringify(movieIdStorage));
            
        
        // localStorage.setItem('queue', JSON.stringify(movieIdStorage));
    // e.target.disabled = true;
        // e.target.textContent = 'remove from queue';
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
// e.target.disabled = true;
//     };
// }

function getMovie(id) {
    filmsApiService.getFullMovieInfo(id)
        .then(movieInfo => {
            const markup = markUpFilmCardTpl(movieInfo);
        })
        .catch(error => console.log('error', error));
   
}
    

refs.btnQueue.addEventListener('click', onBtnQueue);
refs.btnWatched.addEventListener('click', onBtnWatched);

    function onBtnQueue() {
        savedData('queue');
    }

    function onBtnWatched() {
        savedData('watched');
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


    function savedData(key) {
        const saveFilm = localStorage.getItem(key);

        if (saveFilm) {
            const parceFilm = JSON.parse(saveFilm);
            createFilmCardsMarkUp(saveFilm);
        // return parceFilm;
        }
}
    


    // let libraryLocal = [];

    // function onBtnLibrary(e) {
    //     myLibraryBtnsShown.disable();
    //     const saveFilm = localStorage.getItem('queue');
    //     const parceFilm = JSON.stringify(saveFilm);
    //     return parceFilm;
    // }