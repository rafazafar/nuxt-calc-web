<template>
  <div>
    <PageTitle title="支社長・営業所長報酬サポートツール" class="mb-12">
      <p>
        ログインユーザー別に使用できるメニューを表示しています<br />
        使用方法など、ご不明な点がある場合は、CCI営業人事Gまでお問い合わせください。
      </p>
    </PageTitle>

    <LazyMenuCardList title="業務機能" :menuItems="businessMenu" />

    <hr class="h-px my-2 bg-gray-400 border-0" />

    <LazyMenuCardList title="業務機能" :menuItems="headOfficeMenu" />
    
    <DevOnly>
      <LazyMenuCardList title="DevOnly" :menuItems="devMenu" />
    </DevOnly>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Home",
  description: "ログインユーザー別に使用できるメニューを表示しています",
})

const devMenu = [
  {
    title: "Playground",
    description: "Playground. Only visible during developement mode",
    to: "/playground",
    icon: "material-symbols-light:developer-mode-tv",
    buttonText: "Go to Playground",
  },
];
const businessMenu = [
  {
    title: "確定実績(明細)照会",
    description:
      "当年度の報酬計算の基礎となる業績データおよび支給額を月別に表示",
    to: "/about",
    icon: "material-symbols-light:table-chart-view-outline",
  },
  {
    title: "報酬試算",
    description:
      "管理職の次年度用の業績評価給および年間のオーバーライド報酬(四半期毎の平均支給額)の試算",
    to: "/help",
    icon: "circum:calculator-1",
  },
  {
    title: "支給年月別実績一覧照会",
    description: "管下の管理職の業績データおよび支給額を支給年月別に一覧表示",
    to: "/about",
    icon: "game-icons:checklist",
    buttonText: "職制・支給年月選択",
  },
];
const headOfficeMenu = [
  {
    title: "本社閲覧権限設定",
    description: "本社社員(使用者権限)の報酬サポートツール閲覧用",
    to: "/about",
    icon: "material-symbols:lock-outline",
    buttonText: "本社閲覧権限設定画面",
  },
  {
    title: "データ補正指示",
    description: "データ補正の指示用画面",
    to: "/about",
    icon: "codicon:tools",
    buttonText: "データ補正の指示画面",
  },
];
</script>
