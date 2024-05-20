import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const restaurantListDbApi = new Route(
    ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/list'),
    new StaleWhileRevalidate({
        cacheName: 'Restaurant List Cache API',
    }),
);

const restaurantImageDbApi = new Route(
    ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/')
                || url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/')
                || url.href.startsWith('https://restaurant-api.dicoding.dev/images/large/'),
    new StaleWhileRevalidate({
        cacheName: 'Restaurant Image Cache API',
    }),
);

const restaurantDetailDbApi = new Route(
    ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/detail/'),
    new StaleWhileRevalidate({
        cacheName: 'Restaurant Detail Cache API',
    }),
);

registerRoute(restaurantListDbApi);
registerRoute(restaurantImageDbApi);
registerRoute(restaurantDetailDbApi);

self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('push', () => {
    console.log('Service Worker: Pushed');
});
