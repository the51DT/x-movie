<template>
  <div class="main-container">
    <div class="main-container__movies">
      <div class="movies-warp">
        <div class="movies-container">
          <!-- box type 1. padding: 0 rem(24px) -->
          <!-- contents area -->
          <!-- [C] member -->
          <div class="x-member">
            <div class="x-member__info">
              <div class="x-member__info__photo">
                <div class="x-member__info__photo__img-box">
                  <img
                    src="../../../public/images/icon/icon-movie-user.svg"
                    alt="user Smith"
                  />
                </div>
              </div>
              <div class="x-member__info__text">
                <span class="x-member__info__text__nickname"
                  >Hello, Smith
                </span>
                <span class="x-member__info__text__desc"
                  >Let’s stream your favorite movie</span
                >
              </div>
            </div>
            <div class="x-member__util">
              <div class="x-button-box">
                <router-link
                  class="button button--type-icon button--type-link"
                  :to="`${linkTo}`"
                >
                  <span class="button__text">wish</span></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="movies-container movies-container--wide">
          <XSlide
            type="wide"
            :data="nowPlayingList"
            initialSlide="1"
            usedScore="false"
          />
        </div>
        <div class="movies-container movies-container">
          <XTitle
            title="Most popular"
            linkName="See All"
            linkTo="/"
            usedUtil="false"
          />
          <XSlide
            type="poster"
            :data="nowPlayingList"
            initialSlide="0"
            usedScore="true"
          />
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
