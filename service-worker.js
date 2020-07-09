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
    "revision": "2b18644c8e4b861d7da86186b6e9e777"
  },
  {
    "url": "_posts/2013-05-23-readability-feature-post.html",
    "revision": "619adb0d3cd72bf1f9ca4680b8be82f5"
  },
  {
    "url": "_posts/2015-01-19-Blogging-Revisited.html",
    "revision": "b87b5d70806aea61a7fdcd395494e891"
  },
  {
    "url": "_posts/2017-03-16-why-patterns.html",
    "revision": "118c500cfc445fa20f24dc1f02c07d38"
  },
  {
    "url": "_posts/2018-07-28-asp-identities.html",
    "revision": "2ff8ddb215be51648e3d9464795fa6fc"
  },
  {
    "url": "_posts/2018-08-07-bless-israel.html",
    "revision": "5aa2dfddc89155dac23185fb02172b46"
  },
  {
    "url": "_posts/2019-09-16-church-hopping.html",
    "revision": "99ac81fdeee18cd77404cbcff463561b"
  },
  {
    "url": "_posts/2020-02-08-setting-up-VuePress-blog.html",
    "revision": "7f65a43dc393079a05c1e5b8af407fcf"
  },
  {
    "url": "_projects/first-demo-project.html",
    "revision": "296a8dd2f3788d165f68f430744ba69c"
  },
  {
    "url": "404.html",
    "revision": "36885aaedcd43721060ce62cb30bba8d"
  },
  {
    "url": "about/dan.html",
    "revision": "5d31d31576b127072f2c14ca2f346935"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "93d015aa5e76f07c415fd083bc16208c"
  },
  {
    "url": "articles/index.html",
    "revision": "c0fb67bed03861bd71acf7ee348f6995"
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
    "url": "assets/js/21.4d7ff02c.js",
    "revision": "c0d74a9e1071db481a7627d66e38d68d"
  },
  {
    "url": "assets/js/22.0cc99d05.js",
    "revision": "4dd9d3a152e1447cfa603055a98a2c43"
  },
  {
    "url": "assets/js/23.decc4b35.js",
    "revision": "75a8b0db5f7b0d8a8b72e54465555f69"
  },
  {
    "url": "assets/js/24.1305f5a7.js",
    "revision": "50b7570c4eeb44677c8852ae0c448139"
  },
  {
    "url": "assets/js/25.1da6a881.js",
    "revision": "8ec0178041fd4fd8373beff434e0ce17"
  },
  {
    "url": "assets/js/26.01c0d021.js",
    "revision": "f825a8cd60ef6fe204eeeef6d0105b32"
  },
  {
    "url": "assets/js/27.59ee3db6.js",
    "revision": "b0c92cd7caec890449ad5b25dffe4a7c"
  },
  {
    "url": "assets/js/28.bbc26fcc.js",
    "revision": "f25afd39b383e337f956135c0a60db60"
  },
  {
    "url": "assets/js/29.dc79bac4.js",
    "revision": "ccf72238bc2d922cb6354cf6a4a4ffce"
  },
  {
    "url": "assets/js/3.f48304fb.js",
    "revision": "ffbedf319bcf5cfec6538222b67c0512"
  },
  {
    "url": "assets/js/30.348c7e3d.js",
    "revision": "fb9edfd87c41c953504b454b662bf91b"
  },
  {
    "url": "assets/js/31.0ec1ca64.js",
    "revision": "e478e3db07be0c142d79e55b9541202a"
  },
  {
    "url": "assets/js/32.4b324112.js",
    "revision": "159fc261b2882da02f6ce5ccd8040412"
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
    "url": "assets/js/app.f98bc6b6.js",
    "revision": "105a8d883f5179013c56c677191f3fc1"
  },
  {
    "url": "assets/js/vuejs-paginate.7519f153.js",
    "revision": "60baebd6e7e97b770ff17f56910a7e75"
  },
  {
    "url": "blog/index.html",
    "revision": "f97bde969a943635c898f12574d8f318"
  },
  {
    "url": "blog/vuepress-broken-images.html",
    "revision": "a86f068d85a75366ab0d18cbb6ef276f"
  },
  {
    "url": "draft/index.html",
    "revision": "643b7372ab562ce89640c93d20b1fc13"
  },
  {
    "url": "index.html",
    "revision": "b02d51555781074435add1cc4d6f4670"
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
