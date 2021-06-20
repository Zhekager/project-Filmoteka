import MyLibraryBtns from './button.js';
import getRefs from './refs.js';
import createFilmCardsMarkUp from './showTrendingMovies'

const refs = getRefs();

// const Library = {
//   QUEUE: 'queue-library',
//   WATCHED: 'watched-library',
// };

// const LIBRARY_KEY = "library";


// const myLibraryBtnModalQueue = new MyLibraryBtns({ selector: '[data-action="btn-modal-queue"]', hidden: true });
// const myLibraryBtnModalWatched = new MyLibraryBtns({ selector: '[data-action="btn-modal-watched"]', hidden: true });
// const myLibraryBtnQueue = new MyLibraryBtns({ selector: '[data-action="btn-queue"]', hidden: true });
// const myLibraryBtnWatched = new MyLibraryBtns({ selector: '[data-action="btn-watched"]', hidden: true });

// myLibraryBtnModalQueue.refs.button.addEventListener('click', onLibraryBtnModalQueue);
// myLibraryBtnModalWatched.refs.button.addEventListener('click', onLibraryBtnModalWatched);
// myLibraryBtnQueue.refs.button.addEventListener('click', onLibraryBtnQueue);
// myLibraryBtnWatched.refs.button.addEventListener('click', onLibraryBtnWatched);


// function onLibraryBtnModalQueue(e) {
//     myLibraryBtnModalQueue.disable();
//     localStorage.setItem('queue', JSON.stringify({ name: '', age: '' }));
//     localStorage.removeItem('watched');
// }

// function onLibraryBtnModalWatched(e) {
//     myLibraryBtnModalWatched.disable();
//     localStorage.setItem('watched', JSON.stringify({ name: '', age: '' }));
//     localStorage.removeItem('queue');
// }

// function onLibraryBtnQueue(e) {
//     myLibraryBtnsShown.disable();
//     savedData('queue');
    
// }

// function onLibraryBtnWatched(e) {
// myLibraryBtnsShown.disable();
//     savedData('watched');
// }


// function savedData(key) {
//     const saveFilm = localStorage.getItem(key);

//     if (saveFilm) {
//         const parceFilm = JSON.stringify(saveFilm);
//         createFilmCardsMarkUp(saveFilm);
//     // return parceFilm;
//     }
// }






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


