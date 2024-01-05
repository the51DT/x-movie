<template>
  <div class="x-title-area">
    <div class="x-title-area__container" v-if="title || (linkName && linkTo)">
      <h3 class="x-title-area__title" v-if="title">{{ title }}</h3>
      <div class="x-button-box" v-if="linkName && linkTo">
        <router-link
          class="button button--type-text button--type-link"
          :to="`${linkTo}`"
        >
          <span class="button__text">{{ linkName }}</span></router-link
        >
      </div>
    </div>
    <div class="x-title-area__container" v-if="usedUtil == 'true'">
      <div class="x-title-area__util">
        <span
          v-if="infoRelease"
          class="x-title-area__util__item x-title-area__util__item--release"
          >Release Date : {{ infoRelease }}</span
        >
        <div
          v-if="infoGenre"
          class="x-title-area__util__item x-title-area__util__item--genre"
        >
          <span v-for="idx in infoGenre[0]">{{ idx.name }}</span>
        </div>
        <span
          v-if="infoTime"
          class="x-title-area__util__item x-title-area__util__item--time"
          >{{ infoTime }} Minutes</span
        >
        <span
          v-if="infoGrade"
          class="x-title-area__util__item x-title-area__util__item--grade"
          >{{ infoGrade }}</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  linkName: {
    type: String,
    default: '',
  },
  linkTo: {
    type: String,
    default: '',
  },
  usedUtil: {
    type: Boolean,
    default: '',
  },
  infoRelease: {
    type: String,
    default: '',
  },
  infoGenre: {
    type: Object,
    default: '',
  },
  infoTime: {
    type: String,
    default: '',
  },
  infoGrade: {
    type: String,
    default: '',
  },
})
console.log('infoGenre', props.infoGenre)
//
</script>
<style lang="scss"></style>
