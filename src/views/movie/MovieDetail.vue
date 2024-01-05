<template>
  <!-- <div>MovieDetail.vue {{ movieId }}</div> -->
  <div class="main-container">
    <div class="main-container__movies">
      <div class="movies-warp">
        <div class="movies-top">
          <!-- title, detail title -->
        </div>
        <div class="movies-container">
          <div class="visual-box">
            <div class="visual-box__img">
              <iframe
                id="player"
                type="text/html"
                width="640"
                height="360"
                :src="`http://www.youtube.com/embed/${dataVideo}`"
                frameborder="0"
              ></iframe>
            </div>
          </div>
          <XTitle
            :title="dataTitle[0]"
            usedUtil="true"
            :infoRelease="dataRelease[0]"
            :infoGenre="dataGenres"
            :infoTime="dataTime[0]"
          />
          <!-- contents area -->
        </div>
        <div class="movies-container">
          <p>{{ dataOverview }}</p>
        </div>
      </div>
      <div class="x-movies-nav">
        <div class="x-movies-nav__container">
          <!-- 
            nav area
            1. click, hover event / animation 필요
            2. link type >> tag : router-link / link='url'
            3. button type >> tag : button / button='target'
          -->
          <navigationItem name="Home" link="MovieList"></navigationItem>
          <navigationItem name="Search" link="MovieSearch"></navigationItem>
          <navigationItem name="Wish" link="MovieWish"></navigationItem>
          <navigationItem name="Profile" link="MovieProfile"></navigationItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import XTitle from '@/layouts/components/titleArea.vue'

const route = useRoute()
const movieId = route.params.data

const MovieBaseUrl = 'https://api.themoviedb.org/3/movie/'
const MovieKey = 'd2bb40d5b45665c9a72ed5938162a943'
// 영화 타이틀
const dataTitle = ref([])
// 예고편 유투브 키
const dataVideo = ref([])
// 영화 내용
const dataOverview = ref([])
// 개봉 일시
const dataRelease = ref([])
// 영화 장르
const dataGenres = ref([])
// 영화 상영시간
const dataTime = ref([])
axios
  .get(
    `${MovieBaseUrl}${movieId}?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,
  )
  .then((res) => {
    console.log(res.data)
    dataTitle.value.push(res.data.title)
    dataRelease.value.push(res.data.release_date)
    dataVideo.value.push(res.data.videos.results[0].key)
    dataOverview.value.push(res.data.overview)
    dataGenres.value.push(res.data.genres)
    dataTime.value.push(res.data.runtime)

    // console.log('dataOverview: ', dataOverview)
    console.log('dataTime: ', dataTime.value[0])
  })
  .catch((err) => {
    console.log(err.message)
  })
</script>
<style lang="scss"></style>
