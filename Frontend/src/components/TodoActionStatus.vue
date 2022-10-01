<script setup>
  const props = defineProps({
    status: { type: Object, required: true }
  })
</script>

<template>
<div :class="{ error: status.error }">
  {{ status.message }}
</div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
