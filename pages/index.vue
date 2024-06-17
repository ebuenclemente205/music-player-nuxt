<script setup lang="ts">
import { useSongs } from '@/composables/useSongs'
import { useSongStore } from '@/store/songs'

const { songs, fetchSongs } = useSongs()
const store = useSongStore()

const play = () => {
  store.play()
}

fetchSongs()

definePageMeta({
  layout: 'base-layout',
  middleware: 'auth',
  title: 'Home',
  description: 'Listen to your favorite songs',
})
</script>

<template>
  <div class="h-fit md:grid md:grid-cols-2 md:grid-rows-1 gap-4 bg-app-color md:h-screen items-center flex flex-col-reverse items-center justify-end">
    <BaseMediaPlayer
      :current-song="store.currentSong"
      :playing="store.isPlaying"
      :current-time="store.currentTimeFormatted"
      :duration="store.durationFormatted"
      :percentage="store.currentTimePercentage"
      @play="play"
      @pause="store.pause"
      @next="store.playNextSong"
      @prev="store.playPreviousSong"
    />
    <div class="text-center max-w-md w-full">
      <div class="mt-2 text-sm text-gray-900">
        <PlayerPlayList
          :songs="songs"
          :current-song="store.currentSong"
          :playing="store.isPlaying"
          @play="store.play"
          @pause="store.pause"
        />
      </div>
    </div>
  </div>
</template>
