<script setup>
import { ref, onMounted } from 'vue'
import { addTodoItemAPI, getTodoItemsAPI, toggleTodoItemsAPI } from './api/todos.js'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoActionStatus from "./components/TodoActionStatus.vue";

const items = ref([])
const status = ref({message: '', error: false})

onMounted(() => { onGetTodoItems(); })

const setMessage = (newMessage, error = false) => {
  status.value.message = newMessage
  status.value.error = error
}

const onGetTodoItems = () => {
  setMessage('Loading...');
  getTodoItemsAPI().then(({data})=>{
    items.value = data;
    setMessage('Loaded Success!!!')
  }).catch((e)=> {
    console.error(e)
    setMessage(e.message, true)
  });
}

const onAddTodoItem = (todoItem) => {
  setMessage('Adding...')
  addTodoItemAPI({ description: todoItem, isCompleted: false }).then(({data}) => {
    setMessage('Added Success!!!')
    items.value.push(data)
  }).catch((e)=> {
    console.error(e)
    setMessage(e.response.data, true)
  });
}

const onToggleTodoItem = (todoItem, idx) => {
  setMessage('Updating...')
  toggleTodoItemsAPI({...todoItem, isCompleted: !todoItem.isCompleted}).then(({data}) => {
    setMessage('Update Success!!!')
   items.value[idx].isCompleted = data.isCompleted
  }).catch((e)=> {
    console.error(e)
    setMessage(e.response.data, true)
  });
}
</script>

<template>
  <main class="App">
    <div class="container">
      <TodoHeader />
      <TodoInput @addTodoItem="onAddTodoItem" />
      <TodoActionStatus :status="status" />
      <TodoList
        :items="items"
        @getTodoItems="onGetTodoItems"
        @toggleTodoItem="onToggleTodoItem"
      />
    </div>
    <TodoFooter />
  </main>
</template>

<style scoped>
.App {
  text-align: center;
}
</style>
