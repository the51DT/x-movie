<template>
  <div>
    리뉴얼중
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { getWt } from '@/api/weather/getWeather';
let citis1 = 'Seoul'
let citis2 = 'Busan'
let citis3 = 'Incheon'
let citis4 = 'Daegu'
let citis5 = 'Gwangju'
let citis6 = 'Daejeon'
let citis7 = 'Ulsan'
let citis8 = 'Gyeonggi-do'
let citis9 = 'Gangwon-do'
let citis10 = 'Chungcheongbuk-do'
let citis11 = 'Chungcheongnam-do'
let citis12 = 'Jeollabuk-do'
let citis13 = 'Jeollanam-do'
let citis14 = 'Gyeongsangbuk-do'
let citis15 = 'Gyeongsangnam-do'
let citis16 = 'Jeju'
let citis17 = 'Sejong'

let param = ref(citis1);

const success = (response) => {
  console.log('성공: ', response)
};

const fail = (error) => {
  console.error('실패: ', error)
};

getWt(param.value, success, fail)
</script>