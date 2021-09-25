import theme from './theme';
import '../styles.css';
import dishes from '../data/menu.json';
import template from '../templates/main.hbs';

const refs = {
  createMenu: document.querySelector('.js-menu'),
};

refs.createMenu.innerHTML = template(dishes);