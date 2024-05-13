<template>
    <div>
      <h1>Name: {{ beerStyle.name }}</h1>
      <h2>Price: {{ beerStyle.price }}</h2>
      <p>
        Rating : {{ beerStyle.rating?.average }} of {{ beerStyle.rating?.reviews }}
      </p>
      <img :src="beerStyle.image" />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    beerStyle: {
      type: Object,
      required: true,
    },
  })
  </script>
  