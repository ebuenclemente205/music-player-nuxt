import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'max-len': ['error', { code: 100 }],
    },
  },
)
