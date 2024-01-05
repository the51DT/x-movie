export default [
  {
    path: '/Login',
    name: '/Login',
    component: () => import('@/views/member/LoginPage.vue'),
  },
  {
    path: '/Join',
    name: '/Join',
    component: () => import('@/views/member/JoinPage.vue'),
  },
]
