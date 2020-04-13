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
    "revision": "11fbdbba113bf1aedc98e076c3b43ed8"
  },
  {
    "url": "2020/02/08/setting-up-vuepress-blog/index.html",
    "revision": "3ca0eae1e733292b63568dbf52e13238"
  },
  {
    "url": "about/dan.html",
    "revision": "9adae2a40a6a7087cd663fee1ceb086e"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "60d07644a631a5c7232879ec96ea624b"
  },
  {
    "url": "articles/index.html",
    "revision": "3a211070247deb13c65a51ca8e75c8f7"
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
    "url": "assets/js/1.a7149aed.js",
    "revision": "dc108712adaf31c35a94731c64da0e2b"
  },
  {
    "url": "assets/js/10.67f20a1f.js",
    "revision": "a25b51ce3e1d698743335202016c7e75"
  },
  {
    "url": "assets/js/11.d117bca4.js",
    "revision": "59aa45c24ec68befa68e264e11399d1b"
  },
  {
    "url": "assets/js/12.ce383fcb.js",
    "revision": "77009729721e9ce26e60a102d0863c5b"
  },
  {
    "url": "assets/js/13.399020e5.js",
    "revision": "d866be7a7569860f0977a13686b3a1ef"
  },
  {
    "url": "assets/js/14.ca8b4d05.js",
    "revision": "5301c709808aaf531dc95f714991fa71"
  },
  {
    "url": "assets/js/15.4a9019c4.js",
    "revision": "4607f6d999f1c64a54fa7f917104906e"
  },
  {
    "url": "assets/js/16.eb8a952f.js",
    "revision": "bc65e7397cc7e5e8d4f7044ce8c64693"
  },
  {
    "url": "assets/js/17.ae23ba95.js",
    "revision": "ba310f0d08fe4c4d252e5273bc325fd6"
  },
  {
    "url": "assets/js/18.63ddf82d.js",
    "revision": "cd276e3f73662d11b0c2a482f075dc6d"
  },
  {
    "url": "assets/js/19.4cc0387a.js",
    "revision": "a8b991cd605ebd5c231cbe4cb39e0e30"
  },
  {
    "url": "assets/js/20.3ee54cbc.js",
    "revision": "8d0f60f042d6e6a7f7f725c4ff934ab0"
  },
  {
    "url": "assets/js/21.6bc8d3b2.js",
    "revision": "70925d28b474fe18bc1b458b56551859"
  },
  {
    "url": "assets/js/22.b851ab10.js",
    "revision": "f91a102823ff2921b8d870aa68af8de9"
  },
  {
    "url": "assets/js/23.925308f3.js",
    "revision": "8144151ad2c8095487f22929c856b3cd"
  },
  {
    "url": "assets/js/24.dc249da8.js",
    "revision": "6ce69fdff1b8111d8fdc613d983b8f41"
  },
  {
    "url": "assets/js/25.cbece74d.js",
    "revision": "1066d73cbd1d54fd39120207bd8072ac"
  },
  {
    "url": "assets/js/26.7730c9cc.js",
    "revision": "a7f394a57c5fd3dfc4d5b56446572a4a"
  },
  {
    "url": "assets/js/27.a6a613f7.js",
    "revision": "59fd6ee286058c48bea450e47f7a86a4"
  },
  {
    "url": "assets/js/28.cda0a8c9.js",
    "revision": "4720757138b8e8b6606bf927e72f878d"
  },
  {
    "url": "assets/js/29.2b2ed126.js",
    "revision": "f38dbad284305fe43d4e28e377a36aab"
  },
  {
    "url": "assets/js/30.8b990526.js",
    "revision": "75ea9034c791cec990c3652940e3282f"
  },
  {
    "url": "assets/js/4.f648fc7d.js",
    "revision": "0f8e137868752a106e050996b07d2130"
  },
  {
    "url": "assets/js/5.a52ea4ff.js",
    "revision": "efb46b904851758744e5ec05a5af85aa"
  },
  {
    "url": "assets/js/6.32e38b9b.js",
    "revision": "7e35d529d2708ed41b22c5ac96402cd5"
  },
  {
    "url": "assets/js/7.f22d0001.js",
    "revision": "75b5a5112d0678b4d523313e9061b00c"
  },
  {
    "url": "assets/js/8.fd7f4910.js",
    "revision": "3638291128578d3d02928dee473b6f77"
  },
  {
    "url": "assets/js/9.f89cb413.js",
    "revision": "fc820bac5b2d6e6339386474ab5fe873"
  },
  {
    "url": "assets/js/app.5a22e9b9.js",
    "revision": "3ecdf4a3060ff7da8618acaaa2f38cda"
  },
  {
    "url": "assets/js/vuejs-paginate.162af268.js",
    "revision": "8a7aefd7fe8a69f029d3bdd4b8510659"
  },
  {
    "url": "blog/asp-identities.html",
    "revision": "58834b948e0b014e2ecafb7b1b7762d0"
  },
  {
    "url": "blog/bless-israel.html",
    "revision": "818d0e66d43847b593d37a377f3800a8"
  },
  {
    "url": "blog/church-hopping.html",
    "revision": "2e00d878a647c6f7b78ede2df1cb5a75"
  },
  {
    "url": "blog/index.html",
    "revision": "d466726c633e6e6b3334aa6cd7eb1d3f"
  },
  {
    "url": "blog/vuepress-broken-images.html",
    "revision": "4f0afda39bef2420d0881df3802f903b"
  },
  {
    "url": "blog/why-patterns.html",
    "revision": "47cf7aca0b3bc7b3ab417aae9cfe448a"
  },
  {
    "url": "draft/index.html",
    "revision": "bc7445b9776cda900a5c6816365af635"
  },
  {
    "url": "index.html",
    "revision": "d67dbd4dcc99f64e027197a00af61b03"
  },
  {
    "url": "prototype/index.html",
    "revision": "c728ef963613a85b08ae2eddab52b26d"
  },
  {
    "url": "tag/index.html",
    "revision": "513ea77e6a16883a6db44aa7d9890c80"
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
