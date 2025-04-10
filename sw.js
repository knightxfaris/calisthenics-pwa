self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('tracker-cache').then(cache => {
      return cache.addAll(['calisthenics.html', 'manifest.json', 'icon.png']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
