<script setup>
import { ref, onMounted } from 'vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

const description = ref('')
const items = ref([])

onMounted(() => {
  // todo
})
</script>

<template>
  <main class="App">
    <div class="container">
      <TodoHeader />
      <div class="row">
        <div class="col">
          <div class="container">
            <TodoInput />
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col">
          <TodoList :items="items" />
        </div>
      </div>
    </div>
    <TodoFooter />
  </main>
</template>

<style scoped>
.App {
  text-align: center;
}
</style>
