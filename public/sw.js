/* Office Box Academy — Service Worker (thủ công, tương thích Turbopack).
 * Chiến lược:
 *  - Điều hướng (navigate): Network-first, fallback cache rồi tới /offline.
 *  - Tài nguyên tĩnh same-origin: Stale-While-Revalidate.
 */

const CACHE_VERSION = "v1";
const CACHE_NAME = `office-box-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline";

// Các tài nguyên cốt lõi được precache để dùng offline.
const PRECACHE_URLS = [
  "/",
  OFFLINE_URL,
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Chỉ xử lý GET; bỏ qua request khác (POST form...) và cross-origin.
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Điều hướng trang: Network-first.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match(request);
          return cached || (await cache.match(OFFLINE_URL));
        }
      })()
    );
    return;
  }

  // Tài nguyên tĩnh: Stale-While-Revalidate.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })()
  );
});
