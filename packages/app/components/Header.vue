<template>
  <div>
    <div class="border-t-2 border-[#00008f] h-[72px]">
      <div class="max-w-7xl h-full px-0 md:px-4 w-full flex mx-auto">
        <nuxt-link to="/"
          ><img src="/logo.png" alt="logo" class="h-14 w-14 object-cover"
        /></nuxt-link>
        <div class="px-2 text-[#00008f] grow font-bold self-center">
          支社長・営業所長報酬サポートツール
        </div>
        <Icon
          name="ic:sharp-person"
          class="text-3xl text-[#202020] self-center"
        />
        <div class="self-center tracking-wide align-text-bottom font-light">
          {{ employeeNo }} | {{ employeeName }} 太郎
        </div>
      </div>
    </div>
    <hr class="h-px bg-gray-200 border-0" />
  </div>
</template>

<script setup lang="ts">
const { employeeName, employeeNo } = useAuth();
</script>
