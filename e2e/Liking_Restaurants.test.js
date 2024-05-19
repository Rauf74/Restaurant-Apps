const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty p');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty p');

    I.amOnPage('/');
    I.wait(2);

    I.seeElement('.list-item-content a');

    const firstRestaurantName = await I.grabTextFrom(locate('.list-item-title').first());
    
    I.click(locate('.list-item-content a').first());
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list-item');

    const likedRestaurantName = await I.grabTextFrom('.list-item-title');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty p');

    I.amOnPage('/');
    I.wait(2);

    I.seeElement('.list-item-content a');

    const firstRestaurantName = await I.grabTextFrom(locate('.list-item-title').first());

    I.click(locate('.list-item-content a').first());
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list-item');

    const likedRestaurantName = await I.grabTextFrom('.list-item-title');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);

    I.click('.list-item-content a');
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    const FavoriteRestaurantIsEmpty = await I.grabTextFrom('.restaurantIsEmpty p');
    assert.strictEqual('Oops.. Restaurant is empty', FavoriteRestaurantIsEmpty);
});

Scenario('Add Review', async ({ I }) => {
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty p');

    I.amOnPage('/');

    I.seeElement('.list-item-content a');
    I.click(locate('.list-item-content a').first());

    I.seeElement('.add-review-user');

    const textReview = 'Makanannya super enak';
    const outputTextReview = 'Makanannya super enak';
    I.fillField('input', 'Rafli2150');
    I.fillField('textarea', textReview);

    I.click('button[type="submit"]');

    I.waitForElement('.description-review p', 10);
    I.seeElement('.description-review p');

    const lastReview = locate('.description-review p').last();
    const lastReviewText = await I.grabTextFrom(lastReview);

    assert.strictEqual(outputTextReview, lastReviewText);
});

Scenario('searching restaurants', async ({ I }) => {
    I.see('Oops.. Restaurant is empty', '.restaurantIsEmpty p');

    I.amOnPage('/');

    I.seeElement('.list-item-content a');

    const firstRestaurantName = await I.grabTextFrom(locate('.list-item-title').first());

    for (let i = 1; i <= 3; i++) {
        I.click(locate('.list-item-content a').at(i));
        I.waitForElement('#likeButton', 3);
        I.seeElement('#likeButton');
        I.click('#likeButton');
        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#query');

    const searchQuery = firstRestaurantName.substring(0, 3);

    I.fillField('#query', searchQuery);
    I.pressKey('Enter');
    I.waitForElement('.list-item', 3);

    const visibleLikedRestaurants = await I.grabTextFrom('.list-item-title');
    assert.strictEqual(visibleLikedRestaurants, firstRestaurantName);
});
