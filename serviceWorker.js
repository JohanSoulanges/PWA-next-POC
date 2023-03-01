import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

// Additional code goes here.
// install service worker
self.addEventListener("install", (evt) => {
  console.log("service worker has been installed");
});

// active service worker
self.addEventListener("activate", (evt) => {
  console.log("service worker has been activate");
  // (B) CLAIM CONTROL INSTANTLY
  // self.addEventListener("activate", (evt) => self.clients.claim());
});

// fetch event
self.addEventListener("fetch", (evt) => {
  // console.log('fetch event', evt);
});
