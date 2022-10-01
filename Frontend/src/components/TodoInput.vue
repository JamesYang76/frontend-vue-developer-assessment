<script setup>
import { ref } from 'vue'
const description = ref('')
const emit = defineEmits(['addTodoItem'])

const onAdd = () => { emit('addTodoItem', description.value) }
const onDescriptionChange = (event) => { description.value = event.target.value }
const onClear = () => { description.value = '' }
</script>

<template>
  <h1>Add Item</h1>
  <div class="row mb-3">
    <label class="col col-form-label form-label col-sm-2">Description</label>
    <div class="col col-md-6">
      <input
        class="form-control"
        type="text"
        placeholder="Enter description..."
        :value="description"
        @input="onDescriptionChange"
      />
    </div>
  </div>
  <div class="row mb-3 offset-md-2">
    <div class="hstack gap-2">
      <button type="button" class="btn btn-primary" @click="onAdd">Add Item</button>
      <button type="button" class="btn btn-secondary" @click="onClear">Clear</button>
    </div>
  </div>
</template>
