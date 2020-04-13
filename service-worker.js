/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_posts/2020-02-08-setting-up-VuePress-blog.html",
    "revision": "85ebae14243c601b57b507dc3d9eadf0"
  },
  {
    "url": "_projects/first-demo-project.html",
    "revision": "9a1f430fcd0fdaac5427d88aafe56986"
  },
  {
    "url": "about/dan.html",
    "revision": "93b061865ecbac62f801dae0e6ddb3f4"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "7b96d6fc319d44c0bffdb9d0010528bb"
  },
  {
    "url": "articles/index.html",
    "revision": "ebd159c2e92ee48f8790567b4c9b7db8"
  },
  {
    "url": "assets/css/0.styles.b8f64cbb.css",
    "revision": "57911a04634462ec45535460091e7aba"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/single_cloud_database_400_clr_12136.0d73d927.png",
    "revision": "0d73d927c69db5af81502a5799d413f6"
  },
  {
    "url": "assets/js/1.28499e01.js",
    "revision": "83652776e4417a8e66d08722363f5d06"
  },
  {
    "url": "assets/js/10.cfb7a59c.js",
    "revision": "2a47550ce48c5410b38789809681168e"
  },
  {
    "url": "assets/js/11.8a11092f.js",
    "revision": "6ef23c0a624b6675731dd3721f37686b"
  },
  {
    "url": "assets/js/12.3d2fb8e8.js",
    "revision": "8a45f70ba9d8a4a2ac3d379b8374d71d"
  },
  {
    "url": "assets/js/13.3ccf1087.js",
    "revision": "7364bc84329355c6dd32a15d09d625b7"
  },
  {
    "url": "assets/js/14.662e965b.js",
    "revision": "9bad481aa6d6c0557295ede6f1101e57"
  },
  {
    "url": "assets/js/15.ece8c285.js",
    "revision": "aecc84ac146e48427d782251fdcbadc5"
  },
  {
    "url": "assets/js/16.a0afa39d.js",
    "revision": "69df3a48ad67984c48930ad0dbe90129"
  },
  {
    "url": "assets/js/17.f3571d2d.js",
    "revision": "23c7f1fae03aa664c8c2bb251a422110"
  },
  {
    "url": "assets/js/18.977b2f23.js",
    "revision": "e33c75e881cdf6a6425280825d705e0f"
  },
  {
    "url": "assets/js/19.210bbb5a.js",
    "revision": "cbe6c2ef23d93e9f691a5ce1d500e8f5"
  },
  {
    "url": "assets/js/20.39f8f687.js",
    "revision": "a913b95c883330c3710db5673ba88a84"
  },
  {
    "url": "assets/js/21.443552c0.js",
    "revision": "4944de04cbaaea57d2d039199227b967"
  },
  {
    "url": "assets/js/22.6f418744.js",
    "revision": "bcd37d1db21259574291debbae3b2bb7"
  },
  {
    "url": "assets/js/23.b2db8f03.js",
    "revision": "1ed019df37d38e36e0a4058151e45480"
  },
  {
    "url": "assets/js/24.ae5a4d86.js",
    "revision": "25e9b7774825ce7d6d51ba3cc6901fc1"
  },
  {
    "url": "assets/js/25.e5b561dd.js",
    "revision": "40cabafa78d71e7f722c015f4d839be0"
  },
  {
    "url": "assets/js/26.e23606e6.js",
    "revision": "d23b8d2fd9e9a418899f8f0074ec512a"
  },
  {
    "url": "assets/js/27.87f7cff9.js",
    "revision": "6016cac8953fc237dd519ab53cb56766"
  },
  {
    "url": "assets/js/28.24cf5ee2.js",
    "revision": "2c9616c2809badddc00a1a2728b9ca31"
  },
  {
    "url": "assets/js/29.f4dee679.js",
    "revision": "357b48774682b8ab92b1c083f54447f3"
  },
  {
    "url": "assets/js/30.a082caa6.js",
    "revision": "c6bf9b548bff9665e50af4969ec0bef6"
  },
  {
    "url": "assets/js/31.47ee8a13.js",
    "revision": "37302423bcf0a7038abc3f489019a6a9"
  },
  {
    "url": "assets/js/4.fbf29631.js",
    "revision": "38b0e9bfe58e1fcfb4b009b94ca22ef5"
  },
  {
    "url": "assets/js/5.59c5ded9.js",
    "revision": "ee70db36af5142bc5a70288e44484209"
  },
  {
    "url": "assets/js/6.7cd05a49.js",
    "revision": "107535ca0d3ab190d63652e9ede34d03"
  },
  {
    "url": "assets/js/7.9b8334d4.js",
    "revision": "74833647726a29c30db5b40b18cbdb83"
  },
  {
    "url": "assets/js/8.b12fa75a.js",
    "revision": "a59c38a65ee1271a5f5600c435077fff"
  },
  {
    "url": "assets/js/9.02757fd5.js",
    "revision": "cecc70f1d64da1eb61eea7ad89fcc8b1"
  },
  {
    "url": "assets/js/app.02738d20.js",
    "revision": "15434dba8e74a25b597978f438ccf886"
  },
  {
    "url": "assets/js/vuejs-paginate.1b67b909.js",
    "revision": "f77e4c67308efe38d07cceb8b054b2cd"
  },
  {
    "url": "blog/asp-identities.html",
    "revision": "e4c42c04809a8c094bf551c10fd7b976"
  },
  {
    "url": "blog/bless-israel.html",
    "revision": "426b1212121bfc2bbb7baff26f7390b7"
  },
  {
    "url": "blog/church-hopping.html",
    "revision": "5e0e617a4df5a5e927a5fc90438b9c01"
  },
  {
    "url": "blog/index.html",
    "revision": "1e27a1097ab933b31d8ecd8ae073278f"
  },
  {
    "url": "blog/vuepress-broken-images.html",
    "revision": "287321158cfe7132efbae59d6c17b9eb"
  },
  {
    "url": "blog/why-patterns.html",
    "revision": "31eb89505d42976e3f3e1eea9f5015fe"
  },
  {
    "url": "draft/index.html",
    "revision": "c347c64fa0cc42b2c486fe6d4b36af70"
  },
  {
    "url": "index.html",
    "revision": "e601922a74d3b4d67333880e6b770464"
  },
  {
    "url": "prototype/index.html",
    "revision": "c728ef963613a85b08ae2eddab52b26d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
