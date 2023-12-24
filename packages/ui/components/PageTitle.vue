<template>
  <div>
    <div class="flex gap-3 mb-3">
      <div class="w-2 min-h-full bg-secondary"></div>
      <h1 class="text-2xl md:text-4xl font-bold">{{title}}</h1>
    </div>
    <h2>
      {{ description }}
      <slot/>
    </h2>
  </div>
</template>
<script setup lang="ts">
defineProps<{title: string, description?:string}>();
</script>