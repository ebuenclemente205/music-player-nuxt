<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Song } from '@/types/Songs'
import { formatTime } from '@/utils/formatTime'
import { DURATION } from '@/constants'

defineProps<{
  songs: Song[]
  currentSong?: Song
  playing: boolean
}>()

defineEmits(['play', 'pause'])
</script>

<template>
  <ul
    role="list"
    class="divide-gray-100"
  >
    <li
      v-for="song in songs"
      :key="song.id"
      class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
    >
      <div class="w-[64px] mr-5 md:flex hidden">
        <PlayerPlayPauseButton
          v-if="currentSong?.id === song.id"
          :playing="playing"
          @play="$emit('play')"
          @pause="$emit('pause')"
        />
      </div>
      <div class="flex w-0 flex-1 items-center">
        <div class="ml-4 flex flex-col text-left">
          <h3 class="text-base font-semibold leading-7 text-white">
            {{ song.title }}
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-white opacity-50">
            {{ song.artist }}
          </p>
        </div>
      </div>
      <div class="ml-4 items-baseline">
        <h3 class="text-base font-semibold leading-7 text-white">
          {{ formatTime(DURATION) }}
        </h3>
      </div>
    </li>
  </ul>
</template>
