<script setup lang="ts">
import SongCover from '@/assets/images/song-cover.jpg'
import type { Song } from '@/types/Songs'

defineProps<{
  currentSong?: Song
  playing: boolean
  currentTime: string
  duration: string
  percentage: number
}>()

defineEmits(['play', 'pause', 'next', 'prev'])
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
