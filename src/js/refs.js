export default function getRefs() {
    return {
      body: document.querySelector('body'),
      logo: document.querySelector('.js-logo'),
      home: document.querySelector('.js-nav-home'),
      overlay: document.querySelector('.js-overlay'),
      searchForm: document.querySelector('#search-form'),
      library: document.querySelector('.js-nav-library'),
      btnsLibrary: document.querySelector('[data-action="btn-library-shown"]'),
      searchInput: document.querySelector('#searchQuery'),
      films: document.querySelector('.gallery'),
      btnQueue: document.querySelector('.js-btn-queue'),
      btnWatched: document.querySelector('.js-btn-watched'),
      // btnAddToQueue: document.querySelector('#add-to-queue'),
      // btnAddToWatched: document.querySelector('#add-to-watched'),
      loaderRef: document.querySelector('.loader'),
     navigation: document.querySelector('.navigation'),
      btnModalClose: document.querySelector('[data-modal-close]'),
  };
}

