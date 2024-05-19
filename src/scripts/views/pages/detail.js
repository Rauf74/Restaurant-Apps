import UrlParser from "../../routes/url-parser.js";
import RestaurantDbSource from "../../data/restaurantdb-source.js";
import postReview from "../../utils/addReview.js";
import { createRestaurantDetailTemplate } from "../templates/template-creator.js";
import LikeButtonPresenter from "../../utils/like-button-presenter.js";
import FavoriteRestaurantIdb from "../../data/fav-restaurant-indexedDB.js";

const Detail = {
    async render() {
        return `
        <div class="loader" id="loader"></div>
      <detail-content></detail-content>
    `;
    },

    async afterRender() {
        const loader = document.getElementById("loader");
        const detailContent = document.querySelector("detail-content");
        const header = document.querySelector("header-component");
        const hero = document.querySelector("hero-component");
        const footer = document.querySelector("footer-component");
        loader.style.display = "block";
        detailContent.style.display = "none";
        header.style.display = "none";
        hero.style.display = "none";
        footer.style.display = "none";

        await new Promise(resolve => setTimeout(resolve, 1000));

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestaurantDbSource.detailRestaurant(url.id);
        const detailContainer = document.querySelector(".detail-container");
        const skipLink = document.querySelector("skip-link>a");
        const mainContent = document.querySelector("#content");

        mainContent.setAttribute("tabindex", "-1");
        skipLink.setAttribute("href", "#likeButton");

        detailContainer.innerHTML = createRestaurantDetailTemplate(resto);

        loader.style.display = "none";
        header.style.display = "block";
        detailContent.style.display = "block";
        footer.style.display = "block";

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector(".like-button"),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: resto.id,
                name: resto.name,
                pictureId: resto.pictureId,
                description: resto.description,
                city: resto.city,
                rating: resto.rating,
            },
        });

        const reviewContainer = document.querySelector(".add-review-user");
        const nameInput = reviewContainer.querySelector(".inputName");
        const reviewInput = reviewContainer.querySelector(".inputDescription");

        reviewContainer.addEventListener("submit", (event) => {
            event.preventDefault();

            postReview({
                url: url.id,
                name: nameInput.value,
                review: reviewInput.value,
            });

            reviewContainer.reset();
        });
    },
};

export default Detail;
