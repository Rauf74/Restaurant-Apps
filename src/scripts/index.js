import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './component/addReview.js';
import './component/detailContent.js';
import './component/mainContent.js';
import './component/header.js';
import './component/skipLink.js';
import './component/hero.js';
import './component/footer.js';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#navigation'),
    content: document.querySelector('main'),
    nav: document.querySelector('#navigation>li>a'),
    favNav: document.querySelector('.fav-nav'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', async () => {
    app.renderPage();
    await swRegister();
});
