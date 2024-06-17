import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
  }),
  persist: true,
  getters: {
    isAuthenticated(state) {
      return state.loggedIn
    },
  },
  actions: {
    login() {
      this.loggedIn = true
    },
    logout() {
      this.loggedIn = false
    },
  },
})
