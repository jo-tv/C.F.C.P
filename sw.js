const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/about.html",
    "/appointment.html",
    "/contact.html",
    "/CONTACTEZ-NOUS.html",
    "/courses.html",
    "/equipe.html",
    "/feature.html",
    "/Fonctionnalités.html",
    "/formation.html",
    "/Galerie.html",
    "/groupe.html",
    "/team.html",
    "/groupe.html",
    "/testimonial.html",
    "/Témoignages.html",
    "/homeFr.html",
    "/offline.html",
    "/css/bootstrap.min.css",
    "/css/styleAlbum.css",
    "/css/style.css",
    "/js/main.js",
    "/js/mainAlbum.js",
    "/img/logo.png"
];

// تثبيت Service Worker وتخزين الملفات
self.addEventListener("install", event => {
    console.log("Service Worker installing...");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting(); // لتفعيله مباشرة
});

// تفعيل Service Worker وتنظيف الكاشات القديمة
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    self.clients.claim(); // لتفعيل الخدمة على جميع الصفحات
});

// التعامل مع الطلبات
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // إذا وجد في الكاش، يتم إرجاعه
            if (response) return response;

            // إذا لم يوجد، نحاول تحميله من الشبكة
            return fetch(event.request).catch(err => {
                // إذا كان الطلب من نوع "navigate" (طلب صفحة HTML)
                if (event.request.mode === "navigate") {
                    return caches.match("/offline.html");
                }
            });
        })
    );
});
