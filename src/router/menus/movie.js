export default [
  {
    path: '/movieGuide',
    name: 'movieGuide',
    component: () => import('@/views/movie/movieGuide.vue'),
  },
  {
    path: '/MovieList',
    name: 'MovieList',
    component: () => import('@/views/movie/MovieList.vue'),
  },
  {
    path: '/BoxOffice',
    name: 'BoxOffice',
    component: () => import('@/views/movie/BoxOffice.vue'),
  },
  {
    path: '/MovieAccount',
    name: 'MovieAccount',
    component: () => import('@/views/movie/MovieAccount.vue'),
  },
  {
    path: '/MovieVerification',
    name: 'MovieVerification',
    component: () => import('@/views/movie/MovieVerification.vue'),
  },
  {
    path: '/MovieSearch',
    name: 'MovieSearch',
    component: () => import('@/views/movie/MovieSearch.vue'),
  },
  {
    path: '/MovieWish',
    name: 'MovieWish',
    component: () => import('@/views/movie/MovieWish.vue'),
  },
  {
    path: '/MovieProfile',
    name: 'MovieProfile',
    component: () => import('@/views/movie/MovieProfile.vue'),
  },
  {
    path: '/MovieDetail/:data',
    name: 'MovieDetail',
    component: () => import('@/views/movie/MovieDetail.vue'),
  },
]
