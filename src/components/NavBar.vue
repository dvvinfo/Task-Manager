<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
const { items } = toRefs(props)
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">
        <img width="50" height="50" src="/logo.svg" alt="" />
      </router-link>
    </div>
    <ul class="nav">
      <li class="nav-iem" v-for="item in items" :key="item.label">
        <router-link class="nav-link" :to="item.url">
          <span>{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #94a3b8;
}
.nav {
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-iem {
  list-style: none;
}
.nav-link {
  font-size: 18px;
  text-decoration: none;
  color: #000;
  transition: color 0.3s ease-in-out;
}
.nav-link:hover {
  color: #94a3b8;
}
.router-link-active {
  color: #94a3b8;
}
</style>
