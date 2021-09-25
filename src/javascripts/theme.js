const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  themeSwitcher: document.querySelector('#theme-switch-toggle'),
};

refs.themeSwitcher.addEventListener('click', onThemeSwitcherClick);
getTheme();

function onThemeSwitcherClick(evt) {
  if (evt.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    setTheme(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    setTheme(Theme.LIGHT);
  }
}

function setTheme(theme) {
  if (theme === Theme.DARK) {
    refs.themeSwitcher.checked = true;
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
  } else {
    refs.themeSwitcher = false;
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
  }
}

function getTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    setTheme(Theme.DARK);
  } else {
    setTheme(Theme.LIGHT);
  }
}