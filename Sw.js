self.addEventListener('install', event => {
    event.waitUntil(chargeCache())
})


self.addEventListener('fetch', event => {
    const request = event.request

    if(request.method !== 'GET'){
        return
    }

    event.respondWith(updateCache(request))

    event.waitUntil(uploadCache(request))
})

async function chargeCache(){
    const cache = await caches.open('v1')
    return cache.addAll([

    ])
}

async function uploadCache(request){
    const cache = await caches.open('v1')
    const response = await fetch(request)

    return cache.put(request,response)
}

async function updateCache(request){
    const cache = await caches.open('v1')
    const response = await cache.match(request)

    return response || fetch(request)
}