<script setup>
import { ref, onMounted } from 'vue'
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';

const description = ref('')
const items = ref([])

onMounted(() => {
  // todo
})

async function getItems() {
  try {
    alert('todo')
  } catch (error) {
    console.error(error)
  }
}


async function handleMarkAsComplete(item) {
  try {
    alert('todo')
  } catch (error) {
    console.error(error)
  }
}
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
          <h1>
            Showing {{ items.length }} Item(s)
            <button type="button" class="pull-right btn btn-primary" @click="getItems">Refresh</button>
          </h1>
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.description }}</td>
                <td>
                  <button type="button" class="btn btn-warning btn-sm" @click="() => handleMarkAsComplete(item)">
                    Mark as completed
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <footer className="page-footer font-small teal pt-4">
      <div className="footer-copyright text-center py-3">
        © 2021 Copyright:
        <a href="https://clearpoint.digital" target="_blank" rel="noreferrer"> clearpoint.digital </a>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.App {
  text-align: center;
}
</style>
