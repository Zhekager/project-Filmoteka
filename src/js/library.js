import MyLibraryBtns from './button.js';
import markUpFilmCardTpl from '../templates/films.hbs';
import FilmApiService from './apiService.js';
import getRefs from './refs.js';

const refs = getRefs();

const filmsApiService = new FilmApiService();

// const Library = {
//   QUEUE: 'queue-library',
//   WATCHED: 'watched-library',
// };

const QUEUE_KEY = "queue";
const WATCHED_KEY = "watched";


// export default function addToLibrary() {
//     let btnAddToWatched = document.querySelector('#add-to-watched');
//     let btnAddToQueue = document.querySelector('#add-to-queue');

//     btnAddToWatched.addEventListener('click', onBtnAddToWatched);
//     btnAddToQueue.addEventListener('click', onBtnAddToQueue);

//     function onBtnAddToWatched(e) {
//         console.log(e.target);
//         let id = e.target.dataset.act;
//         getMovie(id);

//     }

//     function onBtnAddToQueue(e) {
//         console.log(e.target);
//         let id = e.target.dataset.act;
//         getMovie(id);
//     }
// }


export default function addToLibrary() {
    let btnAddToLibrary = document.querySelector('#add-to-library');
    btnAddToLibrary.addEventListener('click', onBtnAddToLibrary);

    function onBtnAddToLibrary(e) {
        // myLibraryBtnModalQueue.disable();
        console.log(e.target);
        let id = e.target.dataset.act;
        getMovie(id);
    
        // localStorage.setItem('queue', JSON.stringify(id));
        // localStorage.removeItem('watched');
    }
}

function getMovie(id) {
    filmsApiService.getFullMovieInfo(id)
        .then(movieInfo => {
            const markup = markUpFilmCardTpl(movieInfo);
        })
        .catch(error => console.log('error', error));
   
}


    refs.library.addEventListener('click', onLibraryClick);

    function onLibraryClick(e) {
        console.log(e.target);
    
        refs.library.classList.add('nav-link-current');
        refs.home.classList.remove('nav-link-current');
        refs.overlay.classList.add('library-open');
        refs.searchForm.classList.add('is-hidden');
        refs.btnsLibrary.classList.remove('is-hidden');
    
        // localStorage.getItem(queue);
        // localStorage.getItem(watched);

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