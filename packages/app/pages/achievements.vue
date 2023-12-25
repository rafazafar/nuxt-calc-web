<template>
  <div>
    <PageTitle :title="pageTitle" :description="pageDescription" />
  </div>
</template>

<script setup lang="ts">
const pageTitle = "支給年月別実績一覧照会(営業所長)";
const pageDescription =
  ""
useServerSeoMeta({
  title: pageTitle,
  description: pageDescription,
});
</script>
