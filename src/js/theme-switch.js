import getRefs from "./refs";

//меняет цвет темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  GRAY: 'grey-background-theme',
};

const refs = getRefs();

// console.log(refs.modalContent);

const delClassElem = () => {
  refs.body.classList.remove(Theme.LIGHT, Theme.DARK);
  refs.sliderWrapper.classList.remove(Theme.LIGHT, Theme.DARK);
  refs.sliderWrappeBtnLeft.classList.remove(Theme.LIGHT, Theme.GRAY);
  refs.sliderWrappeBtnRight.classList.remove(Theme.LIGHT, Theme.GRAY);
  refs.footer.classList.remove(Theme.LIGHT, Theme.GRAY);
}
  
refs.themeSwitcher.addEventListener('change', () => {
  delClassElem();
  if (refs.themeSwitcher.checked) {
    localStorage.setItem('Theme','darkTheme');
    refs.body.classList.add(Theme.DARK);
    refs.sliderWrapper.classList.add(Theme.DARK);
    refs.sliderWrappeBtnLeft.classList.add(Theme.GRAY);
    refs.sliderWrappeBtnRight.classList.add(Theme.GRAY);
    refs.footer.classList.add(Theme.GRAY);
       } else {
    localStorage.setItem('Theme','lightTheme');
    refs.body.classList.add(Theme.LIGHT);
    refs.sliderWrapper.classList.add(Theme.LIGHT);
      }
});
    if(localStorage.getItem('Theme') === 'darkTheme'){
      refs.themeSwitcher.setAttribute('checked', true);
      refs.body.classList.add(Theme.DARK);
      refs.sliderWrapper.classList.add(Theme.DARK);
      refs.sliderWrappeBtnLeft.classList.add(Theme.GRAY);
      refs.sliderWrappeBtnRight.classList.add(Theme.GRAY);
      refs.footer.classList.add(Theme.GRAY);
   }