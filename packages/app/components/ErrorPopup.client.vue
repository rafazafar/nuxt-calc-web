<template>
  <div
    ref="errorPopup"
    class="fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-700 p-6 py-3"
  >
    <p class="font-bold">Error</p>
    <p class="text-sm">{{ message }}</p>
    <p class="text-sm cursor-pointer mt-3 text-right" @click="clear">Close</p>
  </div>
</template>

<script lang="ts" setup>
const { clear, message } = useCustomError();
const errorPopup = ref(null);
onClickOutside(errorPopup, (_) => clear());
</script>
