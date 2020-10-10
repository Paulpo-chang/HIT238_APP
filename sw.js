var cacheName = 'APPcache';
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
  '/HIT238_APP/Restaurant_cafe.html',
  '/HIT238_APP/Restaurant_cafe_1.html',
  '/HIT238_APP/Restaurant_cafe_2.html',
  '/HIT238_APP/Restaurant_cafe_3.html',
  '/HIT238_APP/Restaurant_cafe_4.html',
  '/HIT238_APP/Restaurant_cafe_5.html',
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
  '/HIT238_APP/CSS/part.css',
  '/HIT238_APP/JS/main.js',
  '/HIT238_APP/Image/1.jpg',
  '/HIT238_APP/Image/2.jpg',
  '/HIT238_APP/Image/3.jpg',
  '/HIT238_APP/Image/4.jpg',
  '/HIT238_APP/Image/Berry_Springs.jpg',
  '/HIT238_APP/Image/Bunnings.jpg',
  '/HIT238_APP/Image/Casuarina_Beach.jpg',
  '/HIT238_APP/Image/Casuarina_Square.jpg',
  '/HIT238_APP/Image/Coles.jpg',
  '/HIT238_APP/Image/Cullen_Beach.jpg',
  '/HIT238_APP/Image/Holmes_Jungle.jpg',
  '/HIT238_APP/Image/La_Beach.jpg',
  '/HIT238_APP/Image/Lameroo_Beach.jpg',
  '/HIT238_APP/Image/litchfield_national_park.jpg',
  '/HIT238_APP/Image/Little_Miss_Korea.jpg',
  '/HIT238_APP/Image/Mary_River_National_Park.jpg',
  '/HIT238_APP/Image/mindil_beach.jpg',
  '/HIT238_APP/Image/Nightcliff_Beach.jpg',
  '/HIT238_APP/Image/NT_Oriental_Emporium.jpg',
  '/HIT238_APP/Image/Seafood_on_Cullen.jpg',
  '/HIT238_APP/Image/The_Jetty.jpg',
  '/HIT238_APP/Image/Wharf_One.jpg',
  '/HIT238_APP/Image/Woolworths.jpg',
  '/HIT238_APP/Image/working.jpg',
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
