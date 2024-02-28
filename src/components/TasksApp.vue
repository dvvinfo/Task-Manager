<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { uid } from 'uid'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const store = useStore()

const tasks = store.state.tasks
const newTask = ref('')
const editedTask = ref({ id: null, name: '' })
const editingIndex = ref(null)

function addNewTask() {
  if (newTask.value.trim() !== '') {
    const taskId = uid()
    const task = { id: taskId, name: newTask.value }
    store.dispatch('addTask', task)
    newTask.value = ''
  }
}

function deleteTask(index) {
  const taskToDelete = tasks[index]
  store.dispatch('deleteTask', taskToDelete)
}

function startEditing(task) {
  const index = tasks.findIndex((t) => t.id === task.id)
  editingIndex.value = index
  editedTask.value = { ...task }
}

function saveEditedTask() {
  if (editedTask.value.name.trim() !== '') {
    const index = editingIndex.value
    store.dispatch('updateTask', { index, updatedTask: editedTask.value })
    editingIndex.value = null
    editedTask.value = { id: null, name: '' }
  }
}

function cancelEditing() {
  editingIndex.value = null
  editedTask.value = { id: null, name: '' }
}
</script>

<template>
  <div class="tasks">
    <h1 class="tasks-title">Список задач</h1>
    <form @submit.prevent="addNewTask" class="form">
      <div class="">
        <InputText
          v-model="newTask"
          class="form-input"
          placeholder="Введите новую задачу и нажмите Enter"
        />
      </div>
    </form>
    <div class="task-text" v-if="tasks.length === 0">Задач нет</div>
    <ul class="task-list" v-else>
      <li v-for="(task, index) in tasks" :key="task.id" class="task-item">
        <template v-if="index !== editingIndex">
          <span class="task-name">{{ task.name }}</span>

          <div class="task-buttons">
            <Button @click="startEditing(task)" icon="pi pi-pencil" />
            <Button @click="deleteTask(index)" icon="pi pi-trash" severity="danger" />
          </div>
        </template>
        <template v-else>
          <form @submit.prevent="saveEditedTask" class="form-edit">
            <InputText v-model="editedTask.name" class="form-input" />
            <div class="task-buttons">
              <Button type="submit" icon="pi pi-check" />
              <Button @click="cancelEditing" icon="pi pi-times" severity="warning" />
            </div>
          </form>
        </template>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
.tasks-title {
  font-size: 30px;
  margin: 0;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px 0;
}
.form-input {
  width: 100%;
}
.task-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
  padding: 0;
  width: 100%;
}
.task-item {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow:
    0 20px 25px -5px #0000001a,
    0 8px 10px -6px #0000001a;
  word-break: break-all;
  font-size: 18px;
  border-radius: 10px;
}
.task-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  height: 40px;
}
.form-edit {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.task-text {
  font-size: 18px;
}
</style>
