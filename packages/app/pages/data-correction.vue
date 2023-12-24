<template>
  <div>
    <PageTitle :title="pageTitle" :description="pageDescription" />
    <nuxt-link
      to="/manual"
      target="blank"
      class="text-primary font-semibold mt-2"
      >マニュアルを確認
      <Icon name="material-symbols:open-in-new" />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const pageTitle = "本社閲覧権限設定";
const pageDescription =
  "こちらの画面で権限の設定を行います。登録済みの社員権限変更は「閲覧権限対象者」と「更新」ボタン、社員の登録は「追加」ボタンにてご登録ください。権限変更と社員追加は同時に行うことができません。";

useServerSeoMeta({
  title: pageTitle,
  description: pageDescription,
});
</script>
