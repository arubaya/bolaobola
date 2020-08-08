importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {url: './manifest.json', revision: '1'},
  {url: './index.html', revision: '1'},
  {url: './index.js', revision: '1'},
  {url: './match-detail.html', revision: '1'},
  {url: './team-detail.html', revision: '1'},
  {url: './player-detail.html', revision: '1'},
  {url: './css/materialize.min.css', revision: '1'},
  {url: './css/style.css', revision: '1'},
  {url: './js/materialize.min.js', revision: '1'}
  ],
  {
    // Ignore all URL parameters.
    ignoreURLParametersMatching: [/.*/]
  }
);

workbox.routing.registerRoute(
  new RegExp('./pages/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'pages'
  })
);

workbox.routing.registerRoute(
  new RegExp('./assets/'),
    new workbox.strategies.CacheFirst({
      cacheName: 'assets'
  })
);

workbox.routing.registerRoute(
  new RegExp('./js/'),
    new workbox.strategies.CacheFirst({
      cacheName: 'script'
  })
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/icon?family=Material+Icons'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'api-footbal'
  })
);

// self.addEventListener("fetch", event => {
//   let base_url = "https://api.football-data.org/v2/";
//   if (event.request.url.indexOf(base_url) > -1) {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(cache => {
//         return fetch(event.request).then(response => {
//           cache.put(event.request.url, response.clone());
//           return response;
//         })
//       })
//     );
//   } else {
//     event.respondWith(
//       caches.match(event.request, { ignoreSearch: true }).then(response => {
//         return response || fetch (event.request);
//       })
//     )
//   }
// });

self.addEventListener('push', event => {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: './assets/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});