<script setup>
const props = defineProps({
  items: Array
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
</template>
