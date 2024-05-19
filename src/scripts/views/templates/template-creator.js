import CONFIG from "../../globals/config.js";

const small = 'small/';
const medium = 'medium/';
const large = 'large/';

const createSkeletonRestaurantTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
        <div class="list-item">
            <img class="list-item-thumbnail" src="../../../public/images/placeholder.png" alt="skeleton" width="100" height="350px">
            <div class="list-item-city skeleton">Lorem ipsum</div>
            <div class="list-item-content">
                <p class="list-item-rating skeleton">Lorem ipsum dolor sit amet</p>
                <h1 class="list-item-title skeleton">Lorem ipsum</h1>
                <div class="list-item-description skeleton">Lorem ipsum dolor sit amet</div>
                <a href="#">
                    <button class="read-more skeleton">Lorem</button>
                </a>
            </div>
        </div>
`;
    }
    return template;
};

const createSkeletonRestaurantDetail = () => {
    let template = '';

    template += `
        <div class="detail">
            <div class="restaurant-item">
                <div class="restaurant-img">
                    <img src="../../../public/images/placeholder.png" alt="skeleton">
                </div>
                <div class="restaurant-detail">
                    <div class="skeleton">Lorem ipsum</div>
                    <p class="skeleton">Lorem ipsum dolor sit amet</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis</p>
                </div>
            </div>
            <div class="restaurant-description">
                <p class="skeleton">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
            </div>
        </div>
    `;
    return template;
};

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
        <div class="restaurant-item">
            <div class="restaurant-img">
                <div class="button">
                    <div class="like-button"></div>
                </div>
                <picture>
                    <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId}">
                    <source class="lazyload" media="(max-width: 1200px)" data-srcset="${CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId}">
                    <img class="lazyload" src="../../../public/images/placeholder.png" crossorigin="anonymous" 
                        data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + large + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city || '-'}">
                </picture>
            </div>
        </div>
        <div class="restaurant-detail" tabindex="0">
                <h1 class="list-item-title">${restaurant.name}</h1>
                <p class="restaurant-rating">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating}</span></p>
                <p class="address"><i class="fa-solid fa-map-marker-alt"></i> <span>${restaurant.address}, ${restaurant.city}</span></p>
                <p class="categories">Kategori : <span>${restaurant.categories.map((kategori) => kategori.name).join(", ")}</span></p>
                <p>Makanan : </p>
                <span>${restaurant.menus.foods.map((food) => food.name).join(", ")}</span>
                <p>Minuman : </p>
                <span>${restaurant.menus.drinks.map((drink) => drink.name).join(", ")}</span>
            </div>
        <div class="restaurant-description" tabindex="0">
            <div class="menu">Deskripsi :</div>
            <p>${restaurant.description}</p>
        </div>
    </div>
    <div class="review">
        <h2>Review</h2>
        <div class="card-review">
            ${restaurant.customerReviews.map((review) => `
            <div class="review-item">
                <div class="reviewer-item">
                    <i class="fa-solid fa-circle-user"></i>
                    <div class="reviewer">
                        <p>${review.name}</p>
                        <p>${review.date}</p>
                    </div>
                </div>
                <div class="description-review">
                    <p>${review.review}</p>
                </div>
            </div>
            `).join("")}
        </div>
    </div>
    <form class="add-review-user">
        <h2>Tambahkan Review</h2>
        <label for="name">Nama</label>
        <input type="text" name="name" placeholder="Ketik Nama..." class="inputName" />
        <label for="review">Review</label>
        <textarea type="text" name="review" placeholder="Ketik Review..." class="inputDescription"></textarea>
        <div class="submit">
            <button type="submit">Kirim</button>
        </div>
    </form>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="list-item">
    <picture>
        <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId}">
        <source class="lazyload" media="(max-width: 1200px)" data-srcset="${CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId}">
        <img class="list-item-thumbnail lazyload" src="../../../public/images/placeholder.png" crossorigin="anonymous" 
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + large + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city || '-'}">
    </picture>
    <div class="list-item-city" tabindex="0">Kota ${restaurant.city || '-'}</div>
    <div class="list-item-content">
        <p class="list-item-rating" tabindex="0">
            Rating : <i class="fa-solid fa-star"></i>${restaurant.rating || '-'}
        </p>
        <h1 class="list-item-title" tabindex="0">${restaurant.name || '-'}</h1>
        <div class="list-item-description" tabindex="0">${restaurant.description || '-'}...</div>
        <a href="/#/detail/${restaurant.id}">
            <button class="read-more">Read More</button>
        </a>
    </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like red">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createSkeletonRestaurantTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
    createSkeletonRestaurantDetail,
};
