export default [
    {
        path: "/cmpTitle",
        name: "cmpTitle",
        component: () => import('@/views/cmpUser/cmpTitle.vue')
    },
    {
        path: "/cmpButton",
        name: "cmpButton",
        component: () => import('@/views/cmpUser/cmpButton.vue')
    },
    {
        path: "/cmpModal",
        name: "cmpModal",
        component: () => import('@/views/cmpUser/cmpModal.vue')
    },
    {
        path: "/cmpToolTip",
        name: "cmpToolTip",
        component: () => import('@/views/cmpUser/cmpToolTip.vue')
    },
    {
        path: "/cmpKoreaMap",
        name: "cmpKoreaMap",
        component: () => import('@/views/cmpUser/cmpSvgMap.vue')
    }, 
    {
        path: "/cmpAccordion",
        name: "cmpAccordion",
        component: () => import('@/views/cmpUser/cmpAccMenu.vue')
    },
    {
        path: "/cmpKoreaWeather",
        name: "cmpKoreaWeather",
        component: () => import('@/views/cmpUser/cmpKoreaWeather.vue')
    },
    {
        path: "/cmpTab",
        name: "cmpTab",
        component: () => import('@/views/cmpUser/cmpTab.vue')
    },
    {
        path: "/cmpTable",
        name: "cmpTable",
        component: () => import('@/views/cmpUser/cmpTable.vue')
    },    
    {
        path: "/cmpInput",
        name: "cmpInput",
        component: () => import('@/views/cmpUser/cmpInput.vue')
    }
]