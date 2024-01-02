<template>
  <div class="wrap">
    <Header  v-if="!route.meta.onlyBody" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/header.vue'  

const route = useRoute()

</script>