!function(){"use strict";var e={913:function(){try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}},n=!0;try{e[a](i,i.exports,s),n=!1}finally{n&&delete t[a]}return i.exports}!function(){let e,t,a;s(913);let r=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class i extends Error{constructor(e,t){let s=r(e,t);super(s),this.name=e,this.details=t}}let n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>[n.prefix,e,n.suffix].filter(e=>e&&e.length>0).join("-"),c=e=>{for(let t of Object.keys(n))e(t)},h={updateDetails:e=>{c(t=>{"string"==typeof e[t]&&(n[t]=e[t])})},getGoogleAnalyticsName:e=>e||l(n.googleAnalytics),getPrecacheName:e=>e||l(n.precache),getPrefix:()=>n.prefix,getRuntimeName:e=>e||l(n.runtime),getSuffix:()=>n.suffix};function o(e,t){let s=t();return e.waitUntil(s),s}s(977);class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){let e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{let s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}async function d(t,s){let a=null;if(t.url){let e=new URL(t.url);a=e.origin}if(a!==self.location.origin)throw new i("cross-origin-copy-response",{origin:a});let r=t.clone(),n={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},l=s?s(n):n,c=!function(){if(void 0===e){let t=new Response("");if("body"in t)try{new Response(t.body),e=!0}catch(t){e=!1}e=!1}return e}()?await r.blob():r.body;return new Response(c,l)}let g=e=>{let t=new URL(String(e),location.href);return t.href.replace(RegExp(`^${location.origin}`),"")};function p(e,t){let s=new URL(e);for(let e of t)s.searchParams.delete(e);return s.href}async function y(e,t,s,a){let r=p(t.url,s);if(t.url===r)return e.match(t,a);let i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),n=await e.keys(t,i);for(let t of n){let i=p(t.url,s);if(r===i)return e.match(t,a)}}class w{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}let m=new Set;async function R(){for(let e of m)await e()}function C(e){return"string"==typeof e?new Request(e):e}s(873);class b{constructor(e,t){for(let s of(this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new w,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map,this._plugins))this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,s=C(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){let e=await t.preloadResponse;if(e)return e}let a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(let e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new i("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}let r=s.clone();try{let e;for(let a of(e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))e=await a({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){let t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){let t;let s=C(e),{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(s,"read"),n=Object.assign(Object.assign({},r),{cacheName:a});for(let e of(t=await caches.match(i,n),this.iterateCallbacks("cachedResponseWillBeUsed")))t=await e({cacheName:a,matchOptions:r,cachedResponse:t,request:i,event:this.event})||void 0;return t}async cachePut(e,t){let s=C(e);await new Promise(e=>setTimeout(e,0));let a=await this.getCacheKey(s,"write");if(!t)throw new i("cache-put-with-no-response",{url:g(a.url)});let r=await this._ensureResponseSafeToCache(t);if(!r)return!1;let{cacheName:n,matchOptions:l}=this._strategy,c=await self.caches.open(n),h=this.hasCallback("cacheDidUpdate"),o=h?await y(c,a.clone(),["__WB_REVISION__"],l):null;try{await c.put(a,h?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await R(),e}for(let e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:n,oldResponse:o,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){let s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(let e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=C(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if("function"==typeof t[e]){let s=this._pluginStateMap.get(t),a=a=>{let r=Object.assign(Object.assign({},a),{state:s});return t[e](r)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(let e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return!s&&t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=h.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,r=new b(this,{event:t,request:s,params:a}),i=this._getResponse(r,s,t),n=this._awaitComplete(i,r,s,t);return[i,n]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(!(a=await this._handle(t,e))||"error"===a.type)throw new i("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(let i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:s,request:t}))break}if(a);else throw r}for(let r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let r,i;try{r=await e}catch(e){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:r,error:i}),t.destroy(),i)throw i}}class L extends v{constructor(e={}){e.cacheName=h.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(L.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){let s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;let a=t.params||{};if(this._fallbackToNetwork){let r=a.integrity,i=e.integrity;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||r:void 0})),r&&(!i||i===r)&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new i("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let s=await t.fetch(e),a=await t.cachePut(e,s.clone());if(!a)throw new i("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[s,a]of this.plugins.entries())a!==L.copyRedirectedCacheableResponsesPlugin&&(a===L.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(L.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}L.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},L.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class U{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new L({cacheName:h.getPrecacheName(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);let{cacheKey:e,url:a}=function(e){if(!e)throw new i("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){let t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}let{revision:t,url:s}=e;if(!s)throw new i("add-to-cache-list-unexpected-type",{entry:e});if(!t){let e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}let a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new i("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new i("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){let e=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return o(e,async()=>{let t=new u;for(let[s,a]of(this.strategy.plugins.push(t),this._urlsToCacheKeys)){let t=this._cacheKeysToIntegrities.get(a),r=this._urlsToCacheModes.get(s),i=new Request(s,{integrity:t,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:i,event:e}))}let{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return o(e,async()=>{let e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let r of t)s.has(r.url)||(await e.delete(r),a.push(r.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){let e=await self.caches.open(this.strategy.cacheName);return e.match(s)}}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new i("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let k=()=>(t||(t=new U),t);s(80);let T=e=>e&&"object"==typeof e?e:{handle:e};class x{constructor(e,t,s="GET"){this.handler=T(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=T(e)}}class K extends x{constructor(e,t,s){let a=({url:t})=>{let s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)};super(a,t,s)}}class P{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){let{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);let s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let s;let a=new URL(e.url,location.href);if(!a.protocol.startsWith("http"))return;let r=a.origin===location.origin,{params:i,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:a}),l=n&&n.handler,c=e.method;if(!l&&this._defaultHandlerMap.has(c)&&(l=this._defaultHandlerMap.get(c)),!l)return;try{s=l.handle({url:a,request:e,event:t,params:i})}catch(e){s=Promise.reject(e)}let h=n&&n.catchHandler;return s instanceof Promise&&(this._catchHandler||h)&&(s=s.catch(async s=>{if(h)try{return await h.handle({url:a,request:e,event:t,params:i})}catch(e){e instanceof Error&&(s=e)}if(this._catchHandler)return this._catchHandler.handle({url:a,request:e,event:t});throw s})),s}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){let r=this._routes.get(s.method)||[];for(let i of r){let r;let n=i.match({url:e,sameOrigin:t,request:s,event:a});if(n)return Array.isArray(r=n)&&0===r.length?r=void 0:n.constructor===Object&&0===Object.keys(n).length?r=void 0:"boolean"==typeof n&&(r=void 0),{route:i,params:r}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,T(e))}setCatchHandler(e){this._catchHandler=T(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new i("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new i("unregister-route-route-not-registered")}}let q=()=>(a||((a=new P).addFetchListener(),a.addCacheListener()),a);class E extends x{constructor(e,t){let s=({request:s})=>{let a=e.getURLsToCacheKeys();for(let r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:r}={}){let i=new URL(e,location.href);i.hash="",yield i.href;let n=function(e,t=[]){for(let s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(i,t);if(yield n.href,s&&n.pathname.endsWith("/")){let e=new URL(n.href);e.pathname+=s,yield e.href}if(a){let e=new URL(n.href);e.pathname+=".html",yield e.href}if(r){let e=r({url:i});for(let t of e)yield t.href}}(s.url,t)){let t=a.get(r);if(t){let s=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:s}}}};super(s,e.strategy)}}!function(e){let t=k();t.precache(e)}([{'revision':'62f2f03e3b090c1e','url':'/_next/static/chunks/54c66987-62f2f03e3b090c1e.js'},{'revision':'df69f0b31ac56bd2','url':'/_next/static/chunks/767-df69f0b31ac56bd2.js'},{'revision':'2c79e2a64abdb08b','url':'/_next/static/chunks/framework-2c79e2a64abdb08b.js'},{'revision':'5e8e6846957165cd','url':'/_next/static/chunks/main-5e8e6846957165cd.js'},{'revision':'be9ac3bc443fb58a','url':'/_next/static/chunks/pages/GenerateComponent-be9ac3bc443fb58a.js'},{'revision':'97d725a4bc5ca324','url':'/_next/static/chunks/pages/_app-97d725a4bc5ca324.js'},{'revision':'8353112a01355ec2','url':'/_next/static/chunks/pages/_error-8353112a01355ec2.js'},{'revision':'4cfbd6b2099f762c','url':'/_next/static/chunks/pages/index-4cfbd6b2099f762c.js'},{'revision':'837c0df77fd5009c9e46d446188ecfd0','url':'/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js'},{'revision':'ee7e63bc15b31913','url':'/_next/static/chunks/webpack-ee7e63bc15b31913.js'},{'revision':'876d048b5dab7c28','url':'/_next/static/css/876d048b5dab7c28.css'},{'revision':'c8e16cba0fd27bca','url':'/_next/static/css/c8e16cba0fd27bca.css'},{'revision':'e1b9f0ecaaebb12c93064cd3c406f82b','url':'/_next/static/media/2aaf0723e720e8b9-s.p.woff2'},{'revision':'2c1fc211bf5cca7ae7e7396dc9e4c824','url':'/_next/static/media/9c4f34569c9b36ca-s.woff2'},{'revision':'b0c49a041e15bdbca22833f1ed5cfb19','url':'/_next/static/media/ae9ae6716d4f8bf8-s.woff2'},{'revision':'70afeea69c7f52ffccde29e1ea470838','url':'/_next/static/media/b1db3e28af9ef94a-s.woff2'},{'revision':'08ccb2a3cfc83cf18d4a3ec64dd7c11b','url':'/_next/static/media/b967158bc7d7a9fb-s.woff2'},{'revision':'8ca5bc1cd1579933b73e51ec9354eec9','url':'/_next/static/media/c0f5ec5bbf5913b7-s.woff2'},{'revision':'9885d5da3e4dfffab0b4b1f4a259ca27','url':'/_next/static/media/d1d9458b69004127-s.woff2'},{'revision':'b15e464fff5ab58a866d95d417ee57be','url':'/_next/static/wvOJfpBorYVZFbi11kj83/_buildManifest.js'},{'revision':'b6652df95db52feb4daf4eca35380933','url':'/_next/static/wvOJfpBorYVZFbi11kj83/_ssgManifest.js'},{'revision':'c30c7d42707a47a3f4591831641e50dc','url':'/favicon.ico'},{'revision':'47b6bc16ac0a9fb60fb99defa518264b','url':'/icon-192x192.png'},{'revision':'8727defd95269340cddc2b70117fb556','url':'/icon-256x256.png'},{'revision':'6eaa443dccd4f4c470b23ec84aca1459','url':'/icon-384x384.png'},{'revision':'d6905ba5eaa780d3e9a097d596c838c5','url':'/icon-512x512.png'},{'revision':'bba8f71eb1458e31d562c50d1e824011','url':'/manifest.json'},{'revision':'8e061864f388b47f33a1c3780831193e','url':'/next.svg'},{'revision':'ba20ce0b9b7fce6fca6baf1448a2190c','url':'/serviceWorker.js'},{'revision':'53f96b8290673ef9d2895908e69b2f92','url':'/thirteen.svg'},{'revision':'61c6b19abff40ea7acd577be818f3976','url':'/vercel.svg'}]),function(e){let t=k(),s=new E(t,e);!function(e,t,s){let a;if("string"==typeof e){let r=new URL(e,location.href);a=new x(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)a=new K(e,t,s);else if("function"==typeof e)a=new x(e,t,s);else if(e instanceof x)a=e;else throw new i("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});let r=q();r.registerRoute(a)}(s)}(void 0),self.addEventListener("install",e=>{console.log("service worker has been installed")}),self.addEventListener("activate",e=>{console.log("service worker has been activate")}),self.addEventListener("fetch",e=>{})}()}();