<template>
  <LayoutDefault>
    <RouterView />
  </LayoutDefault>
</template>

<script setup>
  import LayoutDefault from '@/layouts/Default.vue'
  import { useHead } from 'unhead'

  useHead({
    title: 'Hello'
  })
</script>
