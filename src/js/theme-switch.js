//меняет цвет темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const modalContentRef = document.querySelector('.card-film');
const sliderWrapperRef = document.querySelector('.slider-wrapper');
const sliderWrappeBtnLeftRef = document.querySelector('.glide__arrow--left');
const sliderWrappeBtnRightRef = document.querySelector('.glide__arrow--right');
const footerRef = document.querySelector('.footer');

// console.log(sliderWrappeBtnLeftRef);

const delClassElem = () => {
  bodyRef.classList.remove(Theme.LIGHT, Theme.DARK);
  sliderWrapperRef.classList.remove(Theme.LIGHT, Theme.DARK);
  sliderWrappeBtnLeftRef.classList.remove(Theme.LIGHT, Theme.DARK);
  sliderWrappeBtnRightRef.classList.remove(Theme.LIGHT, Theme.DARK);
    // footerRef.classList.remove(Theme.LIGHT, Theme.DARK);
}
  
themeSwitcherRef.addEventListener('change', () => {
  delClassElem();
  if (themeSwitcherRef.checked) {
    localStorage.setItem('Theme','darkTheme');
    bodyRef.classList.add(Theme.DARK);
    sliderWrapperRef.classList.add(Theme.DARK);
    sliderWrappeBtnLeftRef.classList.add(Theme.DARK);
    sliderWrappeBtnRightRef.classList.add(Theme.DARK);
        // footerRef.classList.add(Theme.DARK);
       } else {
    localStorage.setItem('Theme','lightTheme');
    bodyRef.classList.add(Theme.LIGHT);
    sliderWrapperRef.classList.add(Theme.LIGHT);
    sliderWrappeBtnLeftRef.classList.add(Theme.LIGHT);
    sliderWrappeBtnRightRef.classList.add(Theme.LIGHT);
       // footerRef.classList.add(Theme.LIGHT);
      }
});
    if(localStorage.getItem('Theme') === 'darkTheme'){
      themeSwitcherRef.setAttribute('checked', true);
      bodyRef.classList.add(Theme.DARK);
      sliderWrapperRef.classList.add(Theme.DARK);
      sliderWrappeBtnLeftRef.classList.add(Theme.DARK);
      sliderWrappeBtnRightRef.classList.add(Theme.DARK);
    // footerRef.classList.add(Theme.DARK);
   }