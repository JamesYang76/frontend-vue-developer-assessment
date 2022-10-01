<script setup>
const props = defineProps({
  items: Array
})

const emit = defineEmits(['getTodoItems', 'toggleTodoItem'])

const onGetItems = () => { emit('getTodoItems') }
const onToggleItem = (todoItem, idx) => { emit('toggleTodoItem', todoItem, idx)}
</script>

<template>
  <h1>
    Showing {{ items.length }} Item(s)
    <button type="button" class="pull-right btn btn-primary" @click="onGetItems">Refresh</button>
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
    <tr v-for="(item, idx) in items" :key="item.id" :class="{completed: item.isCompleted}">
      <td>{{ item.id }}</td>
      <td>{{ item.description }}</td>
      <td>
        <button type="button" class="btn btn-warning btn-sm" @click="() => onToggleItem(item, idx)">
          {{ item.isCompleted ? 'UnMark completed' : 'Mark as completed' }}
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>


<style scoped>
.completed {
  text-decoration: line-through;
}
</style>

