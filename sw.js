const CACHE_NAME = 'stok-app-final-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './xlsx-populate.min.js',
  './FileSaver.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});