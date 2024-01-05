<template>
  <div class="main-container">
    <div class="main-container__movies">
      <div class="movies-warp">
        <div class="movies-container">
          <form class="x-movie-form" @submit.prevent="accountCheck">
            <ul class="x-movie-form__container">
              <li>
                <XInputBox
                  :v-model="userName"
                  type="text"
                  label="Name"
                  placeholder="Full Name"
                  required="true"
                  :errorMsg="userNameError"
                  @focusout="targetE()"
                />
              </li>
              <li>
                <XInputBox
                  v-model="userNumber"
                  type="text"
                  label="Phone"
                  placeholder="Phone"
                  required="true"
                  :errorMsg="userNumberError"
                  @focusout="targetE()"
                />
              </li>
              <li>
                <XInputBox
                  v-model="verificationCode"
                  type="text"
                  label="verificationCode"
                  :value="verificationCode"
                  placeholder="Name, Phone 입력 완료시 노출됩니다."
                  :disabled="inputDisabled"
                />
              </li>
            </ul>
            <div class="x-button-box">
              <button
                type="submit"
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

const userName = ref('')
const userNumber = ref('')
const userNameError = ref('')
const userNumberError = ref('')
const inputDisabled = ref(true)
const verificationCode = ref('')
const targetFocus = ref(true)

// 공백
const regExp = /\s/g
// 국문 가능, 공백 불가함
let regName = /^[가-힣|a-z|A-Z| |*]+$/
let regPhone = /[^-\w\s]/g

const targetE = () => {
  // name
  if (userName) {
    if (regName.test(userName)) {
      console.log('name')
    } else {
      console.log('ddd')
    }
  } else {
    userNameError.value = ''
  }

  // number
  if (userNumber) {
    if (regPhone.test(userNumber)) {
      console.log('userNumber')
    } else {
      console.log('unnnn')
    }
  } else {
    userNumberError.value = ''
  }
}

const randomNumber = () => {
  let N = 9999
  let M = 1000
  let tt = Math.random() * N
  return Math.floor(tt) + M
}
verificationCode.value = randomNumber()

// valid check
const userNameCheck = () => {
  console.log('userNameCheck')
  if (userName) {
  } else {
  }
}

// router.push
const accountCheck = () => {
  console.log('accountCheck')
  // let userNameScc = false
  // let userNumberScc = false
  // let nonMemberAccount = {
  //   name: userName,
  //   phoneNumber: userNumber,
  // }

  // userName
  // if (!userName.value) {
  //   console.log('username', userName.value)
  //   userNameError.value = '이름을 입력하세요'
  // } else if (regExp.test(userName.value)) {
  //   userNameError.value = '공백은 제거해주세요'
  // } else {
  //   userNameError.value = ''
  //   userNameScc = true
  // }

  // //userNumber
  // if (!userNumber.value) {
  //   console.log('userNumber', userNumber.value)
  //   userNumberError.value = '전화번호를 입력하세요'
  // } else if (regExp.test(userNumber.value)) {
  //   userNumberError.value = '공백은 제거해주세요'
  // } else {
  //   userNumberError.value = ''
  //   userNumberScc = true
  // }

  //push, params
  // if (userNameScc && userNumberScc) {
  //   console.log(userName.value, userNumber.value, verificationCode.value)
  //   router.push({
  //     name: 'MovieVerification',
  //     params: {
  //       userName: userName.value,
  //       userNumber: userNumber.value,
  //       verificationCode: verificationCode.value,
  //     },
  //   })
  // }
}
</script>
<style lang="scss"></style>
