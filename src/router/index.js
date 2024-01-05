import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/errors/404.vue'
// 파일 링크
import Main from './menus/Main'
// import PubGuides from './menus/pubGuide'
// import Join from './menus/member'
import Movie from './menus/movie'
// import cmpGuide from './menus/cmpGuide'
// import other from './menus/other'

import { useUsersStore } from '@/stores/users'

// 라우터
const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
  ...Main,
  // ...PubGuides,
  // ...Join //회원
  ...Movie, // 영화
  // ...cmpGuide, // 컴포넌트 가이드
  // ...other // 기타
]
// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  // 로그인 상태 아닐 시 전역 네비게이션 가드 실행
  const usersStore = useUsersStore() // loginStore 스토어 불러오기 (피니아 상태관리)
  // const authRequired = ['/Mypage'] // 로그인이 필요없는 페이지
  // console.log(authRequired, '로그인url체크')

  // if( authRequired && !usersStore.isLogin ) { // 로그인 필요 페이지 접근 && 로그인 안된 상태라면
  //     usersStore.returnUrl = to.fullPath // 요청된 경로(to.fullPath)를 pinia store의 returnUrl에 저장
  //   return '/Signup' // 로그인 페이지로 리다이렉션
  // }
})

// 라우터 추출 (main.js에서 import)
export { router }
