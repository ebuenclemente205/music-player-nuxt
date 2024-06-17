const apiEndpoints = {
  login: '/auth/login',
  register: '/auth/register',
  songs: (playlistId: string) => `/playlists/${playlistId}/songs`,
}

export default apiEndpoints
