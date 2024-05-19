import RestaurantDbSource from "../../data/restaurantdb-source.js";
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from "../templates/template-creator.js";

const Home = {
    async render() {
        return `
        <div class="loader" id="loader"></div>
      <main-content></main-content>
    `;
    },

    async afterRender() {
        const loader = document.getElementById("loader");
        const mainContent = document.querySelector("main-content");
        const header = document.querySelector("header-component");
        const hero = document.querySelector("hero-component");
        const footer = document.querySelector("footer-component");
        header.style.display = "none";
        hero.style.display = "none";
        mainContent.style.display = "none";
        footer.style.display = "none";
        loader.style.display = "block";

        await new Promise(resolve => setTimeout(resolve, 1000));

        const restoList = document.getElementById("grid");

        restoList.innerHTML = createSkeletonRestaurantTemplate(15);

        const restaurants = await RestaurantDbSource.restaurantList();
        const skipLink = document.querySelector("skip-link>a");

        restoList.innerHTML = '';

        restaurants.forEach((restaurant) => {
            restoList.innerHTML += createRestaurantItemTemplate(restaurant);
        });

        loader.style.display = "none";
        header.style.display = "block";
        hero.style.display = "block";
        mainContent.style.display = "block";
        footer.style.display = "block";
        skipLink.setAttribute("href", "#content");
    },
};

export default Home;
