import apiEndpoints from '@/api/apiEndpoints'
import { useApi } from '@/composables/useApi'

const api = {
  login: () => useApi('post', apiEndpoints.login),
  register: () => useApi('post', apiEndpoints.register),
  getSongs: (playlistId: string) => useApi('get', apiEndpoints.songs(playlistId)),
}

export default api