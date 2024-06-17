export function handleErrors(
  error: { value: { errors: Record<string, string[]> } },
  setFieldError: (field: string, message: string) => void,
) {
  if (error.value.errors) {
    Object.keys(error.value.errors).forEach((key) => {
      setFieldError(key, error.value.errors[key][0])
    })
  }
}
