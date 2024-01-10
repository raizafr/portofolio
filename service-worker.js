self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/icon.png",
        // tambahkan sumber daya lain yang perlu di-cache
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
