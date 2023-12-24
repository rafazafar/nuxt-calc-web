<template>
  <section>
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
      <MenuCard
        v-for="menu in menuItems"
        :title="menu.title"
        :description="menu.description"
        :to="menu.to"
        :icon="menu.icon"
        :buttonText="menu.buttonText"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  menuItems: {
    title: string;
    description: string;
    to: string;
    icon?: string;
    buttonText?: string;
  }[];
}>();
</script>
