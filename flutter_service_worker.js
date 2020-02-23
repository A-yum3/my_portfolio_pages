'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "32a004e34f0c72157fe17780c1ed7e72",
"/main.dart.js": "6d7cc5898cab71d0225fb862804c74d9",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "02e747c9de6d7676337cc6dbcd34dbe8",
"/assets/LICENSE": "88f2c847a87ad939e34e4945ad5ef2dd",
"/assets/AssetManifest.json": "1cfae542d8660ce1ca00a65f81fbd465",
"/assets/FontManifest.json": "3042b81d1cf05cbb67b827dcc1be0ade",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/FZ.otf": "8ceea15c765ad895e2e87c7126722f9f",
"/assets/assets/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"/assets/assets/images/ruby-on-rails.png": "eaf354267b0a2ccdf5b016ff0f690a30",
"/assets/assets/images/flask.png": "e3c3ca2bdbb70ac73b2c4f18de438931",
"/assets/assets/images/git.png": "ab40d02f0aa8bf85de12fd45bda5b0c0",
"/assets/assets/images/python.png": "be230b3c7534efb98e2aa884babe2a30",
"/assets/assets/images/ruby.png": "cff1e61d4e78180af2d00d4bbed91c5f",
"/assets/assets/images/cpp.png": "93c7ddd5cca5ea68f6c4aeacb1017add",
"/assets/assets/images/firebase.png": "dae7f44af6bf5c3f4b6eeb4d65eb2bde",
"/assets/assets/images/sourcetree.png": "7f9005bd3609d321c5c640a4435c6112",
"/assets/assets/images/win10.png": "2cace4958ab405a9de9027c4d0c3ee66",
"/assets/assets/images/mac.png": "5ba55ca714803ffe84ad9518c4b73334",
"/assets/assets/images/bootstrap.png": "7384412324c769e447d3c4f86e9ff068",
"/assets/assets/images/vscode.png": "e16f9e82a3fa162535fe3d0292039f3a",
"/assets/assets/images/myimage.jpg": "d7d846825f12e1c015110f2c9892a0b1",
"/assets/assets/images/apple.png": "50c5aac1b662998f8a22e6dc4f1c0601",
"/assets/assets/images/django.png": "02711c2cf037c786ebb844af1328f809",
"/assets/assets/images/html.png": "664a8c00ef526bf33edf55808601d461",
"/assets/assets/images/sketch.png": "e0fd89f198142e6135c5616d25d971bb",
"/assets/assets/images/androidstudio.png": "2c194427c551c3e628064e359ee8ad82",
"/assets/assets/images/css.png": "bc2328de1b4989deb7dfdc0e0fffc287",
"/assets/assets/images/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"/assets/assets/images/centos.png": "7f244083eb17252a283d026c4add131b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
