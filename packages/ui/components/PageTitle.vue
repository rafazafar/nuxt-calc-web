<template>
  <div>
    <div class="mb-3 flex gap-3">
      <div class="min-h-full w-2 bg-secondary"></div>
      <h1 class="text-2xl font-bold md:text-4xl">{{ title }}</h1>
    </div>
    <h2>
      {{ description }}
      <slot />
    </h2>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string; description?: string }>();
</script>
