import axios from 'axios'
import router from '@/router'
import { getToken } from '@/utils/token'

// let baseUrl = envs.buildUrl + '/' + envs.apiVersion
let baseUrl = ''

// 기본 meta 값
function _getDefaultMeta() {
    return {
        useTokenUpdate: false, // 받아온 response에서 token 값을 가져와 재 셋팅을 할 경우 true로 셋팅한다.
        useAuth: true, // 인증 모듈을 사용한다. false가 되었을 경우 401 상태에서도 Login 화면으로 가지 않는다. (i18n과 같은 특별한 경우에서만 사용)
        apiVersion: envs.apiVersion, // API 버전을 호출 API 별로 정의 한다. 기본 값은 envs에 정의한 값으로 셋팅된다.
        useErrorMessage: true, // response 시, 에러가 날 경우 에러 메시지를 출력하는 여부를 셋팅한다. 기본은 true
        useResponseAll: false // request 실행 이후, API로 돌아오는 Obj를 Axios response 전문으로 변경되어 전달한다. 기본은 false
    }
}
const service = axios.create({
    baseURL: baseUrl,
    timeout: 30000, // timeout은 30초로 설정
    headers: { 'Cache-Control': 'no-cache' }
})

// axios의 reqeust 인터셉터
service.interceptors.request.use(
    config => {
      // meta 값 기본 정의
      if (!config.meta) config.meta = {}
      Object.assign(config.meta, _getDefaultMeta())
  
      // 헤더 구성
      if (getToken()) {
        config.headers['Authorization'] = getToken()
        if (!jglib.isEmpty(store.state.user.userId)) {
          if (config.data === undefined) {
            config.data = {}
          }
          config.data['userId'] = store.state.user.userId
        }
        // 마지막 요청일시
        store.dispatch('SetLastRequestDate')
      }
  
      if (!config.meta.invisibleLoading) {
        store.dispatch('SetLoading', true)
      }
      return config
    },
    error => {
      // 에러가 날경우 진행 부분
      // console.log(error) // for debug
      Promise.reject(error)
    }
  )
  