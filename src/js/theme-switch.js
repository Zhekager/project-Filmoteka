//меняет цвет темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleSwitch = document.querySelector('#theme-switch-toggle');
const modalCardFilmSwitch = document.querySelector('.card-film');
const bodyStyle = document.body.classList;

setDarkTheme();
toggleSwitch.addEventListener('change', onToggleTheme);
bodyStyle.add(Theme.LIGHT);

function onToggleTheme(e) {
  e.currentTarget.checked
    ? bodyStyle.add(Theme.DARK) & bodyStyle.remove(Theme.LIGHT)
    : bodyStyle.add(Theme.LIGHT) & bodyStyle.remove(Theme.DARK);
  localStorage.setItem('theme', bodyStyle.value);
}

function setDarkTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    bodyStyle.add(savedTheme);
  }
  if (bodyStyle.value === Theme.DARK) {
    toggleSwitch.checked = true;
  }
}