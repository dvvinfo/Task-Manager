
<script setup>
import TasksApp from '@/components/TasksApp.vue';
</script> 
<template>
  <div class="tasks-wrapper">
    <TasksApp/>
  </div>
</template>

<style> 
  .tasks-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    justify-content: center;
  }

</style>
