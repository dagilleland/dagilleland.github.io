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
    "revision": "22a1c16263fea23b8ee340e86be50196"
  },
  {
    "url": "404.html",
    "revision": "cfa054149a60cb7df9c9361494d6c3df"
  },
  {
    "url": "about/dan.html",
    "revision": "ea9a5861e1ad6f337109181df2536c88"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "cce8a981a829df1e4e1a87e107ec1654"
  },
  {
    "url": "articles/index.html",
    "revision": "6a7168e7befad009590c3ffa16cc7841"
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
    "url": "assets/js/24.52b55285.js",
    "revision": "17100b03fc929024f3f0f2b9bd90fe0f"
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
    "url": "assets/js/3.5ca7d690.js",
    "revision": "8d207c0f5ef1ff5aeb1f6cca44da0c8b"
  },
  {
    "url": "assets/js/30.3497dc8a.js",
    "revision": "c12058e579b90966a6a9491a40d43b0c"
  },
  {
    "url": "assets/js/4.6442d7dc.js",
    "revision": "12c53eca4ba776e5cbd690d5fc238506"
  },
  {
    "url": "assets/js/5.51b6b86f.js",
    "revision": "d3c5e7e7cb12a840f13acda4f492dcff"
  },
  {
    "url": "assets/js/6.3c6a3c53.js",
    "revision": "ffa94b5c3e75f5adeca47e57f4b26026"
  },
  {
    "url": "assets/js/7.be6c9ddb.js",
    "revision": "8499c493d63d4d175f5588f14caa7ccd"
  },
  {
    "url": "assets/js/8.56d32a4e.js",
    "revision": "3cba8532156619fef9c67cc4276fff90"
  },
  {
    "url": "assets/js/9.26591758.js",
    "revision": "a5174211c044adcb5affb11ce7abab38"
  },
  {
    "url": "assets/js/app.638f0b1b.js",
    "revision": "8d88b1c2cd7208c6577aa2a85678748c"
  },
  {
    "url": "assets/js/vuejs-paginate.7519f153.js",
    "revision": "60baebd6e7e97b770ff17f56910a7e75"
  },
  {
    "url": "blog/2012/05/22/readability-post/index.html",
    "revision": "3a5a865b6e0c9fea3dccfe9b5e169d70"
  },
  {
    "url": "blog/2013/05/23/readability-feature-post/index.html",
    "revision": "7f5dbfcbed059d49d07c9b95dc5080b7"
  },
  {
    "url": "blog/2015/01/19/blogging-revisited/index.html",
    "revision": "c6766d9d3acf7ed1a5d0ffbb3adcee1e"
  },
  {
    "url": "blog/2017/03/16/why-patterns/index.html",
    "revision": "677a946f72c37c8139efe25ef1463376"
  },
  {
    "url": "blog/2018/07/28/asp-identities/index.html",
    "revision": "86633f0e301a1116a51ad6180cb410c3"
  },
  {
    "url": "blog/2018/08/07/bless-israel/index.html",
    "revision": "fe218a63a08c51f0a3f61e776673a5b1"
  },
  {
    "url": "blog/2019/09/16/church-hopping/index.html",
    "revision": "5c160b34467b7166d2c5ae2325b53e1e"
  },
  {
    "url": "blog/2020/02/08/setting-up-vuepress-blog/index.html",
    "revision": "bebf127561de21fb74e6d0c33e1ccfeb"
  },
  {
    "url": "blog/index.html",
    "revision": "00cfd4d548171da9384e12f1bba9d68f"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "5a9f970eab4bf8154380aacfd1f9974b"
  },
  {
    "url": "draft/index.html",
    "revision": "ba5decefd84eaaa85a539df3a6c32db6"
  },
  {
    "url": "index.html",
    "revision": "b293e7b1532bdc58ec4eae53bdbf4b0c"
  },
  {
    "url": "prototype/index.html",
    "revision": "c728ef963613a85b08ae2eddab52b26d"
  },
  {
    "url": "tag/index.html",
    "revision": "c0f727cc2d4cb9329a85bfcd610d6883"
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
