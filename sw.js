if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let c={};const o=e=>n(e,f),t={module:{uri:f},exports:c,require:o};i[f]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e8df8c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C9GL8wCw.css",revision:null},{url:"assets/index-CzyenCNi.js",revision:null},{url:"index.html",revision:"12fc8ac20528cea4850ecf0f884a7e63"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.svg",revision:"7f1c4521acc10694fefef8f72dd2ea5f"},{url:"pwa-192x192.png",revision:"021df52501f4357c03eebd808f40dc6a"},{url:"pwa-512x512.png",revision:"d2f759aaabcb2c44ff52b27fde3de6e0"},{url:"pwa-maskable-192x192.png",revision:"7cd11dc5f0490b349d23eef5591d10e5"},{url:"pwa-maskable-512x512.png",revision:"8c97dc367a85a5a1eba523b24f79d03b"},{url:"manifest.webmanifest",revision:"c452912633990899ffe790f985ad0db9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
