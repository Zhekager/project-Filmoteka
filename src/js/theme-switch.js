//меняет цвет темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  GRAY: 'grey-background-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const modalContentRef = document.querySelector('.card-film');
const sliderWrapperRef = document.querySelector('.slider-wrapper');
const sliderWrappeBtnLeftRef = document.querySelector('.glide__arrow--left');
const sliderWrappeBtnRightRef = document.querySelector('.glide__arrow--right');
const footerRef = document.querySelector('.footer');

// console.log(modalContentRef);

const delClassElem = () => {
  bodyRef.classList.remove(Theme.LIGHT, Theme.DARK);
  sliderWrapperRef.classList.remove(Theme.LIGHT, Theme.DARK);
  sliderWrappeBtnLeftRef.classList.remove(Theme.LIGHT, Theme.GRAY);
  sliderWrappeBtnRightRef.classList.remove(Theme.LIGHT, Theme.GRAY);
  footerRef.classList.remove(Theme.LIGHT, Theme.GRAY);
}
  
themeSwitcherRef.addEventListener('change', () => {
  delClassElem();
  if (themeSwitcherRef.checked) {
    localStorage.setItem('Theme','darkTheme');
    bodyRef.classList.add(Theme.DARK);
    sliderWrapperRef.classList.add(Theme.DARK);
    sliderWrappeBtnLeftRef.classList.add(Theme.GRAY);
    sliderWrappeBtnRightRef.classList.add(Theme.GRAY);
        footerRef.classList.add(Theme.GRAY);
       } else {
    localStorage.setItem('Theme','lightTheme');
    bodyRef.classList.add(Theme.LIGHT);
    sliderWrapperRef.classList.add(Theme.LIGHT);
      }
});
    if(localStorage.getItem('Theme') === 'darkTheme'){
      themeSwitcherRef.setAttribute('checked', true);
      bodyRef.classList.add(Theme.DARK);
      sliderWrapperRef.classList.add(Theme.DARK);
      sliderWrappeBtnLeftRef.classList.add(Theme.GRAY);
      sliderWrappeBtnRightRef.classList.add(Theme.GRAY);
      footerRef.classList.add(Theme.GRAY);
   }