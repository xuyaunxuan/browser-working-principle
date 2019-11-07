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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "970efec83d3bc9e9b97dff595fc70b06"
  },
  {
    "url": "assets/css/0.styles.c6204b52.css",
    "revision": "e13efd1da7e7ce021abaf197b273f974"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b9a884d8.js",
    "revision": "f360b9bf34669552f2f369bfec96c1e8"
  },
  {
    "url": "assets/js/11.68446c2f.js",
    "revision": "2e07cfa950cbcfb4b26d00b6dc24055b"
  },
  {
    "url": "assets/js/12.681116bc.js",
    "revision": "1615068d36a9d6115ab68cbd36767ca8"
  },
  {
    "url": "assets/js/13.6c28ade0.js",
    "revision": "a141a6ee421fca39f546b1bac28c351b"
  },
  {
    "url": "assets/js/14.85016ec2.js",
    "revision": "132e0f5b40b0a3bf8c7b4cd43a9ddad3"
  },
  {
    "url": "assets/js/15.1286b301.js",
    "revision": "acd269d25205576695a3dea8d6f1b520"
  },
  {
    "url": "assets/js/16.3306c3b6.js",
    "revision": "462dc59716c3240ff1131cae93218754"
  },
  {
    "url": "assets/js/17.6d9714bc.js",
    "revision": "74a247e5437b6fff596ae5198a09e06e"
  },
  {
    "url": "assets/js/18.0cfa3ea0.js",
    "revision": "a9e68a2ee70d3d4436864a3cf2266fca"
  },
  {
    "url": "assets/js/19.ee1c4dbb.js",
    "revision": "5b57855792b681ef2894e274d1e1fe66"
  },
  {
    "url": "assets/js/20.c6f0a5b4.js",
    "revision": "77452ef03515a2e0b834648025c727d4"
  },
  {
    "url": "assets/js/21.397a7903.js",
    "revision": "0bc7d3b6761f6f6d768b07029f455db6"
  },
  {
    "url": "assets/js/22.9a55ae80.js",
    "revision": "f93395e23911a690eab2a820aa24c99f"
  },
  {
    "url": "assets/js/24.829e0a7a.js",
    "revision": "d824190716b26479c523885bac079917"
  },
  {
    "url": "assets/js/25.b6aeda4e.js",
    "revision": "ed85a8e4cbb16b76888657a52eda3cb1"
  },
  {
    "url": "assets/js/26.d0811ba6.js",
    "revision": "0d1225a99a41495a8306e3f5e17580a9"
  },
  {
    "url": "assets/js/27.70c4d5c6.js",
    "revision": "0ddc7f7683b3ebd5d0871184a546b981"
  },
  {
    "url": "assets/js/28.996671f7.js",
    "revision": "4352428f0ce0b0e9a5a11c4c5481288b"
  },
  {
    "url": "assets/js/29.19b70eda.js",
    "revision": "0384c3ef364fa5c3b823a097723796db"
  },
  {
    "url": "assets/js/3.21e99929.js",
    "revision": "ddd915d74e26a0f3b86044ddfe5a9000"
  },
  {
    "url": "assets/js/30.58535fe2.js",
    "revision": "444c2b3f80db7152505ca1072e682197"
  },
  {
    "url": "assets/js/31.16547446.js",
    "revision": "3efd8841ec0465f492395c8c58271204"
  },
  {
    "url": "assets/js/32.f01bfbd0.js",
    "revision": "9266f7d3142e67746939f50fca8d5804"
  },
  {
    "url": "assets/js/33.5f00d84b.js",
    "revision": "83736412578bbe2f5ddc01e648c4c640"
  },
  {
    "url": "assets/js/34.0dfd4d0f.js",
    "revision": "d4cd9242a91b62e1d61960f786d4ae71"
  },
  {
    "url": "assets/js/35.e036b620.js",
    "revision": "71a55ea5cf39aa0b1667b6e367226657"
  },
  {
    "url": "assets/js/36.8e9350ce.js",
    "revision": "37e6635af033fe5443514e8258669838"
  },
  {
    "url": "assets/js/37.1263acf5.js",
    "revision": "ab2f0a89400025413a1cf9e0d001b413"
  },
  {
    "url": "assets/js/38.5a67d973.js",
    "revision": "2d793544456586d83075897d747e8e1f"
  },
  {
    "url": "assets/js/39.ffa81bd3.js",
    "revision": "1a9807747ae97505edd8258ba01b40d1"
  },
  {
    "url": "assets/js/4.92bf7640.js",
    "revision": "6aa14472d407c04137a5f0ff33e46c61"
  },
  {
    "url": "assets/js/40.29e4f653.js",
    "revision": "d78bdee68467b683cdb907f35a77ee13"
  },
  {
    "url": "assets/js/41.c9edad84.js",
    "revision": "f64ad4393caab713bd7aa4e298133441"
  },
  {
    "url": "assets/js/42.d77bf4cd.js",
    "revision": "70aa01453ab05522363200aee1008458"
  },
  {
    "url": "assets/js/43.552d3d75.js",
    "revision": "e361781db1b590f9dde8aa9d1f54effc"
  },
  {
    "url": "assets/js/44.74f435c0.js",
    "revision": "647bde8c06cfdc4426b9f6b313b3404b"
  },
  {
    "url": "assets/js/45.cebc679a.js",
    "revision": "c52f865bc6d06c4a2c72090f935fe132"
  },
  {
    "url": "assets/js/46.76a79677.js",
    "revision": "a56c6a48a90833fd3f3eae84c13b92d4"
  },
  {
    "url": "assets/js/47.2caa569c.js",
    "revision": "6e3a7e4f79f5f7437819268b914d5063"
  },
  {
    "url": "assets/js/48.14e6e19c.js",
    "revision": "6392aed0692e09da61f1e4d3ea8b2b3c"
  },
  {
    "url": "assets/js/49.52b999ae.js",
    "revision": "c3a28c4bc3597b77a3a336dc56cee495"
  },
  {
    "url": "assets/js/5.d8793daf.js",
    "revision": "8b62d7154512fb5207d692c19fc7f9aa"
  },
  {
    "url": "assets/js/50.0bef4737.js",
    "revision": "c1fea81374584e379aeacafb2036f2d4"
  },
  {
    "url": "assets/js/6.aa48e207.js",
    "revision": "05a4a87766e1bf9c3c0e9220ef916aac"
  },
  {
    "url": "assets/js/7.4ec8eb0e.js",
    "revision": "9ecff189404704eaa76b512cc5ab125c"
  },
  {
    "url": "assets/js/8.a1ce2895.js",
    "revision": "622f273e8e3490c9015b503b50982a49"
  },
  {
    "url": "assets/js/9.bf157376.js",
    "revision": "f8187406b56571b52ff31d3727dd28d5"
  },
  {
    "url": "assets/js/app.6579660e.js",
    "revision": "d6216da012b7de08a8f1b369f31f6d8a"
  },
  {
    "url": "assets/js/vendors~notification.87fa8971.js",
    "revision": "42e6fac24e08529f6883fbf1c8369934"
  },
  {
    "url": "guide/index.html",
    "revision": "f131055669836bc24b251025fb131f62"
  },
  {
    "url": "guide/part1/lesson01.html",
    "revision": "46cc98224934592abfcddfb40888ca2d"
  },
  {
    "url": "guide/part1/lesson02.html",
    "revision": "d161fb5ded6177f7049c0b5d84e8d161"
  },
  {
    "url": "guide/part1/lesson03.html",
    "revision": "4f22f228fd8e522b53c1e5097b89ea0c"
  },
  {
    "url": "guide/part1/lesson04.html",
    "revision": "02f27685802b120af431cbb9075b7ca0"
  },
  {
    "url": "guide/part1/lesson05.html",
    "revision": "3b180f4a36eef97ec1be51167a48acd4"
  },
  {
    "url": "guide/part1/lesson06.html",
    "revision": "c6bc537a01f661d90395f5388e937203"
  },
  {
    "url": "guide/part2/lesson07.html",
    "revision": "a6044bc62e6e9c1a5f1ebb2a90441c36"
  },
  {
    "url": "guide/part2/lesson08.html",
    "revision": "e2f354123bd009ddcc021a6064937807"
  },
  {
    "url": "guide/part2/lesson09.html",
    "revision": "a50f07dc4e41add0495b1e687873e495"
  },
  {
    "url": "guide/part2/lesson11.html",
    "revision": "44f7809c05995b0272671b3974fa2cf4"
  },
  {
    "url": "guide/part3/lesson12.html",
    "revision": "f86c3cea8e79b56261f9ff0bf79020f9"
  },
  {
    "url": "guide/part3/lesson13.html",
    "revision": "2d842f6a4ed80cd524143d7daff0a6c9"
  },
  {
    "url": "guide/part3/lesson14.html",
    "revision": "333c9aac09ab2fefe077a33870616d3e"
  },
  {
    "url": "guide/part4/lesson15.html",
    "revision": "3a2f1663d9a236401b6c509457f50db8"
  },
  {
    "url": "guide/part4/lesson16.html",
    "revision": "f539844049d0d57e3fcfd6b9180eb8c7"
  },
  {
    "url": "guide/part4/lesson17.html",
    "revision": "4bfbf885864f4e2aa55b01dd9b040885"
  },
  {
    "url": "guide/part4/lesson18.html",
    "revision": "7bda1f2234c0254c4e09c470173701d8"
  },
  {
    "url": "guide/part4/lesson19.html",
    "revision": "49ae848ae608f3db1fe2d54e62fe64cf"
  },
  {
    "url": "guide/part4/lesson20.html",
    "revision": "0134f419f0bbd65076398f6b1d6750d5"
  },
  {
    "url": "guide/part5/lesson21.html",
    "revision": "e7f6a0f65c38a1a5ca30e349bbbffbb3"
  },
  {
    "url": "guide/part5/lesson22.html",
    "revision": "9ed1823bb6d2e92d1d6540750213d2ff"
  },
  {
    "url": "guide/part5/lesson23.html",
    "revision": "616362484c61c4f4ee9867df7af4215b"
  },
  {
    "url": "guide/part5/lesson24.html",
    "revision": "f14efbe31b976227793f434d42d519fd"
  },
  {
    "url": "guide/part5/lesson25.html",
    "revision": "3a74acf065e263608132e4f6cec945c6"
  },
  {
    "url": "guide/part5/lesson26.html",
    "revision": "f26216fb1842bf0a632e37fe6853c5dc"
  },
  {
    "url": "guide/part5/lesson27.html",
    "revision": "8d5f63625b9d5672a133d41997db8e72"
  },
  {
    "url": "guide/part5/lesson28.html",
    "revision": "a7bd77de07c58d96499e894608c4e277"
  },
  {
    "url": "guide/part6/lesson29.html",
    "revision": "f7c6efdf1a9fcd9beab0be32876989ee"
  },
  {
    "url": "guide/part6/lesson30.html",
    "revision": "860c7e93d2f06200ccb6863b89e93981"
  },
  {
    "url": "guide/part6/lesson31.html",
    "revision": "54ffe9002a6eaf7f54460c46546652c7"
  },
  {
    "url": "guide/part6/lesson32.html",
    "revision": "5278cfd68865ed6480e72f848807aa2f"
  },
  {
    "url": "guide/part6/lesson33.html",
    "revision": "162c228d7c5fc6dccd2101f8e97e21d0"
  },
  {
    "url": "guide/part6/lesson34.html",
    "revision": "7982ebf3339b8df038a43ce48f42ab2c"
  },
  {
    "url": "guide/part6/lesson35.html",
    "revision": "41523a9e8f8d8aaa6ad4defcddf644d3"
  },
  {
    "url": "guide/part6/lesson36.html",
    "revision": "10afcb2effc643ab14e4db52f286fcba"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "10f9b6f8678cfaf2b4488de5f7acdb37"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  }
].concat(self.__precacheManifest || []);
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
