const CACHE_NAME = 'stok-app-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './xlsx.full.min.js',
  './jszip.min.js',
  './FileSaver.min.js'
];

// Yükleme Anı: Dosyaları Önbelleğe Al
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Dosyalar önbelleğe alınıyor...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Çalışma Anı: İnternet yoksa Önbellekten Ver
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});