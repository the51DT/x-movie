<template>
  <div class="x-input-box">
    <label
      :for="`input${randomId}`"
      :class="`x-input-box__label ${
        inputActive ? 'x-input-box__label--float' : ''
      } ${labelHide == 'true' ? 'x-input-box__label--hidden' : ''}`"
      >{{ label }}
      <sup class="x-input-box__required" v-if="required">*</sup></label
    >
    <input
      class="x-input-box__input"
      :type="type"
      :value="modelValue"
      :id="`input${randomId}`"
      :placeholder="placeholder"
      :maxlength="maxLenth"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      @focusout="$emit('update:modelValue', $event.target.value)"
    />
    <span class="x-input-box__error" v-if="errorMsg">{{ errorMsg }}</span>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'
const inputActive = ref('')
const props = defineProps({
  type: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelHide: {
    type: Boolean,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  maxLenth: {
    type: Number,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMsg: {
    type: String,
    default: '',
  },
  inputActive: {
    type: Boolean,
    default: '',
  },
})

let emit = defineEmits(['update:modelValue'])

// const randomId = ref('')
// const randomNumber = () => {
//   let N = 1000000
//   let M = 1
//   let tt = Math.random() * N
//   return Math.floor(tt) + M
// }
// randomId.value = randomNumber()
</script>
<style lang="scss"></style>
