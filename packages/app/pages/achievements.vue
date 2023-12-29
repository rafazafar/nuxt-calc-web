<template>
  <div>
    <div class="max-w-7xl mx-auto">
      <PageTitle :title="pageTitle" :description="pageDescription" />
      <div class="font-semibold text-xl">
        <p>支給年月: {{ "2022年3月" }}</p>
      </div>
      <div class="overflow-x-auto"></div>
    </div>

    <div class="lg:p-8">
      <div v-if="pending">
        <div class="max-w-7xl mx-auto">
          <span class="loading loading-dots loading-lg"></span>
        </div>
      </div>
      <div v-else class="h-[60vh]">
        <TableAchievementsElementTable :tableData="first2"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "full-width",
});
const pageTitle = "支給年月別実績一覧照会(営業所長)";
const pageDescription = "";

const { data, pending, error, refresh, status } = useFetch<any>(
  "/api/achievements",
  { key: "achievementsData" }
);

const first2 = computed(() => data.value?.slice(0, 2));
</script>
