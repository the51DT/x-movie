import { defineStore } from 'pinia'

export const useLikeStore = defineStore({
  id: 'likeStore',
  state: () => ({
    likeVideo: [],
  }),
  actions: {
    videoLike(video) {
      if(userStore.isLoggedIn) {
        video.statistics.like_count++     
        video.active = true      
        let newLikes = video     
        this.likeVideo.push(newLikes)
        console.log('좋아요', this.likeVideo, newLikes)        
      } else {
        alert('로그인 후 이용하실수 있습니다.')
      }
    }
  }
})
