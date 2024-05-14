<template>
  <p>{{ simplePost.title }}</p>
</template>

<script setup>
const props = defineProps({
  simplePost: {
    type: Object,
    required: true,
  },
})
</script>
