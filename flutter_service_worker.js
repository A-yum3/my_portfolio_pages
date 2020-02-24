'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "32a004e34f0c72157fe17780c1ed7e72",
"/CNAME": "b22698bca490b6cafe4ca611860c5b30",
"/main.dart.js": "92f00abeebd776e3b7b38362378041a4",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "02e747c9de6d7676337cc6dbcd34dbe8",
"/.git/ORIG_HEAD": "4592b99202c0a48faf5ca61442aba376",
"/.git/config": "a9af6a8053095e1d10d35b8aa9491b34",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/0c/80181cc7d4b8068fef9ccd7cd14202b5fbff3c": "147b080bb94546e9d276db25e6c1653c",
"/.git/objects/3e/e46a72a4c9c451b6fa954f05d0c41cc9abe9a2": "eff1c3f25c3880924e13b6131862c41e",
"/.git/objects/68/2ce86a4e67749d2e8ff7230e3ec8faa16149d9": "cb2ca33d0d7b40b9f80f82a8be4624e4",
"/.git/objects/3b/c7466d8546ab1fad100100e1734f846fcbc253": "6596cdc310df48280c6c59f73f605695",
"/.git/objects/9b/5154f19b5ecaa8dc19be57fecc8554fe19950c": "d5091c99f1be1ce23bde33166f633ce7",
"/.git/objects/60/e38d372217a9614aafb4dafff92369ac6ed991": "1c2bc27901c8d27be460dc4788ca79c4",
"/.git/objects/5a/32429225b2d02524ada382888933b674a9fd27": "8874235d58f7e22fe9758b6e7804b3f1",
"/.git/objects/bb/5e808f10521dacbed651930c7613a3b052df60": "7a355d0434cec8c84b1bf8cb9c3c1693",
"/.git/objects/be/971f6d25c71c3f3c482db903f2e85699b3de4c": "f88e2eb1cab68cd37e3f957fe1dfc75b",
"/.git/objects/df/e06c7ee06a0c943754aef8b817986f30a79ddc": "c87d3e30f691ad1ff449c51bbb713553",
"/.git/objects/da/27e5ab7323373c3ec7b852924ebd16af280e91": "539fa8e85ebdf4e9de4c89bca2a371d0",
"/.git/objects/b4/22bf43226f3c5f8a7821b5bda8e8effae586b2": "bd44ac6e83aa968f055821873a9ae907",
"/.git/objects/ae/e543c0b31ff763ddb95c7fdea35ac84062dd69": "32d44ff2f6b4d814fa2d84fb16573161",
"/.git/objects/eb/b720245e17a5d91268a2c076424677b7f7f5a3": "39a691faf5d1c4e3104b9c4b8a566f1d",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/fc/6a99dc44445b6b51fd93f9d465bfc4e93dd208": "1406e075ebaa0f171adab967711aba26",
"/.git/objects/f5/1b9b0690d005e3da0d9907d55740c26090151e": "fb002b95140c92516fb620950687e277",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/27/b335114c396e83b7d34d4314a7dc3bef3e6aad": "9fbf7e9c73bb8b050257cc895824f16b",
"/.git/objects/27/6c0c32c4695df0c7a3103ba5921984a9a14932": "1dd0c2d652ce3bef6fd5a90dfefe7912",
"/.git/objects/7c/a48486a8d9c733b4ccacfdb1407896a236ecae": "677138c5e8417281348ab15f680f2b5a",
"/.git/objects/7c/ae17fe2e73f5775aff7990cacd5404e9b4654a": "3f92565380c93f5b37a3dc27d4fc4c9c",
"/.git/objects/45/0da17084b14f3614b462a0c5a95dfff41d1692": "f6d67e0f7a8391576d81755ca0553310",
"/.git/objects/1f/4d959eaa2fc69c077e6c40de229b1a3e3e5e1d": "d81744c012dc2e37b40144b769f14cd9",
"/.git/objects/1f/7bde7c79b1d12de5d15468bdb22444d3d85e7c": "f44bd80e6aad39eca31709e71e51a68b",
"/.git/objects/74/e4201af6378ac87bf9e118fbab6553c7fd355c": "6424d0690fca72c41d98dc807b8854a0",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/21/9cdee28418b44d24365f62d97b6216bc0ddf9d": "9c80665cb881d05e350b085cece773fb",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/8c5910dd9c90eda0264a1767cb35cca26d05d6": "1c6f767765d139a86db906d66767f856",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/07/e10a3ae168ac3d132ff09fa7d959bab0fe08a3": "6a47254fff4ca26a4372ff05806a1fb3",
"/.git/objects/09/cd4354e32c393b2410164fd552b75208312558": "087e81f944d7b00a5e0ac953e487aeaa",
"/.git/objects/31/d08b38d2e4caaa66ad9c10e721488c6bcd2892": "0e7d26b4945a0ccb9ad841881b46cd64",
"/.git/objects/08/443ff3cc7d2dbaf2ed96a239bd98cb854bdaf9": "b6ec2858e6406ddff9b127bc6a05059a",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/bf/0c570f2e42ee2c9822afaf9e1a24c9b20ba0cf": "56c772c00b8c54cfd7aba91b8d90ca11",
"/.git/objects/b1/7ac1728445429ed813ee6a1d2473ac6ea8bf34": "b873d792c23b18e4657976190d014b89",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/db/14349e30db77acc210612cf3c684054bd1d93f": "5ce9378e880f32f55106d2b795779ea1",
"/.git/objects/b0/4f204d9aa1302e84fb3d246f916c6fcc80b400": "d71f2ccd0447daf0b7bd0454106de10d",
"/.git/objects/e1/33bd8018aacd9b42696fcdb90b0086a9bf8de7": "72cf79dfbfbaf76db9579885fcb8cd1c",
"/.git/objects/cd/d959b6d66dd363a56a3ca28cae3983b38318ab": "76f029653792c2f38903c7c80ad4bde0",
"/.git/objects/fa/a08dc1cdcc0043a964a6691a3864e22e916c16": "e8ebc6eeb7b9d55eefe10f1efe101d5e",
"/.git/objects/c5/fc26ab5a968194fb1b810282b7d934544e9ce6": "0c87a9e3240514fe3d216bf31280ab7e",
"/.git/objects/f1/dccaf0c819b3f460ad1ecd993911c761e3d56e": "a722e542014798fba304716933564781",
"/.git/objects/79/324ab21ebca8fcada186034c822abe71ec8818": "a6ef716436c9d0d87d04ac09f47d5fde",
"/.git/objects/83/a436baafa70506bde003052fdf055dd5f207a3": "45c2753582c83412ca0805baff58dee0",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/12/0ecf82fa77b8f357d0f97bdd9440f73053448a": "08d7c0bcd4c737b436e0bdab6eaaabfd",
"/.git/objects/40/52948971df377f10b062f4506f092c691e6331": "c2b7a1ff4ac933c761ccd2bdb36c6052",
"/.git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
"/.git/HEAD": "0ce6403a6ce600a65449f58beb160a0c",
"/.git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
"/.git/logs/HEAD": "a69fec7338e68efffe591ec5504c0347",
"/.git/logs/refs/heads/test": "81dedb3a8ca88c89c92875c2b8b59a9d",
"/.git/logs/refs/heads/master": "fb0de4b32956a27997fcd0a5fb7cc7e9",
"/.git/logs/refs/remotes/origin/master": "c2de80eb8fc84b5673133e40a5cb99e0",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/test": "9d4324de5aa80f9e4861edbda738a714",
"/.git/refs/heads/master": "9d4324de5aa80f9e4861edbda738a714",
"/.git/refs/remotes/origin/master": "9d4324de5aa80f9e4861edbda738a714",
"/.git/index": "7b36968476bb8de0b885354a557b6da7",
"/.git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"/.git/FETCH_HEAD": "b58075a11ec92d0cdb1ae47efae44a92",
"/.git/sourcetreeconfig": "51b9dd8eb6f2355326fae60263c43b3c",
"/assets/LICENSE": "88f2c847a87ad939e34e4945ad5ef2dd",
"/assets/AssetManifest.json": "5bd76e043399b5898d669b0a74ef9518",
"/assets/FontManifest.json": "3042b81d1cf05cbb67b827dcc1be0ade",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/FZ.otf": "8ceea15c765ad895e2e87c7126722f9f",
"/assets/assets/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"/assets/assets/images/ruby-on-rails.png": "779ece23e00ace826a9b3fb0fd4ab22a",
"/assets/assets/images/flask.png": "447ea2ae31f4531b6f53d324265b7722",
"/assets/assets/images/git.png": "bb159bc31589fd875a27275a478ec261",
"/assets/assets/images/note.png": "d514447832057e6fd2b90a3b188fdc3f",
"/assets/assets/images/python.png": "324c12c8026755151d4bf7b5176b4e7a",
"/assets/assets/images/ruby.png": "07ed473aa0c991349e5b8c7e71578a02",
"/assets/assets/images/cpp.png": "5f3201630235cc0aa752e761dc7468b1",
"/assets/assets/images/github.png": "5d1204766d6ba58de76aa37021ab105a",
"/assets/assets/images/firebase.png": "50e5e6068f8b4206794da9825520668b",
"/assets/assets/images/sourcetree.png": "f01eeaa0cfa8a017621e387f1825aeed",
"/assets/assets/images/win10.png": "9099f63838575f974e7752103f4327a3",
"/assets/assets/images/mac.png": "20c57c38a92bbf3cd983c5d58a584385",
"/assets/assets/images/bootstrap.png": "db37fb2d94845e0ac91d7296bec5904f",
"/assets/assets/images/vscode.png": "cdb54e2803c0a2244dac21f2481fa5dc",
"/assets/assets/images/myimage.jpg": "6c394458baf9a3f4ac414d8684943d6d",
"/assets/assets/images/apple.png": "3c963228c1da9ec7eb18ec6bda7615fa",
"/assets/assets/images/django.png": "401583d7be52e29b009428dad7c574e2",
"/assets/assets/images/html.png": "d798acd430ab453c3adc3dd75b1dbe8e",
"/assets/assets/images/twitter.png": "1c66e59b36c985ca7dec6d5e9bcee103",
"/assets/assets/images/sketch.png": "7af71a48fa2eda95383fabbd4c8ad331",
"/assets/assets/images/androidstudio.png": "3e715319e603e95be8d97a590f5e9b51",
"/assets/assets/images/css.png": "73bc54c12d9c58603294e3a91d7dfbf4",
"/assets/assets/images/facebook.png": "e9600aa38a8b721f25a8a1582838c922",
"/assets/assets/images/qiita.png": "34f800de34b36d960df7f01087dfdb8c",
"/assets/assets/images/dart.png": "46497d3fad4f68f78242d35a017bd2a4",
"/assets/assets/images/centos.png": "cdb61f8b1ab9027ab05b16b795cb16a3"
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
