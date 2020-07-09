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
    "url": "_projects/first-demo-project.html",
    "revision": "6a48a9fc681c78e9d126026c47a99d74"
  },
  {
    "url": "404.html",
    "revision": "fe3d831daf7df5427af3d490c3c21a6f"
  },
  {
    "url": "about/dan.html",
    "revision": "9b3aa31fe5cc5ad59fc22ea5b9ee815c"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "4e7ed3896c94d282391f5924fdddcf80"
  },
  {
    "url": "articles/index.html",
    "revision": "268671043eb555b72dc91c25dc1bcbf8"
  },
  {
    "url": "assets/css/0.styles.0f786b28.css",
    "revision": "f2eb315e676fdac30adbf4f6f272f77e"
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
    "url": "assets/js/10.2bf69c88.js",
    "revision": "43e886d5b11c5beac66a148705a2387c"
  },
  {
    "url": "assets/js/11.43160f6a.js",
    "revision": "07b9ba8660add73027883f2c32f2a32e"
  },
  {
    "url": "assets/js/12.8c28d70d.js",
    "revision": "a43f81b2a40db3677ae2ef33b4897699"
  },
  {
    "url": "assets/js/13.30fcefe6.js",
    "revision": "40a76038ac126735b8d2374e34fa82ba"
  },
  {
    "url": "assets/js/14.44f9375c.js",
    "revision": "8c5683178d0051a6a32df9807cd43c81"
  },
  {
    "url": "assets/js/15.960fc56c.js",
    "revision": "8742880145e1aba3c5a6bf65456362b1"
  },
  {
    "url": "assets/js/16.e4c0527f.js",
    "revision": "705ec42ee5418f3adac0f244184b0e64"
  },
  {
    "url": "assets/js/17.ecfa29d3.js",
    "revision": "209a573fb600084f6ae7e331017020d7"
  },
  {
    "url": "assets/js/18.822807f8.js",
    "revision": "130077d3635ae70c1b5b381ff03424ae"
  },
  {
    "url": "assets/js/19.160298b1.js",
    "revision": "28abf7d1020486378bbc1e6c78f35c65"
  },
  {
    "url": "assets/js/20.1d73d8cd.js",
    "revision": "914dfebd00823d7a88bb5ad0315211bd"
  },
  {
    "url": "assets/js/21.b33f3367.js",
    "revision": "7860a5c133fc2ef867f975569b1b5ba8"
  },
  {
    "url": "assets/js/22.152ef6c9.js",
    "revision": "f40ddbe28441c18a36501b1ca0da8b4c"
  },
  {
    "url": "assets/js/23.261e606a.js",
    "revision": "6a4c5e861a5d0885cffedf161d2c3020"
  },
  {
    "url": "assets/js/24.8889b9f2.js",
    "revision": "a5d30c021c1eadedded8ad1a9ea82ffa"
  },
  {
    "url": "assets/js/25.aabc4e88.js",
    "revision": "da5170be41ca8da98436e8fda9c562a9"
  },
  {
    "url": "assets/js/26.8635616b.js",
    "revision": "1f9367f4fa6eba51bcbd671ea8516edf"
  },
  {
    "url": "assets/js/27.877e07fd.js",
    "revision": "0aa625d9c75bc8056e55648441fb5505"
  },
  {
    "url": "assets/js/28.3a29e37d.js",
    "revision": "8a0ac6d226832696d4217643f6cd03a6"
  },
  {
    "url": "assets/js/29.af1190cc.js",
    "revision": "9f12cfc706434d6e46fdfcd78209e349"
  },
  {
    "url": "assets/js/3.9ace6eac.js",
    "revision": "89b3f9f6f432bc9e5024c1aab370c870"
  },
  {
    "url": "assets/js/30.e08f43ae.js",
    "revision": "ac31fd143fd86af739b2bfcc5b303982"
  },
  {
    "url": "assets/js/31.4738de71.js",
    "revision": "7ac74254d6366712cb9f11caf0c3de9d"
  },
  {
    "url": "assets/js/4.f8b7f332.js",
    "revision": "afbdf395e1c0272e36612a63c1533312"
  },
  {
    "url": "assets/js/5.08e80f42.js",
    "revision": "5edd79156547804e51e21764f8af3254"
  },
  {
    "url": "assets/js/6.d678db75.js",
    "revision": "e9abeb62b933eb06f54ff273d266f190"
  },
  {
    "url": "assets/js/7.be6c9ddb.js",
    "revision": "8499c493d63d4d175f5588f14caa7ccd"
  },
  {
    "url": "assets/js/8.027bef49.js",
    "revision": "0d7ddfc7b56b6d065091937c83beb715"
  },
  {
    "url": "assets/js/9.3b93ab13.js",
    "revision": "883d6fae63bbbd5204bd9f56a1bfa494"
  },
  {
    "url": "assets/js/app.e9464149.js",
    "revision": "6a753679f657ff7bff45166f5126fd8e"
  },
  {
    "url": "assets/js/vuejs-paginate.7519f153.js",
    "revision": "60baebd6e7e97b770ff17f56910a7e75"
  },
  {
    "url": "blog/2012/05/22/readability-post/index.html",
    "revision": "379dcb7f3fd318a032910e7c2cf16d8d"
  },
  {
    "url": "blog/2013/05/23/readability-feature-post/index.html",
    "revision": "86c4bb70e80389ff67192c12c0fcd789"
  },
  {
    "url": "blog/2015/01/19/blogging-revisited/index.html",
    "revision": "68d4b51b880e1c2fc6054b4c455cea01"
  },
  {
    "url": "blog/2017/03/16/ah-javascript/index.html",
    "revision": "a378d8f26e8de8863f9cb321e5d830a2"
  },
  {
    "url": "blog/2017/03/16/why-patterns/index.html",
    "revision": "4ad2921660720d49c31e25ed2dd32a39"
  },
  {
    "url": "blog/2018/07/28/asp-identities/index.html",
    "revision": "98d1f05c5faf828e69b0b5ae4bd1695f"
  },
  {
    "url": "blog/2018/08/07/bless-israel/index.html",
    "revision": "21e11896f55b393a9edd1014562ceead"
  },
  {
    "url": "blog/2019/09/16/church-hopping/index.html",
    "revision": "f5f61b313d82d1585ebc1308659c61bf"
  },
  {
    "url": "blog/2020/02/08/setting-up-vuepress-blog/index.html",
    "revision": "486af19defead076edd43a704dbb75dd"
  },
  {
    "url": "blog/index.html",
    "revision": "af110a2b9205524bca913b854c141b5c"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "5e7c3de623cccff9dee357576d0d84c4"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "78bfdc1ccbc22dfabc362a8c0b40490f"
  },
  {
    "url": "draft/index.html",
    "revision": "30133ccb250d62fa75040c386093e270"
  },
  {
    "url": "index.html",
    "revision": "d6de6d13e2a73e048e18f850352744e8"
  },
  {
    "url": "prototype/index.html",
    "revision": "c728ef963613a85b08ae2eddab52b26d"
  },
  {
    "url": "tag/church/index.html",
    "revision": "9f4c4b690367b3e8986d9501889bff94"
  },
  {
    "url": "tag/index.html",
    "revision": "992d89373fa57d284bec158bde20ada9"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d60d6537eddf55585f9ef7042ee9da33"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "30dc1e13a9f7d7e6ccd06c4b37f1df40"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b6892197cb30020e77839a23d7d84867"
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
