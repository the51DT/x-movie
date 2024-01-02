<template>
     <el-card class="box-card main-weather">
      <div class="text item">
        안녕하세요?<br>
        <strong>{{today}} 현재 시각 {{ current }}</strong> 서울 날씨 입니다.<br>
        오늘은 <strong>{{ todayWeather  }}</strong>, 현재 온도는  <strong>{{ todaytemp }} °C</strong>,<br> 습도는 <strong>{{ todayhumidity }}</strong> 입니다.<br>
        <strong>{{today}} 일출 {{ sunriseTimeIs  }}, 일몰 {{ sunsetTimeIs  }}</strong> 입니다.<br>
        여러분이 계신곳은 어떠신가요?<br>
        <div class="button__wrap">
          <router-link to="/cmpKoreaWeather" class="btn primary medium">지역별 날씨 페이지</router-link>
          <Button
            buttonName="행운카드 보기"
            types="primary"
            size="medium"
            @click="showLuckyCard" 
          />
        </div>
      </div>
    </el-card>   
</template>

<script setup>
import axios from 'axios'
import { ref, defineEmits } from 'vue'

import { getWeathers } from '@/api/getWeather'
const weatherData = getWeathers()
const todayWeather = weatherData.todayWeather
const todaytemp = weatherData.todaytemp
const todaywind = weatherData.todaywind
const todayhumidity = weatherData.todayhumidity
const sunriseTimeIs = weatherData.sunriseTimeIs
const sunsetTimeIs = weatherData.sunsetTimeIs
const WeatherIcon = weatherData.WeatherIcon

import { getTodayDate } from '@/utils/time'
const [TodayDateFull, TodayData, currentTime] = getTodayDate()
const today = TodayData
const current = currentTime
const emit = defineEmits(["luckCardShow"]);
const showLuckyCard = () => {  
  emit('luckCardShow', true)
}
</script>

<style>

</style>