self.addEventListener('fetch', (event) => {
  // just pass through – enough for installability
  event.respondWith(fetch(event.request));
});
