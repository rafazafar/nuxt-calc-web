<template>
  <div>
    <div id="collapsable-top-area" class="block" v-auto-animate>
      <div v-if="collapsed">
        <div class="max-w-7xl mx-auto">情報非表示</div>
      </div>
      <div v-else class="flex flex-col gap-2 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-[1fr_7fr]">
          <p class="p-2 font-semibold">基本情報</p>
          <div class="grid md:grid-cols-6 gap-2">
            <AccentedKV
              class="col-span-2"
              label="局"
              value="858 | 関東営業局"
            />
            <AccentedKV
              class="col-span-2"
              label="支社"
              value="002 | 東京支社"
            />
            <AccentedKV
              class="col-span-2"
              label="社員"
              value="64268070 | AXA 太郎"
            />
            <AccentedKV
              justified
              class="col-span-3"
              label="業績評価基準額(年額)"
              value="720,000円"
              help-message="②営業所長:移行時は、440万円と2021年12月31日時点の基本年収(基本給x12+固定賞与)の80%から本俸および役職手当の年額相当額を除いた額のいずれか高い金額"
            />
            <AccentedKV
              justified
              class="col-span-3"
              label="最低年収保障(年間)"
              value="8,550,000円"
              help-message="営業管理職の2022年度の保障額は、7月~12月までの期間の保障額になるため、表示金額の50%となります"
            />
          </div>
        </div>
        <div class="grid md:grid-cols-[1fr_7fr]">
          <p class="p-2 font-semibold">業績評価給情報</p>
          <div class="grid md:grid-cols-2 gap-2">
            <AccentedKV
              justified
              label="業績評価給(人事考課反映)"
              value="82,010円"
              :helpMessage="placeholderHelpMessage"
            />
            <AccentedKV
              justified
              label="報酬連動係数(2023年度適用)"
              value="1.120"
              :helpMessage="placeholderHelpMessage"
            />
          </div>
        </div>
        <div class="grid md:grid-cols-[1fr_7fr]">
          <p class="p-2 font-semibold">特別移行措置による年収保障金</p>
          <div class="grid md:grid-cols-2 gap-2">
            <AccentedKV
              justified
              label="2021年度KP予算100%達成時"
              value="8,500,000円"
              :helpMessage="placeholderHelpMessage"
            />
            <AccentedKV
              justified
              label="2021年度KP予算100%未達成時"
              value="7,650,000円"
              :helpMessage="placeholderHelpMessage"
            />
          </div>
        </div>
      </div>

      <div
        class="divider mt-1 divider-accent cursor-pointer"
        @click="collapsed = !collapsed"
      >
        <Icon
          :name="
            collapsed
              ? 'material-symbols:keyboard-double-arrow-down-rounded'
              : 'material-symbols:keyboard-double-arrow-up-rounded'
          "
          class="text-4xl"
        />
      </div>
    </div>

    <div id="content" class="max-w-6xl mx-auto">
      <div class="grid grid-cols-[3fr_1fr]">
        <PageTitle
          title="確定実績(明細)照会"
          description="管理職の当年度の業績データおよび支給額を月別に表示しています。"
        />
        <div class="flex flex-wrap gap-4 items-center">
          <p class="text-2xl font-semibold">表示年度</p>
          <select name="year-selector" class="select select-bordered grow">
            <option>2021年度</option>
            <option>2020年度</option>
            <option>2019年度</option>
          </select>
        </div>
      </div>

      <div :class="{ 'h-[70vh]': collapsed, 'h-[50vh]': !collapsed }">
        <TableCustom :tableData="data" :table-structure="mockTableStructure" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "full-width",
});
const mockTableStructure = useMockData().achievementTableStructure;
const collapsed = ref(false);
const placeholderHelpMessage =
  "営業管理職の2022年度の保障額は、7月~12月までの期間の保障額になるため、表示金額の50%となります";
const id = useRoute().params.id;

const { data } = await useFetch<any>("/api/achievements", {
  key: "achievementsData",
});
</script>
