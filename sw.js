const cacheName = 'v1';
const cacheAssets = [
  'index.html',
  'combat_button.jpg',
'grunge_left.png',
'grunge_right.png',
'paper_bg.jpg',
'rations.jpg',
'start.jpg',
'icon.png',
  'torches.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(cacheAssets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});