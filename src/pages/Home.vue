<template>
  <Home />
</template>

<script setup>
  import Home from '@/components/Home.vue'
  import { useHead } from 'unhead'

  useHead({
    title: 'Home'
  })
</script>
