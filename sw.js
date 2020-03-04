self.addEventListener('install', function(event) {
    console.log('[SW], install event', event);
    event.waitUntil(
        caches.open('static')
            .then(function(cache) {
                console.log('[SW] Precaching app shell');
                cache.addAll([
                    '/',
                    '/index.html',
                    '/js/main.js',
                    '/css/main.css',
                    '/css/icons.css',
                    '/images/logo3.png',
                    '/images/about-photo.jpg',
                    '/images/runmagedon.jpg',
                    // 'https://img.siepomaga.pl/uploads/fundraise/photo/6028/logo.jpg',
                    'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap',
                ])
            })
    )
});

self.addEventListener('activate', function(event) {
    console.log('[SW], activate event', event);    
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request)
                        .then(function(res) {
                            return caches.open('dynamic')
                                .then(function(cache) {
                                    return cache.put(event.request.url, res.clone())
                                })
                        })
                }
            })
    )
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
