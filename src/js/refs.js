export default function getRefs() {
    return {
        logo: document.querySelector('.js-logo'),
        home: document.querySelector('.js-nav-home'),
        library: document.querySelector('.js-nav-library'),
        searchInput: document.querySelector('#searchQuery'),
        films: document.querySelector('.js-film-list'),
        btnQueue: document.querySelector('.js-btn-queue'),
        btnWatched: document.querySelector('.js-btn-watched'),
        btnModalQueue: document.querySelector('.btn-queue'),
        btnModalWatched: document.querySelector('.btn-watched'),
        loaderRef: document.querySelector('.loader'),
  };
}

