self.addEventListener('install', function(event) {
    console.log('[SW], install event', event);
});

self.addEventListener('activate', function(event) {
    console.log('[SW], activate event', event);    
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('[SW], fetch event', event);
    event.respondWith(fetch(event.request))
});

let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});
