const apiEndpoints = {
  login: '/auth/login',
  register: '/auth/register',
  songs: (playlistId: string) => `/playlists/${playlistId}/songs`,
  randomSongs: (playlistId: string) => `/playlists/${playlistId}/random-songs`,
}

export default apiEndpoints
