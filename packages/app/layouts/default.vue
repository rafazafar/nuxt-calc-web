<template>
  <div>
    <NuxtLoadingIndicator  />
    <ErrorPopup ref="errorPopup" v-if="useCustomError().isVisible.value"/>
    <Header/>
    <div class="px-4 xl:px-0 max-w-6xl mx-auto py-4 px-1">
      <slot />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>