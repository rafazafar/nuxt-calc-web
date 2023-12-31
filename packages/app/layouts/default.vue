<template>
  <div>
    <NuxtLoadingIndicator />
    <ErrorPopup ref="errorPopup" v-if="useCustomError().isVisible.value" />
    <SiteHeader
      siteTitle="支社長・営業所長報酬サポートツール"
      :employeeNo="fps+' fps'"
      :employeeName="employeeName"
    />
    <div class="px-4 xl:px-4 max-w-7xl mx-auto py-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { employeeName } = useAuth();
const fps = useFps()
</script>