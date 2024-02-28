<script setup>
import { useStore } from 'vuex'
import Button from 'primevue/button'
import { RouterLink } from 'vue-router'
const store = useStore()
const tasks = store.state.tasks
</script>
<template>
  <div class="wrapper">
    <h1 class="title">Добро пожаловать в таск-менеджер</h1>
    <p class="task-count">
      Ваш список задач: <strong>{{ tasks.length }}</strong>
    </p>
    <router-link to="/tasks">
      <Button label="Перейти к задачам"></Button>
    </router-link>
  </div>
</template>

<script></script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.title {
  font-size: 30px;
}
.task-count {
  font-size: 18px;
  margin: 0 0 20px;
}
</style>
