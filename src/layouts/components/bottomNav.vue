<template>
  <div class="movies-nav__item">
    <!--button component or slot -->
    <router-link v-if="link" :to="`/${link}`" class="movies-nav__item__link">
      <span class="movies-nav__item__text">{{ name }}</span></router-link
    >
    <div class="button-box" v-if="button">
      <button
        :data-value-target="target"
        class="button movies-nav__item__button"
      >
        <span class="movies-nav__item__text">{{ name }}</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps(['type', 'link', 'name', 'target'])
</script>
<style lang="scss"></style>
