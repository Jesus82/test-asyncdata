<template>
    <div>
      <nuxt-link :to="'/'">Index</nuxt-link>
      <TestCard :simple-post="simplePost" />
    </div>
  </template>
  
  <script setup>
  
  const { data: simplePost } = useAsyncData('simplePost', async () => {
    const post = await $fetch(`http://localhost:3000/api/simple-post`)
    return post
  })
  </script>