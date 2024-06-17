<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  playing: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['play', 'pause'])
</script>

<template>
  <button
    class="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4"
    @click="playing ? $emit('pause') : $emit('play')"
  >
    <svg
      v-if="playing"
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      class="w-6 h-6 text-gray-600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="SVGRepo_bgCarrier"
        stroke-width="0"
      />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
          fill="#000000"
        />
        <path
          d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
          fill="#000000"
        />
      </g>
    </svg>
    <svg
      v-if="!playing"
      class="ml-1 w-4"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
        fill="#000000"
      />
    </svg>
  </button>
</template>
