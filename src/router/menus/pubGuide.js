export default [
    {
        path: '/PubSummary',
        name: 'PubSummary',
        component: () => import('@/views/pubGuid/PubSummary.vue')
    },
    {
        path: '/PubRoll',
        name: 'PubRoll',
        component: () => import('@/views/pubGuid/PubRoll.vue')
    },    
    {
        path: '/PubList',
        name: 'PubList',
        component: () => import('@/views/pubGuid/PubList.vue')
    }
]