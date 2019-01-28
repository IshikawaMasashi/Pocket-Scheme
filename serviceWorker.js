var CACHE_NAME = "Pocket-Scheme-cache-v1";
var urlsToCache = [
  "https://ishikawamasashi.github.io/Pocket-Scheme/",
  "https://ishikawamasashi.github.io/Pocket-Scheme/index.html",

  // dist
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/0.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/1.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/2.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/3.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/4.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/5.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/6.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/7.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/8.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/9.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/10.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/11.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/12.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/13.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/14.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/15.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/16.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/17.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/18.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/19.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/20.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/21.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/22.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/23.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/24.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/25.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/26.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/27.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/28.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/29.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/30.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/31.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/32.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/33.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/34.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/35.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/36.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/37.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/38.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/39.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/40.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/41.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/42.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/43.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/44.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/45.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/46.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/47.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/48.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/49.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/50.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/51.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/52.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/53.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/54.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/55.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/56.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/57.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/css.worker.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/editor.worker.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/html.worker.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/json.worker.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/main.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/monaco-editor.bundle.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/syntax-highlighter.js",
  "https://ishikawamasashi.github.io/Pocket-Scheme/dist/typescript.worker.js",

  // style
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/markdown.css",
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/ref.css",
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/split-pane.css",
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/theme.css",
  "https://ishikawamasashi.github.io/Pocket-Scheme/style/global.css",

  // lib
  "https://ishikawamasashi.github.io/Pocket-Scheme/lib/scheme/scheme.js",
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');

        // 指定されたリソースをキャッシュに追加する
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', (event) => {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // ホワイトリストにないキャッシュ(古いキャッシュ)は削除する
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        // 重要：リクエストを clone する。リクエストは Stream なので
        // 一度しか処理できない。ここではキャッシュ用、fetch 用と2回
        // 必要なので、リクエストは clone しないといけない
        let fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 重要：レスポンスを clone する。レスポンスは Stream で
            // ブラウザ用とキャッシュ用の2回必要。なので clone して
            // 2つの Stream があるようにする
            let responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});