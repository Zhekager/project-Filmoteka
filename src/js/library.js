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


// const myLibraryBtnModalQueue = new MyLibraryBtns({ selector: '[data-action="btn-modal-queue"]', hidden: true });
// const myLibraryBtnModalWatched = new MyLibraryBtns({ selector: '[data-action="btn-modal-watched"]', hidden: true });
const myLibraryBtnQueue = new MyLibraryBtns({ selector: '[data-action="btn-queue"]'});
// const myLibraryBtnWatched = new MyLibraryBtns({ selector: '[data-action="btn-watched"]', hidden: true });

// myLibraryBtnModalQueue.refs.button.addEventListener('click', onLibraryBtnModalQueue);
// myLibraryBtnModalWatched.refs.button.addEventListener('click', onLibraryBtnModalWatched);
myLibraryBtnQueue.refs.button.addEventListener('click', onLibraryBtnQueue);
// myLibraryBtnWatched.refs.button.addEventListener('click', onLibraryBtnWatched);


// function onLibraryBtnModalQueue(e) {
//     myLibraryBtnModalQueue.disable();
//     console.log(e.target);
    // localStorage.setItem('queue', JSON.stringify({ name: '', age: '' }));
    // localStorage.removeItem('watched');
// }

// function onLibraryBtnModalWatched(e) {
//     myLibraryBtnModalWatched.disable();
//     localStorage.setItem('watched', JSON.stringify({ name: '', age: '' }));
//     localStorage.removeItem('queue');
// }

// refs.btnsLibrary.addEventListener('click', onLibraryBtnQueue)


function onLibraryBtnQueue() {
    // myLibraryBtnQueue.disable();
    savedData('queue');
}

// function onLibraryBtnWatched(e) {
// myLibraryBtnsShown.disable();
//     savedData('watched');
// }


function savedData(key) {
    const saveFilm = localStorage.getItem(key);

    if (saveFilm) {
        const parceFilm = JSON.parse(saveFilm);
        createFilmCardsMarkUp(saveFilm);
    // return parceFilm;
    }
}






let libraryLocal = {};

refs.library.addEventListener('click', onLibraryClick);

function onLibraryClick(e) {
    console.log(e.target);
    // if (!e.target) {
    //     refs.library.classList.remove('nav-link-current');
    
    //     return;
    // }
    refs.library.classList.add('nav-link-current');
    refs.home.classList.remove('nav-link-current');
    refs.overlay.classList.add('library-open');
    refs.searchForm.classList.add('is-hidden');
    refs.btnsLibrary.classList.remove('is-hidden');
    
    // localStorage.getItem(queue);
    // localStorage.getItem(watched);
}

















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


