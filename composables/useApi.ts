import { ref } from 'vue'
import type { Ref } from 'vue'
import { useAsyncData, useFetch } from '#app'

interface ApiResponse<T> {
  data: Ref<any | null>
  error: Ref<any | null>
  isLoading: Ref<boolean>
  request: (payload?: any) => Promise<void>
}

export function useApi<T>(method: string, endpoint: string): ApiResponse<T> {
  const config = useRuntimeConfig()
  const API_BASE_URL = config.public.apiBase

  const data = ref<any | null>(null)
  const error = ref<any | null>(null)
  const isLoading = ref(false)

  const url = `${API_BASE_URL}${endpoint}`
  const token = useCookie('authToken')

  const request = async (payload?: any) => {
    isLoading.value = true

    try {
      if (method.toUpperCase() === 'GET') {
        const { data: fetchData, error: fetchErr } = await useAsyncData(url, async () => {
          const response = await fetch(url, {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token.value}`,
            },
          })
          return response.json()
        })

        error.value = fetchErr.value?.data
        data.value = fetchData.value
      }
      else {
        const { data: fetchData, error: fetchErr } = await useFetch(url, {
          method: method.toUpperCase() as 'POST' | 'PUT' | 'DELETE' | 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(payload),
        })
        error.value = fetchErr.value?.data
        data.value = fetchData.value
      }

      if (error.value) {
        if (typeof error.value.errors === 'object' && error.value.errors !== null) {
          error.value.message = ''
        }
      }
      else {
        error.value = null
      }
    }
    catch (err) {
      throw (
        typeof err === 'string'
          ? new Error(err)
          : err instanceof Error
            ? err
            : new Error('An unknown error occurred')
      )
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    data,
    error,
    isLoading,
    request,
  }
}
