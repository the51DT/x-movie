<template>
  <ul :class="`x-item-list ${type}`">
    <li v-for="movie in data">
      <!-- data 받아서 for 적용 필요  -->
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
            <div class="visual-box__desc__info-date" v-if="movie.release_date">
              {{ movie.release_date }}
            </div>
            <div class="visual-box__desc__info-others" v-if="type !== 'wide'">
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
            class="visual-box__desc__info-date"
            v-if="type !== 'poster' && movie.release_date"
          >
            {{ movie.release_date }}
          </div>
          <div class="visual-box__desc__info-others" v-if="type !== 'poster'">
            others
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
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
</script>
<style lang="scss"></style>
