const cacheName = 'v2'; // Changed to v2 to force an update
const cacheAssets = [
  './',                // Caches the main folder/index
  'index.html',
  'manifest.json',      // Crucial for PWA installation
  'combat_button.jpg',
  'grunge_left.png',
  'grunge_right.png',
  'paper_bg.jpg',
  'rations.jpg',
  'start.jpg',
  'icon.png',
  'torches.jpg'
];

// Install Event
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching files...');
      return cache.addAll(cacheAssets);
    })
  );
});

// Fetch Event (Cache-First Strategy)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      // Return cache hit, else fetch from network
      return response || fetch(e.request);
    })
  );
});