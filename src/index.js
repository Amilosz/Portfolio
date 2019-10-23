// eslint-disable-next-line no-unused-vars
// noinspection ES6UnusedImports
import initMd from 'markdown-element';
import initAboutMe from './about-me/index';
import startGame from './game/index';
import startJoke from './joke/index';
import initBlog from './blog/index';
import initGHRepos from './github/index';

initAboutMe();
initBlog();
initGHRepos();

window.controls = {
  startGame,
  startJoke
};
