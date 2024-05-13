<template>
  <div>
    <nuxt-link :to="'/'">Index</nuxt-link>
    <BeerCard
      :beer-style="beerStyle" 
    />
  </div>
</template>

<script setup>
const { loadBeerStyle } = useBeerContext()
const {
  params: { slug },
} = useRoute()

const { data: beerStyle } = useAsyncData('beerStyle', async () => {
  return await loadBeerStyle(slug)
})

const { data: fetchedBeerStyle } = useAsyncData('fetchedBeerStyle', async () => {
  return await $fetch(`https://api.sampleapis.com/beers/${slug}`)
})
</script>
