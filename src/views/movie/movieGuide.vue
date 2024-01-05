<template>
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
          <!-- [C] member -->
        </div>
        <div class="movies-container movies-container--wide">
          <!-- box type 2. padding: 0 -->
          <!-- contents area -->
          <!-- [C] slide -->
          <XSlide
            type="wide"
            :data="nowPlayingList"
            initialSlide="1"
            usedScore="false"
          />
        </div>
        <div class="movies-container movies-container--wide">
          <!-- [A] Categories > most popular , today -->
          <!-- [C] title type1 -->
          <XTitle
            title="Categories1"
            linkName="See All"
            linkTo="/"
            usedUtil="false"
          />
          <!-- [C] title type2 : info 내용들은 추후 데이터 적용필요 -->
          <XTitle
            title="Categories2"
            linkName="See All"
            linkTo="/"
            usedUtil="true"
            infoRelease="March 2, 2022 "
            infoGenre="Action"
            infoTime="148"
          />
          <!-- [C] slide -->
          <XSlide
            type="poster"
            :data="nowPlayingList"
            initialSlide="0"
            usedScore="true"
          />
        </div>
        <div class="movies-container">
          <!-- box type 1. padding: 0 rem(24px) -->
          <!-- contents area -->
          <!-- [C] list -->
          <!-- [c] list type - wish -->
          <XContentList type="wish" :data="nowPlayingList" usedScore="true" />
          <!-- [c] list type - poster -->
          <XContentList type="simple" :data="nowPlayingList" usedScore="true" />
          <!-- [c] list type - poster -->
          <XContentList type="poster" :data="nowPlayingList" usedScore="true" />
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
          <XNavigationItem name="Home" link="MovieList" />
          <XNavigationItem name="Search" link="MovieSearch" />
          <XNavigationItem name="Wish" link="MovieWish" />
          <XNavigationItem name="Profile" link="MovieProfile" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
import XNavigationItem from '@/layouts/components/bottomNav.vue'
import XSlide from '@/layouts/components/contentSlide.vue'
import XContentList from '@/layouts/components/contentList.vue'
import XTitle from '@/layouts/components/titleArea.vue'

const MovieBaseUrl = 'https://api.themoviedb.org/3/movie/'
const MovieKey = 'd2bb40d5b45665c9a72ed5938162a943'
const nowPlayingList = ref([])
axios
  .get(
    `${MovieBaseUrl}now_playing?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,
  )
  .then((res) => {
    console.log(res.data)
    res.data.results.forEach((result) => {
      nowPlayingList.value.push(result)
    })
    console.log(nowPlayingList)
  })
  .catch((err) => {
    console.log(err.message)
  })
</script>
<style lang="scss"></style>
