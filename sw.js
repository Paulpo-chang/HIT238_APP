var cacheName = 'HIT238_APP';
var filesToCache = [
  '/HIT238_APP/',
  '/HIT238_APP/index.html',
  '/HIT238_APP/Beach_1.html',
  '/HIT238_APP/Beach_2.html',
  '/HIT238_APP/Beach_3.html',
  '/HIT238_APP/Beach_4.html',
  '/HIT238_APP/Beach_5.html',
  '/HIT238_APP/Beach.html',
  '/HIT238_APP/National_park.html',
  '/HIT238_APP/National_park_1.html',
  '/HIT238_APP/National_park_2.html',
  '/HIT238_APP/National_park_3.html',
  '/HIT238_APP/National_park_4.html',
  '/HIT238_APP/National_park_5.html',
  '/HIT238_APP/Restauramt_cafe.html',
  '/HIT238_APP/Restauramt_cafe_1.html',
  '/HIT238_APP/Restauramt_cafe_2.html',
  '/HIT238_APP/Restauramt_cafe_3.html',
  '/HIT238_APP/Restauramt_cafe_4.html',
  '/HIT238_APP/Restauramt_cafe_5.html',
  '/HIT238_APP/Shopping.html',
  '/HIT238_APP/Shopping_1.html',
  '/HIT238_APP/Shopping_2.html',
  '/HIT238_APP/Shopping_3.html',
  '/HIT238_APP/Shopping_4.html',
  '/HIT238_APP/Shopping_5.html',
  '/HIT238_APP/Under building.html',
  '/HIT238_APP/CSS/index.css',
  '/HIT238_APP/CSS/list.css',
  '/HIT238_APP/CSS/My_list.css',
  '/HIT238_APP/CSS/part.css'
  '/HIT238_APP/JS/main.js',
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
