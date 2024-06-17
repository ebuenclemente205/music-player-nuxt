<script setup lang="ts">
import Cookies from 'js-cookie'
import { useForm } from 'vee-validate'
import { loginSchema } from '@/validation/auth'
import { handleErrors } from '@/utils/handleErrors'
import api from '@/api'
import { useAuthStore } from '@/store'

const { defineField, errors, handleSubmit, setFieldError } = useForm({
  validationSchema: loginSchema,
})

const { data, error, isLoading, request: postRequest } = api.login()

const [email] = defineField('email')
const [password] = defineField('password')

const store = useAuthStore()

const onSubmit = handleSubmit(async (values) => {
  await postRequest(values)

  if (error.value) {
    handleErrors(error, setFieldError)
    return
  }

  if (data.value) {
    Cookies.set('authToken', data.value.access_token)
    store.login()
    navigateTo('/')
  }
})

definePageMeta({
  layout: 'auth-layout',
  middleware: 'auth',
})
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      >
      <h2 class="mt-10 text-center">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        class="space-y-6"
        @submit.prevent="onSubmit"
      >
        <BaseInputForm
          id="email"
          v-model="email"
          name="email"
          :error="errors.email"
          label="Email address"
        />
        <BaseInputForm
          id="password"
          v-model="password"
          name="password"
          :error="errors.password"
          label="Password"
          type="password"
          autocomplete="current-password"
        />

        <p
          v-if="error?.message"
          class="text-red-500 text-xs mt-1"
        >
          {{ error?.message }}
        </p>
        <BaseButton
          type="submit"
          :loading="isLoading"
        >
          Sign in
        </BaseButton>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Don't have an account yet?
        <NuxtLink to="/auth/signup">
          Sign up now.
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
