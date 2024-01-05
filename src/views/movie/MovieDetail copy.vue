<template>
  <!-- <div>MovieDetail.vue {{ movieId }}</div> -->
  <div class="main-container">
    <div class="main-container__movies">
      <div class="movies-warp">
        <div class="movies-top">
          <!-- title, detail title -->
        </div>
        <!-- 
          1. member t/f
          2. content
            1) member
            2) slide (AD)
            3) Categories > Most popular, today
            4) Recommentd for you
          -->
        <div class="movies-container">
          <!-- box type 1. padding: 0 rem(24px) -->
          <!-- contents area -->
          <iframe
            id="player"
            type="text/html"
            width="640"
            height="360"
            :src="`http://www.youtube.com/embed/${thisMovieData}`"
            frameborder="0"
          ></iframe>
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
import { onMounted } from 'vue'

const route = useRoute()
const movieId = route.params.data

const MovieBaseUrl = 'https://api.themoviedb.org/3/movie/'
const MovieKey = 'd2bb40d5b45665c9a72ed5938162a943'
const thisMovieData = ref([])
axios
  .all([
    axios.get(
      `${MovieBaseUrl}${movieId}?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,
    ),
    axios.get(
      `${MovieBaseUrl}${movieId}?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,
    ),
  ])
  // .get(
  //   `${MovieBaseUrl}${movieId}?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,
  // )
  .then((res) => {
    // console.log(res.data.videos.results[0].key)
    // res.data.results.forEach((result) => {
    //   thisMovieData.value.push(result)
    // })

    // console.log(res.data.videos.results.index)
    thisMovieData.value.push(res.data.videos.results[0].key)
    console.log(thisMovieData)
  })
  .catch((err) => {
    console.log(err.message)
  })

//  const thisMovieData.value = res.data.videos.results[0]
//   const videoKey.value = thisMovieData.value.key
//   const videoName.value = thisMovieData.value.name
// console.log('thisMovieData', thisMovieData.videos.results)
</script>
<style lang="scss"></style>
