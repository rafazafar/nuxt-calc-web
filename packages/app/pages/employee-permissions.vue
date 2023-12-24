<template>
  <div>
    <PageTitle :title="pageTitle" :description="pageDescription" />
    <nuxt-link
      to="/manual"
      target="blank"
      class="text-primary font-semibold mt-2"
      >マニュアルを確認 <Icon name="material-symbols:open-in-new"
    /></nuxt-link>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "データ補正";
const pageDescription =
  "こちらの画面でデータの補正を行います。 「ダウンロード」で補正したい内容のダウンロードシートをダウンロードし、修正の上この画面の「アップロード」でアップロードください。 アップロードが終わりましたら、関連する業務画面にて補正反映をご確認ください。";
useServerSeoMeta({
  title: pageTitle,
  description: pageDescription,
});
</script>
