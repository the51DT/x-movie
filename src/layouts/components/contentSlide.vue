<template>
  <!-- 
    slide type
    1. wide
    2. poster
    3. categories
    4. actors 
  -->
  <swiper
    :slides-per-view="`${type == 'wide' ? '1' : '3'}`"
    :space-between="12"
    :initialSlide="`${initialSlide ? initialSlide : '0'}`"
    :class="`x-slide x-slide--${type}`"
    :pagination="{ clickable: true }"
  >
    <!-- swiper-slide : data 로 for 적용 필요 -->
    <swiper-slide v-for="movie in data">
      <router-link :to="{ name: 'MovieDetail', params: { data: movie.id } }">
        <!-- @click="getMovieData(movie.id)" -->
        <div class="x-slide__container">
          <div class="visual-box">
            <div class="visual-box__img">
              <img
                :src="`https://image.tmdb.org/t/p/original/${
                  type == 'wide' ? movie.backdrop_path : movie.poster_path
                }`"
                alt=""
              />
              <div class="visual-box__score" v-if="usedScore == 'true'">
                <i class="visual-box__score__icon"></i>
                <span class="visual-box__score__text">{{
                  Number(movie.vote_average.toPrecision(2))
                }}</span>
              </div>
            </div>
            <div class="visual-box__text" v-if="type == 'wide'">
              <!-- text area : type wide -->
              <div class="visual-box__title" v-if="movie.title">
                {{ movie.title }}
              </div>
              <div class="visual-box__desc">
                <div
                  class="visual-box__desc__info-genre"
                  v-if="type !== 'wide' && movie.genre_ids"
                >
                  {{ movie.genre_ids }}
                </div>
                <div
                  class="visual-box__desc__info-release"
                  v-if="movie.release_date"
                >
                  {{ movie.release_date }}
                </div>
                <div
                  class="visual-box__desc__info-others"
                  v-if="type !== 'wide'"
                >
                  others
                </div>
              </div>
            </div>
          </div>
          <div class="visual-box__text" v-if="type !== 'wide'">
            <!-- text area : type poster, categories, actors -->
            <div class="visual-box__title" v-if="movie.title">
              {{ movie.title }}
            </div>
            <div class="visual-box__desc">
              <div class="visual-box__desc__info-genre" v-if="movie.genre_ids">
                {{ movie.genre_ids }}
              </div>
              <div
                class="visual-box__desc__info-release"
                v-if="type !== 'poster' && movie.release_date"
              >
                {{ movie.release_date }}
              </div>
              <div
                class="visual-box__desc__info-others"
                v-if="type !== 'poster'"
              >
                others
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
// import SwiperCore, { Pagination } from 'swiper/core'
// SwiperCore.use([Pagination])
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/pagination'

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
  initialSlide: {
    type: Number,
    default: '',
  },
  usedScore: {
    type: Boolean,
    default: 'false',
  },
  data: {
    type: Object,
    default: '',
  },
})

console.log('1', props)

// score
</script>
<style lang="scss"></style>
