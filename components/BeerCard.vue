<template>
  <BeerDetails :beer-style="beerStyle" />
</template>

<script setup>
const props = defineProps({
  beerStyle: {
    type: Object,
    required: true,
  },
})
</script>