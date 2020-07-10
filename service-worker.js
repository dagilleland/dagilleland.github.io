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
    "revision": "9aff651fea8696b5920854e233ea3c1f"
  },
  {
    "url": "404.html",
    "revision": "3bb25300930054206192b52a7f18a3e1"
  },
  {
    "url": "about/dan.html",
    "revision": "b80700364bd4ae8de681965211e2dbff"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "e80a0d8dea74ff839d317ef8568bb290"
  },
  {
    "url": "articles/index.html",
    "revision": "7413b7245725b5a89ae0fc4263690122"
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
    "url": "assets/js/21.a2629b3b.js",
    "revision": "c06029fe147a24265814beeb1ad0ff73"
  },
  {
    "url": "assets/js/22.152ef6c9.js",
    "revision": "f40ddbe28441c18a36501b1ca0da8b4c"
  },
  {
    "url": "assets/js/23.1641912e.js",
    "revision": "c9c883f122f54e0266c3b4d762d7bc3e"
  },
  {
    "url": "assets/js/24.0cde3ece.js",
    "revision": "ec8727cf14488d4720d87b5487a6ca7c"
  },
  {
    "url": "assets/js/25.a47fdf70.js",
    "revision": "712920daceaae89b66ee69a57427576a"
  },
  {
    "url": "assets/js/26.59617be9.js",
    "revision": "c505a240e6360cc1f7adb0911b352c38"
  },
  {
    "url": "assets/js/27.d65cf16c.js",
    "revision": "a1b06675b84a49773795aed885430f62"
  },
  {
    "url": "assets/js/28.724d9a6d.js",
    "revision": "b594ce2354efce7b21e771edc9e5556d"
  },
  {
    "url": "assets/js/29.8938321c.js",
    "revision": "352144edbd5ca2bf6d2e5e10939eb71a"
  },
  {
    "url": "assets/js/3.9ace6eac.js",
    "revision": "89b3f9f6f432bc9e5024c1aab370c870"
  },
  {
    "url": "assets/js/30.95987e38.js",
    "revision": "c8d2f050b995673220897b0d1a229d74"
  },
  {
    "url": "assets/js/31.09ea8f5c.js",
    "revision": "ad7237713b3d01bc5fb45e72e0ecb92b"
  },
  {
    "url": "assets/js/32.0a4598d3.js",
    "revision": "a4a98342d65abdf22c7d9c6b224eef17"
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
    "url": "assets/js/app.d0a7a818.js",
    "revision": "4b1c47ea7461f42454fb1a4703786da4"
  },
  {
    "url": "assets/js/vuejs-paginate.7519f153.js",
    "revision": "60baebd6e7e97b770ff17f56910a7e75"
  },
  {
    "url": "blog/2012/05/22/readability-post/index.html",
    "revision": "a2ad8c1f7d36bd8a6df943393b92e242"
  },
  {
    "url": "blog/2013/05/23/readability-feature-post/index.html",
    "revision": "ee7f1f22526152f5b98e383e8a429202"
  },
  {
    "url": "blog/2015/01/19/blogging-revisited/index.html",
    "revision": "936b1aecf7b650ba026dc8dea26fa4a1"
  },
  {
    "url": "blog/2017/03/16/ah-javascript/index.html",
    "revision": "c661b59304681fc26a23648e2ab15f05"
  },
  {
    "url": "blog/2017/03/16/why-patterns/index.html",
    "revision": "ca02dca7825a18d3138b4c19dc94980d"
  },
  {
    "url": "blog/2018/07/28/asp-identities/index.html",
    "revision": "56faee6af1b4463be8769e465c29bf2d"
  },
  {
    "url": "blog/2018/08/07/bless-israel/index.html",
    "revision": "f8e03d2b80d75d5bcd8c2eea617b1dfc"
  },
  {
    "url": "blog/2019/09/16/church-hopping/index.html",
    "revision": "9baee7794cbeaefee3cbacc958c8b402"
  },
  {
    "url": "blog/2020/02/08/setting-up-vuepress-blog/index.html",
    "revision": "a1f2bdd46260dc8518d0bf1ddbbeca77"
  },
  {
    "url": "blog/2020/07/09/are-we-there-yet/index.html",
    "revision": "eccb155f76d1fbdc4699508d7df4ff9e"
  },
  {
    "url": "blog/index.html",
    "revision": "6fa002cf9c82dd14b3d9c369d7c430f8"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "14b8edac413afb32220df3217440db3a"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "2d6f5c8d0c9d5d37140db92055e3df9b"
  },
  {
    "url": "draft/index.html",
    "revision": "642b906e2406a1cc300ff0b45c89092f"
  },
  {
    "url": "index.html",
    "revision": "f87f15c8aa378e159fabbe1e4b05df76"
  },
  {
    "url": "prototype/index.html",
    "revision": "c728ef963613a85b08ae2eddab52b26d"
  },
  {
    "url": "tag/church/index.html",
    "revision": "79e4594f2946b254e35e0949021ed17b"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "b15cb43b4fb43ce3b4a518b33551901f"
  },
  {
    "url": "tag/index.html",
    "revision": "5b74055f0a88ff61d5ffc3fd5215ecac"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "740c63b40c3525b8a8467e6947f169d2"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "d4be70b250cc293130017902ffb1f135"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "556e5653b202231b09c2994790956995"
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
