<script setup>
import { ref } from 'vue'
import AnsiWebImg from '@/assets/images/AnsiWeb.jpg'

const images = ref([
  {
    id: 1,
    url: AnsiWebImg,
    name: 'Pagina en construccion Ingenieria Ansi',
  },
])
</script>
<template>
  <div class="flex justify-center items-center min-h-screen overflow-hidden">
    <img
      v-for="image in images"
      :key="image.id"
      :src="image.url"
      :alt="image.name"
      class="images"
    />
  </div>
</template>
