self.addEventListener("install",e=>{
    e.waitUntil(caches.open("static").then(cache=>{
        return cache.addAll(["./,","./style.css","./images/logo64.png","./images/logo512.png","./images/menuicon.png","./images/calendar.png","./images/homestay.png","./images/hotel.png","./images/airplane.png","./images/rail.png","./images/honeymoon_tour.jpg","./images/temple_tours.jpg","./images/paragliding.jpg","./images/south_india_tour"]);
    }))
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(Response=>{
            return Response || fetch(e.request)
        })
    )
})