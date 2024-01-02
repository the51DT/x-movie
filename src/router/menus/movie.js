export default [
    {
        path: "/MovieList",
        name: "MovieList",
        component: () => import('@/views/movie/MovieList.vue')        
    },
    {
        path: "/BoxOffice",
        name: "BoxOffice",
        component: () => import('@/views/movie/BoxOffice.vue')
    }
]