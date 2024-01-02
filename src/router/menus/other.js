export default [
    {
        path: "/cmpSwiper",
        name: "cmpSwiper",
        component: () => import('@/views/swiperCase/cmpSwiper.vue')
    },    
    {
        path: "/scrollEvent",
        name: "scrollEvent",
        component: () => import('@/views/scrollEvent/scrollEvent.vue')
    },     
    {
        path: "/TikTok",
        name: "TikTok",
        component: () => import('@/views/swiperCase/TikTok.vue'),
        meta: {
            onlyBody: true
        }
    },  
    {
        path: "/shortsApp",
        name: "shortsApp",
        component: () => import('@/views/shortsApp/Shorts.vue'),
        meta: {
            onlyBody: true
        }
    }    
]