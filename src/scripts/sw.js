import CacheHelper from "./utils/cache-helper.js";

const assetsToCache = [
    "./",
    "./icons/icon-48x48.png",
    "./icons/icon-72x72.png",
    "./icons/icon-96x96.png",
    "./icons/icon-128x128.png",
    "./icons/icon-192x192.png",
    "./icons/icon-384x384.png",
    "./icons/icon-512x512.png",
    "./index.html",
    "./favicon.png",
    "./app.bundle.js",
    "./app.webmanifest",
    "./sw.bundle.js",
];

self.addEventListener("install", (event) => {
    console.log("Service Worker: Installed");
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activated");
    event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
});
