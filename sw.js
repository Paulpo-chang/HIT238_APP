var cacheName = 'NAMEOFCACHE';
var filesToCache = [
  '/HIT238_APP/',
  '/HIT238_APP/index.html',

  '/HIT238_APP/CSS/index.css',
  '/HIT238_APP/CSS/list.css',
  '/HIT238_APP/CSS/My_list.css',
  '/HIT238_APP/CSS/part.css',
  '/HIT238_APP/JS/main.css',
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
