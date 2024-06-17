import { defineStore } from 'pinia'
import api from '@/api'
import type { Song } from '@/types/Songs'
import { formatTime } from '@/utils/formatTime'

const songs: Song[] = []

export const useSongStore = defineStore('songStore', {
  state: () => ({
    songs,
    queSongs: [] as Song[],
    currentSongId: null as number | null,
    currentTime: 0,
    isPlaying: false,
    isPaused: false,
    timer: null as NodeJS.Timeout | null,
  }),

  getters: {
    currentSong: (state) => {
      if (state.currentSongId !== null) {
        return state.songs.find((song: Song) => song.id === state.currentSongId)
      }
      return state.songs[0]
    },
    currentTimeFormatted: state => formatTime(state.currentTime),
    durationFormatted: state => formatTime(state.currentSong?.duration),
    currentTimePercentage: (state) => {
      return Math.floor((state.currentTime / state.currentSong?.duration) * 100)
    },
  },

  actions: {
    initSongs(songs: Song[]) {
      this.songs = songs
      this.queSongs = songs
    },
    play() {
      this.isPlaying = true
      this.isPaused = false
      this.currentTime = 0
      this.updateCurrentTime()
    },

    pause() {
      this.isPlaying = false
      this.isPaused = true
      clearInterval((this.timer as unknown as number))
    },

    async playNextSong() {
      const currentIndex = this.queSongs.findIndex(song => song.id === this.currentSongId)
      if (currentIndex < this.queSongs.length - 1) {
        this.currentSongId = this.queSongs[currentIndex + 1].id
        this.currentTime = 0
        clearInterval((this.timer as unknown as number))
        this.play()
      }
      // If the current song is the last song in the que, play the first song
      else {
        this.currentSongId = this.queSongs[0].id
        this.currentTime = 0
        clearInterval((this.timer as unknown as number))
        this.play()
      }
    },

    playPreviousSong() {
      const currentIndex = this.queSongs.findIndex(song => song.id === this.currentSongId)
      if (currentIndex > 0) {
        this.currentSongId = this.queSongs[currentIndex - 1].id
        this.currentTime = 0
        clearInterval((this.timer as unknown as number))
        this.play()
      }
      else {
        this.currentSongId = this.queSongs[this.songs.length - 1].id
        this.currentTime = 0
        clearInterval((this.timer as unknown as number))
        this.play()
      }
    },

    updateCurrentTime() {
      if (this.isPlaying && !this.isPaused) {
        // Update the current time every second
        this.timer = setInterval(() => {
          this.currentTime += 1
          if (this.currentTime >= this.currentSong.duration) {
            this.playNextSong()
          }
        }, 1000) as unknown as NodeJS.Timeout
      }
    },
  },
})
