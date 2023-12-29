<template>
  <div>
    <PageTitle :title="pageTitle" :description="''" />
    <div class="my-4 flex items-center">
      <div class="font-semibold text-xl w-60">支給年月:{{ "2022年3月" }}</div>
      <div class="break-words text-sm font-light">
        営業管理職の場合は、2022年1月~6月の支給額は、旧規定報酬のため空欄になっています。
      </div>
      <div class="break-words text-sm font-light">※業績評価用とオーバーライド報酬用の各項目のラベルをクリックすると
        表示順（昇順/降順）が変更できます。</div>
    </div>
    <div class="overflow-x-auto"></div>

    <div v-if="pending">
      <span class="loading loading-dots loading-lg"></span>
    </div>
    <div v-else class="h-[70vh]">
      <TableCustom :tableData="data" :tableStructure="mockTableStructure" />
    </div>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "支給年月別実績一覧照会(営業所長)";

const mockTableStructure = useMockData().achievementTableStructure

const { data, pending } = useFetch<any>("/api/achievements", {
  key: "achievementsData",
});
</script>
