<template>
  <div>
    <NuxtLoadingIndicator />
    <ErrorPopup ref="errorPopup" v-if="useCustomError().isVisible.value" />
    <SiteHeader
      siteTitle="支社長・営業所長報酬サポートツール"
      :employeeNo="employeeNo"
      :employeeName="employeeName"
    />
    <div class="px-4 xl:px-0 max-w-6xl mx-auto py-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { employeeName, employeeNo } = useAuth();
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
