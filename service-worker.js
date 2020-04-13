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
    "url": "_posts/2017-03-16-why-patterns.html",
    "revision": "63e444d25e77566def723ebf0f0ab66f"
  },
  {
    "url": "_posts/2018-07-28-asp-identities.html",
    "revision": "cf3a02b11220743def23711ba7853705"
  },
  {
    "url": "_posts/2018-08-07-bless-israel.html",
    "revision": "059b0efa67ad4dc81f1cd921dd5d865c"
  },
  {
    "url": "_posts/2019-09-16-church-hopping.html",
    "revision": "e9de96dd82e1ad2219708a49c3a34e75"
  },
  {
    "url": "_posts/2020-02-08-setting-up-VuePress-blog.html",
    "revision": "f66dd56a50db2852407f7df6954f7834"
  },
  {
    "url": "_projects/first-demo-project.html",
    "revision": "ac363b73cf9b5056f3aeb5a178d17ac1"
  },
  {
    "url": "about/dan.html",
    "revision": "ef7548f4108d5b2c8292b36e4a947cd9"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "25005d6c412ddc709cd5d879eb95f954"
  },
  {
    "url": "articles/index.html",
    "revision": "bff9b2122da9eed48b0c05b88ec4202b"
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
    "url": "assets/js/19.14d81983.js",
    "revision": "7d50f44fac13ccdd4d1458910e396498"
  },
  {
    "url": "assets/js/20.7ef1f3ab.js",
    "revision": "f4361280dda32a2aed69f1bfe579099c"
  },
  {
    "url": "assets/js/21.72bd6078.js",
    "revision": "2c952de135d9466c5caf0e12e0d15289"
  },
  {
    "url": "assets/js/22.178ed6a1.js",
    "revision": "50f4e92441d54f96e8b355a4d4f3d6a1"
  },
  {
    "url": "assets/js/23.95092c3f.js",
    "revision": "d61582731c6d9f98038ccd65667e34ec"
  },
  {
    "url": "assets/js/24.8b271ad0.js",
    "revision": "d49143a06e6559654142dcb9982b0a92"
  },
  {
    "url": "assets/js/25.68aa4801.js",
    "revision": "54d80d51c6595458a3b62a604af42f58"
  },
  {
    "url": "assets/js/26.61a2ff4c.js",
    "revision": "50ef875d64a85a062f468452786375b2"
  },
  {
    "url": "assets/js/27.d75a8a1c.js",
    "revision": "e98bd1072cbc5d74bcb8ce0515e66d7c"
  },
  {
    "url": "assets/js/28.e3d78952.js",
    "revision": "305287d16b2e58babb88d310d3c5e21c"
  },
  {
    "url": "assets/js/29.879d6486.js",
    "revision": "ee74378021e753378d7535896de793e3"
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
    "url": "assets/js/app.930ab092.js",
    "revision": "8c184d6cc362b145ff7012c14355f0a9"
  },
  {
    "url": "assets/js/vuejs-paginate.1b67b909.js",
    "revision": "f77e4c67308efe38d07cceb8b054b2cd"
  },
  {
    "url": "blog/index.html",
    "revision": "b33a0cec8ccb238b58f9aaa7de8548f2"
  },
  {
    "url": "blog/vuepress-broken-images.html",
    "revision": "d28fc4c054962f166b4aa677ef0feb0e"
  },
  {
    "url": "draft/index.html",
    "revision": "9b3d94d91612a5ba26756f7d6a1086e5"
  },
  {
    "url": "index.html",
    "revision": "10737a81ebf7af8fb5b0ac5ce417fc29"
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
