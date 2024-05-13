export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      extensions: ['vue', 'js'],
      pathPrefix: false,
      ignore: ['**/constant(*|*/**)'],
    },
  ],
})
