<template>
  <ul>
    <li v-for="link in links">
      <nuxt-link class="u-text-blue" :to="`/test/${link.slug}`">{{
        link.name
      }}</nuxt-link>
    </li>
  </ul>
</template>

<script setup>
const links = [
  { name: 'Ale', slug: 'ale' },
  { name: 'Stouts', slug: 'stouts' },
]
</script>
