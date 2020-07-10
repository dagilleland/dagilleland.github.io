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
    "revision": "60654a2e03c29563c68f9a9a2dbddd82"
  },
  {
    "url": "404.html",
    "revision": "7b03450a40ef1e55c1439077e82c61b7"
  },
  {
    "url": "about/dan.html",
    "revision": "c94678f585a1367d4b12a196a2e34ec6"
  },
  {
    "url": "about/vue-hub.html",
    "revision": "8cf8f30f29fb20c22ad611add7e9ef1e"
  },
  {
    "url": "articles/index.html",
    "revision": "ffc64a845784eecd7f6ca4cd2f89c1fc"
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
    "url": "assets/js/18.e207e5f6.js",
    "revision": "d0cfb47e4cf65b11ce51667e0a073cc6"
  },
  {
    "url": "assets/js/19.ee3b5080.js",
    "revision": "0386ad139e2259bfee9fe4c88cc63dea"
  },
  {
    "url": "assets/js/20.90b8cf8d.js",
    "revision": "62d135c0ace89e7275a363f0bef8dece"
  },
  {
    "url": "assets/js/21.7da51d80.js",
    "revision": "cb4c647866a4d0348cd041f07c07a55c"
  },
  {
    "url": "assets/js/22.3e7fc711.js",
    "revision": "fc2d749cd111b907e51d5673339da3b6"
  },
  {
    "url": "assets/js/23.b3861464.js",
    "revision": "6d20a3aa0512a3620e5fe576292ba10b"
  },
  {
    "url": "assets/js/24.7ed34a73.js",
    "revision": "4227bc19f62420935e9d2407d09be45d"
  },
  {
    "url": "assets/js/25.d0c9e925.js",
    "revision": "55267b6e99f7d1104657d045859bcf43"
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
    "url": "assets/js/app.6ee6a89f.js",
    "revision": "1efdbaa4373489e2cf04d2ce09d7b6bb"
  },
  {
    "url": "assets/js/vuejs-paginate.7519f153.js",
    "revision": "60baebd6e7e97b770ff17f56910a7e75"
  },
  {
    "url": "blog/2015/01/19/blogging-revisited/index.html",
    "revision": "9b9dedc64cf4292e94115dadbb4b515f"
  },
  {
    "url": "blog/2017/03/16/ah-javascript/index.html",
    "revision": "c71a9a99a102a4db6ea1c95a0ce9168f"
  },
  {
    "url": "blog/2017/03/16/why-patterns/index.html",
    "revision": "d7f46e53eb4f72f04bf2afd0a5f359ed"
  },
  {
    "url": "blog/2018/07/28/asp-identities/index.html",
    "revision": "403090422f6f06742f62bf1334b7716c"
  },
  {
    "url": "blog/2018/08/07/bless-israel/index.html",
    "revision": "571fac28b79d9c458891eed19d800cff"
  },
  {
    "url": "blog/2019/09/16/church-hopping/index.html",
    "revision": "b8d5a1d1ad5a9dbf28566f838a479387"
  },
  {
    "url": "blog/2020/02/08/setting-up-vuepress-blog/index.html",
    "revision": "32a162306ba497ea66a45836cf678c25"
  },
  {
    "url": "blog/2020/07/09/are-we-there-yet/index.html",
    "revision": "d0528d75d8757558ca96d82f550b2fcf"
  },
  {
    "url": "blog/index.html",
    "revision": "0b88a5afebbae611bf9ab0b88b8eedee"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "11cf20ef7261c8f853581328d768be0b"
  },
  {
    "url": "draft/index.html",
    "revision": "78ec256cd76c43f2dcf23044c4e1d6e9"
  },
  {
    "url": "index.html",
    "revision": "d34ae16194e9592436d57d400b313783"
  },
  {
    "url": "prototype/index.html",
    "revision": "c728ef963613a85b08ae2eddab52b26d"
  },
  {
    "url": "tag/ASP.Net/index.html",
    "revision": "f1c937526dca6f12105089dc1bfd79ee"
  },
  {
    "url": "tag/church/index.html",
    "revision": "391b659693cd5501e30929011dff16af"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "0f8689485ab865b6d9ebdcbed4bc2bd9"
  },
  {
    "url": "tag/IIS/index.html",
    "revision": "d71d10bacf62eaa28bb31fa7f752fca1"
  },
  {
    "url": "tag/index.html",
    "revision": "27ae83d0a9597246579daaeb6a018d7e"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8c1f7aa6b6d7b4cc644710b037699cab"
  },
  {
    "url": "tag/Security/index.html",
    "revision": "0feaa3032214c218ab7bf38a3ddfea70"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "d70e729154df9473be0dc8820ea3adf8"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "1a89b7f60992cb16e59aefdc3b5849d1"
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
