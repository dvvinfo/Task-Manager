<script setup>
import { ref } from 'vue'
import NavBar from './NavBar.vue'

const items = ref([
  {
    label: 'Главная',
    url: '/'
  },
  {
    label: 'Список задач',
    url: '/tasks'
  }
])
</script>

<template>
  <div>
      <NavBar :items="items" />
      <main>
        <slot />
      </main>
  </div>
</template>

<style lang="scss" scoped></style>
