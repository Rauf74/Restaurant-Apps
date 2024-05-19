import { createRestaurantItemTemplate } from '../../templates/template-creator.js';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
        <div class="content1">
            <div class="fav-card">
                <div class="fav-title">Favorite Restaurants</div>
                <div class="search-container"> 
                    <input id="query" type="text" placeholder="Type restaurants name...">
                    <div id="searchIcon">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
            <div class="list" id="grid">
            
            </div>
        </div>
    `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('grid').innerHTML = html;

        document.getElementById('grid').dispatchEvent(new Event('grid:updated'));
    }

    _getEmptyRestaurantTemplate() {
        return `
        <style>
            #grid {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </style>
        <div class="restaurantIsEmpty">
            <img src="../../../../public/images/Waiters.png" alt="Restaurant is empty" width="500px" height="500px">
            <p>Oops.. Restaurant is empty</p>
        </div>`;
    }
}

export default FavoriteRestaurantSearchView;