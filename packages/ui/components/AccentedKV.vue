<template>
  <div class="border-accent-focus flex border-2">
    <div class="flex h-full items-center bg-accent px-4 py-1" :class="{'grow': justified}">
      <div>
        {{ label }}
      </div>
      <div
        class="tooltip"
        :data-tip="helpMessage"
        v-if="helpMessage"
      >
        <Icon
          class="-mt-1 ml-1 cursor-pointer"
          name="material-symbols:info-outline"
        />
      </div>
    </div>
    <div class="flex min-w-[33%] items-center justify-end px-4 py-1 text-right">
      <div>{{ value }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const showHelpMessage = ref(false);
defineProps({
  label: String,
  value: String,
  helpMessage: String,
  justified: Boolean,
});
</script>
F
