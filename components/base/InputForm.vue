<script setup>
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: { type: String, default: '' },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  required: {
    type: Boolean,
    default: false
  },
  inputClasses: {
    type: String,
    default: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
  },
  error: String,
});

const hasError = computed(() => !!props.error);

const updateValue = (value) => {
  emits('update:modelValue', value)
}
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
    <div class="mt-2">
      <input :id="id" :name="name" :type="type" :autocomplete="autocomplete" :required="required" :class="inputClasses" @input="updateValue($event.target.value)">
      <span class="text-red-500 text-xs mt-1" v-if="hasError">{{ error }}</span>
    </div>
  </div>
</template>