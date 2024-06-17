import { ref } from 'vue'
import { useSongStore } from '@/store/songs'
import api from '@/api'
import type { Song } from '@/types/Songs'
import { DURATION, PLAYLIST_ID } from '@/constants'

export function useSongs() {
  const songStore = useSongStore()
  const songs = ref<Song[]>([])
  const isLoading = ref(false)
  const error = ref<unknown>(null)

  const fetchSongs = async () => {
    isLoading.value = true
    try {
      const { data, request } = api.getSongs(PLAYLIST_ID)
      await request()
      const songsData = data.value.data.map((song: Song) => ({ ...song, duration: DURATION }))
      songStore.initSongs(songsData)
      songs.value = songsData
      songStore.currentSongId = songsData[0].id
    }
    catch (err) {
      error.value = err
    }
    finally {
      isLoading.value = false
    }
  }

  const fetchRandomSongs = async () => {
    isLoading.value = true
    try {
      const { data, request } = api.getRandomSongs(PLAYLIST_ID)
      await request()
      songStore.queSongs = data.value.data.map((song: Song) => ({ ...song, duration: DURATION }))
    }
    catch (err) {
      error.value = err
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    songs,
    isLoading,
    error,
    fetchSongs,
    fetchRandomSongs,
  }
}
