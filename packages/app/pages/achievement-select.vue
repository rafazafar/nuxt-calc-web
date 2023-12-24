<template>
  <div class="grid content-center justify-center">
    <div class="border border-primary mt-4">
      <h1
        class="p-2 px-6 bg-primary text-primary-content text-2xl font-semibold"
      >
        職制・支給年月選択
      </h1>
      <div class="grid gap-4 p-12 pt-6">
        <div>
          <h3 class="text-lg font-semibold mb-1">対象支給年月</h3>
          <select class="select select-bordered w-full">
            <option v-for="ym in targetPaymentYMOptions">{{ ym }}</option>
          </select>
        </div>
        <div>
          <h3 class="text-lg font-semibold">組織絞り込み</h3>
          <h4 class="text-lg -mt-1 mb-1">局</h4>
          <select class="select select-bordered w-full">
            <option>東北北海道営業局</option>
            <option selected>全局</option>
          </select>
        </div>
        <div>
          <h4 class="text-lg -mt-1 mb-1 text-slate-400">支社</h4>
          <select disabled class="select select-bordered w-full">
            <option selected>東京支社</option>
          </select>
        </div>
        <button class="btn btn-primary">次へ進む</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const targetPaymentYMOptions = ["2023年03月", "2023年02月", "2023年01月"];
</script>
