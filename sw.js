const CACHE_NAME = 'code-notepad-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png'
];

// ਇੰਸਟਾਲ ਹੋਣ ਵੇਲੇ ਫਾਈਲਾਂ ਨੂੰ ਸੇਵ (Cache) ਕਰਨਾ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// ਬਿਨਾਂ ਨੈੱਟ ਤੋਂ ਚੱਲਣ ਲਈ Cache ਵਿੱਚੋਂ ਫਾਈਲਾਂ ਦੇਣਾ
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
