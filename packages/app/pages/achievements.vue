<template>
  <div>
    <PageTitle :title="pageTitle" :description="pageDescription" />
    <p class="font-semibold text-xl">支給年月: {{ "2022年3月" }}</p>
    <div class="overflow-x-auto">
    </div>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "支給年月別実績一覧照会(営業所長)";
const pageDescription = "";
</script>
