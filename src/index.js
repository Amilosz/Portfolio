// eslint-disable-next-line no-unused-vars
import initMd from 'markdown-element';
import initBlogPosts from './blog/index';
import initAboutMe from './about-me/index'
import startGame from './game/index'
import startJoke from './joke/index'


initAboutMe();

window.controls = {
    startGame,
    startJoke
}