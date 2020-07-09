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
    "revision": "4dc2506df6c70158a8366bc0aa264d21"
  },
  {
    "url": "404.html",
    "revision": "e6b05109d82e36b1669c4dff7eba7984"
  },
  {
    "url": "about/dan.html",
    "revision": "c5db57f9a0eb6c8e4b67efd1b43385bd"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "2370ee6990de49ac90c35053d1131f82"
  },
  {
    "url": "articles/index.html",
    "revision": "473176cab3b0724d6300321a2b78a701"
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
    "url": "assets/js/10.741a0ae7.js",
    "revision": "2bacfbe7523ab7fd738da50a584c5b23"
  },
  {
    "url": "assets/js/11.c3fc8a41.js",
    "revision": "5deb6c476bdfe7ff83302e7c48cfbc30"
  },
  {
    "url": "assets/js/12.dd63db65.js",
    "revision": "15786c033c9c80f9c7c99fa736a316e4"
  },
  {
    "url": "assets/js/13.3c4d6075.js",
    "revision": "05a46c88fa96cec14c8331ed602c672c"
  },
  {
    "url": "assets/js/14.44f9375c.js",
    "revision": "8c5683178d0051a6a32df9807cd43c81"
  },
  {
    "url": "assets/js/15.0a5cff43.js",
    "revision": "8d8f014e60e4e5913efb8c98901b4bd0"
  },
  {
    "url": "assets/js/16.ab95b102.js",
    "revision": "cdbe178c70601ee1f9a661b6de734223"
  },
  {
    "url": "assets/js/17.12fb3c16.js",
    "revision": "d681a9240a30568c68cc73cbe945423f"
  },
  {
    "url": "assets/js/18.352dd206.js",
    "revision": "b06e53f01099ad4cb20d85d8c194f8f3"
  },
  {
    "url": "assets/js/19.297a1c1b.js",
    "revision": "d49631a496c92237a7c62c6587874422"
  },
  {
    "url": "assets/js/20.04c9b58b.js",
    "revision": "74fb4510c15d9b7a6bdef0f5642d113b"
  },
  {
    "url": "assets/js/21.4d7ff02c.js",
    "revision": "c0d74a9e1071db481a7627d66e38d68d"
  },
  {
    "url": "assets/js/22.ef55224d.js",
    "revision": "b44b74c0d8ab38daf769f601f2c42707"
  },
  {
    "url": "assets/js/23.38245c18.js",
    "revision": "9ad6d42ed57817b5117e6ad1c3d22876"
  },
  {
    "url": "assets/js/24.09016953.js",
    "revision": "76fb5bf14386d57db2e542027b182bbb"
  },
  {
    "url": "assets/js/25.a7b400c3.js",
    "revision": "6cc80271bdbe01a5fa752e4828325b35"
  },
  {
    "url": "assets/js/26.1934a9b8.js",
    "revision": "db41ea6a00b6aab11c473a0ef2fd534b"
  },
  {
    "url": "assets/js/27.3f802880.js",
    "revision": "a0eb8b468169c61b296b2cdffbb5430f"
  },
  {
    "url": "assets/js/28.065f3bca.js",
    "revision": "562ab1da9bd94b364e0b173cc5075e83"
  },
  {
    "url": "assets/js/29.b7c01401.js",
    "revision": "dce5886e1a4ade5c3187fa4c1093ac37"
  },
  {
    "url": "assets/js/3.9ace6eac.js",
    "revision": "89b3f9f6f432bc9e5024c1aab370c870"
  },
  {
    "url": "assets/js/30.3497dc8a.js",
    "revision": "c12058e579b90966a6a9491a40d43b0c"
  },
  {
    "url": "assets/js/4.6d683198.js",
    "revision": "0e3c63bb2e7d4ae8f6b86b754ab82b6d"
  },
  {
    "url": "assets/js/5.08e80f42.js",
    "revision": "5edd79156547804e51e21764f8af3254"
  },
  {
    "url": "assets/js/6.6f150dbe.js",
    "revision": "63cf432ad0258cb200c1307db59d917a"
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
    "url": "assets/js/9.26591758.js",
    "revision": "a5174211c044adcb5affb11ce7abab38"
  },
  {
    "url": "assets/js/app.475444e9.js",
    "revision": "d49a4655934b3c04c76cd516e658c64b"
  },
  {
    "url": "assets/js/vuejs-paginate.7519f153.js",
    "revision": "60baebd6e7e97b770ff17f56910a7e75"
  },
  {
    "url": "blog/2012/05/22/readability-post/index.html",
    "revision": "ba39566d1cf55eb1a2c27aed297e1026"
  },
  {
    "url": "blog/2013/05/23/readability-feature-post/index.html",
    "revision": "b03308e49330cb38d0e810eaadf5d4b1"
  },
  {
    "url": "blog/2015/01/19/blogging-revisited/index.html",
    "revision": "4f383bcd3c26779bb4abe8a11256e6f8"
  },
  {
    "url": "blog/2017/03/16/why-patterns/index.html",
    "revision": "d0331d1c569186c048c88b9d21ea48ea"
  },
  {
    "url": "blog/2018/07/28/asp-identities/index.html",
    "revision": "eeaf5e0f504d5cea7d8ff8aabd358cfe"
  },
  {
    "url": "blog/2018/08/07/bless-israel/index.html",
    "revision": "4d2119e2d477e8a44a17dacd959d27b0"
  },
  {
    "url": "blog/2019/09/16/church-hopping/index.html",
    "revision": "51c77eef6c826f953b70a7a027f27fd3"
  },
  {
    "url": "blog/2020/02/08/setting-up-vuepress-blog/index.html",
    "revision": "354d3ff1c29d8ec3b4d61dd0560482ea"
  },
  {
    "url": "blog/index.html",
    "revision": "debafbd3d04c278f80c31a7cc92310ea"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "5261bce9873cbba138c185bf1cfd60d9"
  },
  {
    "url": "draft/index.html",
    "revision": "1fefff3bb52a4a7b57c2667b5efc1518"
  },
  {
    "url": "index.html",
    "revision": "fefe262c8dea5949ea70104968244281"
  },
  {
    "url": "prototype/index.html",
    "revision": "c728ef963613a85b08ae2eddab52b26d"
  },
  {
    "url": "tag/church/index.html",
    "revision": "354ec1495611f2e00063b71a24ab1368"
  },
  {
    "url": "tag/index.html",
    "revision": "2ab83360886139c063f244b90a850283"
  },
  {
    "url": "tag/Vue, VuePress/index.html",
    "revision": "66c419e716a1dedf3c6b2c7b1a953488"
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
