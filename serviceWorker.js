var CACHE_NAME = "Pocket-Scheme-cache-v1";
var urlsToCache = [
  "https://ishikawamasashi.github.io/Pocket-Scheme/",
  "https://ishikawamasashi.github.io/Pocket-Scheme/index.html",

  // dist
  "https://ishikawamasashi.github.io/Pocket-Scheme/0.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/1.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/2.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/3.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/4.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/5.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/6.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/7.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/8.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/9.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/10.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/11.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/12.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/13.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/14.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/15.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/16.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/17.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/18.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/19.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/20.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/21.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/22.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/23.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/24.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/25.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/26.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/27.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/28.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/29.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/30.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/31.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/32.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/33.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/34.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/35.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/36.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/37.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/38.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/39.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/40.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/41.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/42.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/43.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/44.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/45.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/46.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/47.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/48.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/49.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/50.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/51.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/52.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/53.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/54.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/55.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/56.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/57.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/css.worker.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/editor.worker.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/html.worker.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/json.worker.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/main.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/monaco-editor.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/syntax-highlighter.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/typescript.worker.js",

  // style
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/markdown.css",
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/ref.css",
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/split-pane.css",
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/theme.css",
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/global.css",

  // lib
  "https://ishikawamasashi.github.io/Pocket-Scheme/lib/scheme/scheme.js",
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(
      function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(
      function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});