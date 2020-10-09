var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/Beach_1.html',
  '/Beach_2.html',
  '/Beach_3.html',
  '/Beach_4.html',
  '/Beach_5.html',
  '/Beach.html',
  '/National_park.html',
  '/National_park_1.html',
  '/National_park_2.html',
  '/National_park_3.html',
  '/National_park_4.html',
  '/National_park_5.html',
  '/Restauramt_cafe.html',
  '/Restauramt_cafe_1.html',
  '/Restauramt_cafe_2.html',
  '/Restauramt_cafe_3.html',
  '/Restauramt_cafe_4.html',
  '/Restauramt_cafe_5.html',
  '/Shopping.html',
  '/Shopping_1.html',
  '/Shopping_2.html',
  '/Shopping_3.html',
  '/Shopping_4.html',
  '/Shopping_5.html',
  '/Shopping.html',
  '/Under building.html',
  '/CSS/index.css',
  '/CSS/list.css',
  '/CSS/My_list.css',
  '/CSS/part.css'
  '/JS/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
