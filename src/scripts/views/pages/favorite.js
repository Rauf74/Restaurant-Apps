import FavoriteRestaurantIdb from '../../data/fav-restaurant-indexedDB.js';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view.js';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter.js';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter.js';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
    async render() {
        const template = await view.getTemplate();

        const combinedTemplate = `
          <div class="loader" id="loader"></div>
          ${template}
      `;
        return combinedTemplate;
    },

    async afterRender() {
        const loader = document.getElementById('loader');
        const header = document.querySelector('header-component');
        const hero = document.querySelector('hero-component');
        // const cardTitle = document.querySelector(".card-title");
        const searchCard = document.querySelector('.fav-card');
        const footer = document.querySelector('footer-component');
        header.style.display = 'none';
        hero.style.display = 'none';
        searchCard.style.display = 'none';
        // cardTitle.style.display = "none";
        footer.style.display = 'none';
        loader.style.display = 'block';

        await new Promise((resolve) => setTimeout(resolve, 1000));

        // const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restoList = document.getElementById('grid');
        const skipLink = document.querySelector('skip-link>a');

        restoList.style.marginTop = '60px';
        skipLink.setAttribute('href', '#content');

        // if (restaurants.length === 0) {
        //     restoList.innerHTML = `
        //   <div class="empty-content">
        //     <h2>Tidak ada Restoran Favorit</h2>
        //     <p>Ayo tambahkan beberapa!</p>
        //   </div>
        // `;
        // }
        // restaurants.forEach((restaurant) => {
        //     restoList.innerHTML += createRestaurantItemTemplate(restaurant);
        // });
        // else {
        new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        // }

        loader.style.display = 'none';
        header.style.display = 'block';
        searchCard.style.display = 'flex';
        footer.style.display = 'block';
    },
};

export default Favorite;
