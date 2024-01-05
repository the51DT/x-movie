<template>
  <div class="main-container">
    <div class="main-container__movies">
      <div class="movies-warp">
        <div class="movies-container">
          <form class="x-movie-form">
            <ul
              class="x-movie-form__container x-movie-form__container--dir-row"
            >
              <li>
                <XInputBox
                  v-model="verification01"
                  type="text"
                  label="Verifying your account"
                  labelHide="true"
                  required="true"
                  maxLenth="1"
                />
              </li>
              <li>
                <XInputBox
                  v-model="verification02"
                  type="text"
                  label="Verifying your account"
                  labelHide="true"
                  required="true"
                  maxLenth="1"
                />
              </li>
              <li>
                <XInputBox
                  v-model="verification03"
                  type="text"
                  label="Verifying your account"
                  labelHide="true"
                  required="true"
                  maxLenth="1"
                />
              </li>
              <li>
                <XInputBox
                  v-model="verification04"
                  type="text"
                  label="Verifying your account"
                  labelHide="true"
                  required="true"
                  maxLenth="1"
                />
              </li>
            </ul>
            <div class="x-button-box">
              <button
                type="button"
                class="button button--type-bg button--type-link"
              >
                <span class="button__text">Next</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import XInputBox from '@/layouts/components/inputBox.vue'

const route = useRoute()
const allP = route.params
const userName = route.params.userName
const userNumber = route.params.userNumber
const verificationCode = route.params.verificationCode
// console.log('allP', allp)
// console.log(allP)

onMounted(() => {
  console.log('allP', allP)
})

const verification01 = ref('')
const verification02 = ref('')
const verification03 = ref('')
const verification04 = ref('')
</script>
<style lang="scss"></style>
