<template>
  <div>
    <PageTitle :title="pageTitle" :description="pageDescription" />
    <p class="font-semibold text-xl">支給年月: {{ "2022年3月" }}</p>
    <div class="overflow-x-auto"></div>
    <h2 class="text-xl mt-4">ElementPlus Table:</h2>
    <TableAchievementsElementTable />
    <h2 class="text-xl mt-4">React Table:</h2>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "支給年月別実績一覧照会(営業所長)";
const pageDescription = "";

const { data, pending, error, refresh, status } = useFetch<any>(
  "/api/achievements",
  { key: "achievementsData" }
);

const first5 = computed(() => data.value?.slice(0, 5));
</script>
