// Install event
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('your-app-cache-name').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles/style.css',
          '/scripts/script.js',
          '/icon.png',
          // Add other assets that you want to cache for offline use
        ]);
      })
    );
  });
  
  // Fetch event
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });