// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      if (state.tasks.length === 0) {
        localStorage.removeItem('tasks');
      }
    },
    updateTask(state, payload) {
      const { index, updatedTask } = payload;
      state.tasks[index] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    deleteTask({ commit }, index) {
      commit('deleteTask', index);
    },
    updateTask({ commit }, payload) {
      commit('updateTask', payload);
    },
  },
});
