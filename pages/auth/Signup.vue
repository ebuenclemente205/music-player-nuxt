<script script setup lang="ts">
import Cookies from 'js-cookie'
import { useForm } from 'vee-validate'
import { registerSchema } from '@/validation/auth'
import { handleErrors } from '@/utils/handleErrors'
import api from '@/api'
import { useAuthStore } from '@/store'

const { defineField, errors, handleSubmit, setFieldError } = useForm({
  validationSchema: registerSchema,
})

const { data, error, isLoading, request: postRequest } = api.register()

const [name] = defineField('name')
const [email] = defineField('email')
const [password] = defineField('password')
const [password_confirmation] = defineField('password_confirmation')

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
        Ready to get started? Sign up now.
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        class="space-y-6"
        @submit="onSubmit"
      >
        <BaseInputForm
          id="name"
          v-model="name"
          name="name"
          :error="errors.name"
          label="Name"
          type="text"
        />
        <BaseInputForm
          id="email"
          v-model="email"
          name="email"
          :error="errors.email"
          label="Email address"
          type="email"
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
        <BaseInputForm
          id="password_confirmation"
          v-model="password_confirmation"
          name="password_confirmation"
          :errors="errors.password_confirmation"
          label="Confirm password"
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
          Sign up
        </BaseButton>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Do you already have an account?
        <NuxtLink to="/auth/login">
          Sign in here.
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
