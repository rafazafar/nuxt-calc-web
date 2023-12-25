<template>
  <div class="border-accent-focus flex border-2">
    <div class="flex h-full items-center bg-accent px-4 py-1" :class="{'grow': justified}">
      <div>
        {{ label }}
      </div>
      <div
        class="tooltip"
        :class="{ 'tooltip-open': showHelpMessage }"
        :data-tip="helpMessage"
        v-if="helpMessage"
      >
        <Icon
          class="-mt-1 ml-1 cursor-pointer"
          :name="
            showHelpMessage
              ? 'material-symbols:info'
              : 'material-symbols:info-outline'
          "
          @click="showHelpMessage = !showHelpMessage"
        />
      </div>
    </div>
    <div class="flex min-w-[30%] items-center justify-end px-4 py-1 text-right">
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
