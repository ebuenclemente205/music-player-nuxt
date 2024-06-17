<script setup lang="ts">
import SongCover from '@/assets/images/song-cover.jpg'
import type { Song } from '@/types/Songs'

defineProps<{
  currentSong?: Song
  playing: boolean
  currentTime: string
  duration: string
  shuffle: boolean
  percentage: number
}>()

defineEmits(['play', 'pause', 'next', 'prev', 'shuffle'])
</script>

<template>
  <div class="md:p-4 p-0 flex justify-center items-center">
    <div class="p-8 rounded-lg w-80 md:w-fill">
      <!-- Album Cover -->
      <img
        :src="SongCover"
        alt="song album cover"
        class="w-64 h-64 mx-auto rounded-lg mb-4 md:flex hidden"
      >

      <!-- Song Title -->
      <h2 class="text-xl font-semibold text-center text-white">
        {{ currentSong?.title }}
      </h2>

      <!-- Artist Name -->
      <p class="text-white opacity-50 text-sm text-center">
        {{ currentSong?.artist }}
      </p>

      <!-- Music Controls -->
      <div class="mt-6 flex justify-center items-center relative">
        <button
          class="p-3 pr-5 absolute -left-2"
          @click="$emit('shuffle')"
        >
          <svg
            id="Capa_1"
            fill="white"
            :class="`${shuffle ? '' : 'opacity-50'} hover:opacity-100`"
            height="24px"
            width="24px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 230.055 230.055"
            xml:space="preserve"
          ><g
            id="SVGRepo_bgCarrier"
            stroke-width="0"
          /><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><g id="SVGRepo_iconCarrier"> <path d="M199.419,124.497c-3.516-3.515-9.213-3.515-12.729,0c-3.515,3.515-3.515,9.213,0,12.728l12.637,12.636h-8.406 c-8.177,0-16.151-2.871-22.453-8.083l-32.346-26.751l32.345-26.751c6.303-5.212,14.277-8.083,22.454-8.083h8.406L186.69,92.83 c-3.515,3.515-3.515,9.213,0,12.728c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l28-28 c3.515-3.515,3.515-9.213,0-12.728l-28-28c-3.516-3.515-9.213-3.515-12.729,0c-3.515,3.515-3.515,9.213,0,12.728l12.637,12.636 h-8.406c-12.354,0-24.403,4.337-33.926,12.211L122,103.348L82.564,70.733c-6.658-5.507-15.084-8.54-23.724-8.54H9 c-4.971,0-9,4.029-9,9s4.029,9,9,9h49.841c4.462,0,8.813,1.566,12.252,4.411l36.786,30.423L71.094,145.45 c-3.439,2.844-7.791,4.411-12.253,4.411H9c-4.971,0-9,4.029-9,9s4.029,9,9,9h49.841c8.64,0,17.065-3.033,23.725-8.54L122,126.707 l34.996,28.943c9.521,7.875,21.57,12.211,33.925,12.211h8.406l-12.637,12.636c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l28-28c3.515-3.515,3.515-9.213,0-12.728L199.419,124.497z" /> </g></svg>
        </button>
        <button
          class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          @click="$emit('prev')"
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            class="w-4 h-4 text-gray-600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
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
                d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                fill="#000000"
              />
              <path
                d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                fill="#000000"
              />
            </g>
          </svg>
        </button>
        <PlayerPlayPauseButton
          :playing="playing"
          @play="$emit('play')"
          @pause="$emit('pause')"
        />
        <button
          class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          @click="$emit('next')"
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            class="w-4 h-4 text-gray-600"
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
                d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                fill="#000000"
              />
              <path
                d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                fill="#000000"
              />
            </g>
          </svg>
        </button>
      </div>
      <!-- Progress Bar -->
      <div
        class="mt-6 bg-gray-500 h-1 rounded-full"
        role="progressbar"
        :aria-valuenow="percentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="bg-white h-1 rounded-full transition duration-500"
          :style="[`width: ${percentage}%`]"
        />
      </div>
      <!-- Time Information -->
      <div class="flex justify-between mt-2 text-sm text-white opacity-50">
        <span>{{ currentTime }}</span>
        <span>{{ duration }}</span>
      </div>
    </div>
  </div>
</template>
