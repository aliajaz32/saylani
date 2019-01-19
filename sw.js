const cacheName = "DK-News"
const staticAssets = [
    "./",
    "i./index.html",
    "./style.css",
    "./app.js"
]

self.addEventListener('install', event=>{
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log("[Service Worker] caching up shell");
            return cache.addAll(staticAssets);
        })
    );
})

self.addEventListener('fetch', event=>{
    const req = event.request;
    console.log(request);
    const url = new URL(req.url);
    console.log(url);
    if(url.origin === location.origin){
        event.respondWith();
    }
    else{
        event.repondWith();
    }
})


async function cacheFirst(req){
    const cacheResponse = await cache.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req){
    const cache = await caches.open(cacheName);
    try{
        const res = 
    }
    catch{

    }
}