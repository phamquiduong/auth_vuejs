<template>
  <ul v-if="errors?.length">
    <li v-for="(error, index) in errors" :key="index">
      {{ error }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  errors?: string[]
}>()
</script>
