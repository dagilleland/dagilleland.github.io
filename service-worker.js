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
    "url": "_posts/2012-05-22-readability-post.html",
    "revision": "cbb5b39420853f0489b50bed53203335"
  },
  {
    "url": "_posts/2013-05-23-readability-feature-post.html",
    "revision": "8b186980c004b59e26c7cba018897525"
  },
  {
    "url": "_posts/2015-01-19-Blogging-Revisited.html",
    "revision": "c16c33b6fca862a8a148abee08faec43"
  },
  {
    "url": "_posts/2017-03-16-why-patterns.html",
    "revision": "71445be3e57c3ca3049d327a80fe659a"
  },
  {
    "url": "_posts/2018-07-28-asp-identities.html",
    "revision": "88bd61b29be2ab939b1d2b8a9b5e6ae2"
  },
  {
    "url": "_posts/2018-08-07-bless-israel.html",
    "revision": "a3cccc601f2ab2a7cf7a004fddef913a"
  },
  {
    "url": "_posts/2019-09-16-church-hopping.html",
    "revision": "93807f385052a595e07629f0203befff"
  },
  {
    "url": "_posts/2020-02-08-setting-up-VuePress-blog.html",
    "revision": "d3478fdd1d11d39f47598fb33380f369"
  },
  {
    "url": "_projects/first-demo-project.html",
    "revision": "34716d69369911e01159dd7a1d092ba7"
  },
  {
    "url": "404.html",
    "revision": "0758c41e5a7f2adb6c0818a413e798e6"
  },
  {
    "url": "about/dan.html",
    "revision": "5aaf454903dfd67d2bb1bb4db8b5da7d"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "9e2a980508bbbe12f87b3774e665069f"
  },
  {
    "url": "articles/index.html",
    "revision": "9651c1b6c0b9149b24373ed4a116e1d6"
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
    "url": "assets/js/10.c352c55a.js",
    "revision": "86e47c449264c6a33181fbf646363c3e"
  },
  {
    "url": "assets/js/11.179534a3.js",
    "revision": "a2bc046f5ec3717a830fb73131155f28"
  },
  {
    "url": "assets/js/12.8c28d70d.js",
    "revision": "a43f81b2a40db3677ae2ef33b4897699"
  },
  {
    "url": "assets/js/13.aa118e72.js",
    "revision": "3154ba771c24bc85889b7174ecb8b644"
  },
  {
    "url": "assets/js/14.e68d5824.js",
    "revision": "f3c4874fb5e675a8f7b838796c761b36"
  },
  {
    "url": "assets/js/15.5904a3a4.js",
    "revision": "0c9776b36a02aeaf55ca1705609dd5d9"
  },
  {
    "url": "assets/js/16.fe78774d.js",
    "revision": "8e234ee65afc86a37986f7364e09440d"
  },
  {
    "url": "assets/js/17.6810ca84.js",
    "revision": "fe7ad3b0501d72bd0832623d19961bd0"
  },
  {
    "url": "assets/js/18.fad6f82a.js",
    "revision": "e5d8c32652e71e6c6a282c5eadef0611"
  },
  {
    "url": "assets/js/19.9d77efca.js",
    "revision": "8f5783675a36dab9ca5f17ccbb231695"
  },
  {
    "url": "assets/js/20.6c8a4d3d.js",
    "revision": "c9f2adb2697e6a51aaad9d7cb8017e23"
  },
  {
    "url": "assets/js/21.271be0a1.js",
    "revision": "f7dc7eed1c01cf0b15c976e984120fff"
  },
  {
    "url": "assets/js/22.0624b457.js",
    "revision": "ca0031a369c88de1b76aa732bb62701f"
  },
  {
    "url": "assets/js/23.9083ff3c.js",
    "revision": "ccf09c00e95f1dc2b88ae2d212cae408"
  },
  {
    "url": "assets/js/24.6d8fcfa3.js",
    "revision": "6e5e7d134d0efd0b4436bd6a3b2350db"
  },
  {
    "url": "assets/js/25.c83e7736.js",
    "revision": "bcfe576766dafc1c7296115db4b69d86"
  },
  {
    "url": "assets/js/26.42de268e.js",
    "revision": "4398693c72cdf16e31b29e5dd42ca242"
  },
  {
    "url": "assets/js/27.c9a694fc.js",
    "revision": "bdd4822dfa8fdd9e91a3e6c076cbbe50"
  },
  {
    "url": "assets/js/28.8df63221.js",
    "revision": "d097053a51611328f7214571937aa10b"
  },
  {
    "url": "assets/js/29.2de4008a.js",
    "revision": "26f57489043f394ff9fa1f668e4945ad"
  },
  {
    "url": "assets/js/3.f48304fb.js",
    "revision": "ffbedf319bcf5cfec6538222b67c0512"
  },
  {
    "url": "assets/js/30.69ed8ef7.js",
    "revision": "12800f5f37c5fee8ae32befe00ccb0c3"
  },
  {
    "url": "assets/js/31.52d4962d.js",
    "revision": "a9b845874214f248852d00063f899795"
  },
  {
    "url": "assets/js/32.0a4598d3.js",
    "revision": "a4a98342d65abdf22c7d9c6b224eef17"
  },
  {
    "url": "assets/js/4.8e8a1415.js",
    "revision": "4ddb2025077f97fa9d9940ab72c27dcd"
  },
  {
    "url": "assets/js/5.04a6564d.js",
    "revision": "3a8902fb8dd6719335d513ae7a588c4b"
  },
  {
    "url": "assets/js/6.25ee4179.js",
    "revision": "3405fe33fd08c7bb8e304426ebfddfae"
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
    "url": "assets/js/app.a4d0ab20.js",
    "revision": "75905e872ea0d7db58bc178ff60ca952"
  },
  {
    "url": "assets/js/vuejs-paginate.7519f153.js",
    "revision": "60baebd6e7e97b770ff17f56910a7e75"
  },
  {
    "url": "blog/index.html",
    "revision": "32e4d1510adeb8ab4580509c20470c1a"
  },
  {
    "url": "blog/vuepress-broken-images.html",
    "revision": "384f42fa7556591ee41178d81deadd51"
  },
  {
    "url": "draft/index.html",
    "revision": "abdbd99ff1692ac2fc6c7820e28dd8dc"
  },
  {
    "url": "index.html",
    "revision": "ab8e7266892310e537cdd73baf8f92fb"
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
