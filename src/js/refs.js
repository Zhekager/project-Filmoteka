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
    btnQueue: document.querySelector('[data-action="btn-queue"]'),
    btnWatched: document.querySelector('[data-action="btn-watched"]'),
    btnAddToQueue: document.querySelector('#add-to-queue'),
    btnAddToWatched: document.querySelector('#add-to-watched'),
    navigation: document.querySelector('.navigation'),
    btnModalClose: document.querySelector('[data-modal-close]'),
    themeSwitcher: document.querySelector('#theme-switch-toggle'),
    modalContent: document.querySelector('.cardFilm'),
    sliderWrapper: document.querySelector('.slider-wrapper'),
    sliderWrappeBtnLeft: document.querySelector('.glide__arrow--left'),
    sliderWrappeBtnRight: document.querySelector('.glide__arrow--right'),
    footer: document.querySelector('.footer'),
    copyrightLogo: document.querySelector('.copyright-logo'),
};
}

