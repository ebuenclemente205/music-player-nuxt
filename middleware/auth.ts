import { useAuthStore } from '@/store'

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  // If the user is not authenticated and they're not on the login or registration page,
  // redirect them to the login page.
  if (!authStore.isAuthenticated && to.path !== '/auth/login' && to.path !== '/auth/signup') {
    return navigateTo('/auth/login')
  }

  // If the user is authenticated and they're on the login or registration page,
  // redirect them to the home page.
  if (authStore.isAuthenticated && (to.path === '/auth/login' || to.path === '/auth/signup')) {
    return navigateTo('/')
  }
})
