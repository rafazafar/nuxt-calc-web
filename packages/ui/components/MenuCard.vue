<template>
  <div class="border-2 border-secondary">
    <h3 class="bg-secondary p-2 text-xl font-semibold text-secondary-content">
      <Icon :name="icon" class="mr-2 text-4xl" />{{ title }}
    </h3>
    <div class="flex h-40 flex-col p-4">
      <p class="grow">
        {{ description }}
      </p>
      <nuxt-link :to="to">
        <button class="btn btn-primary px-6 py-3">
          {{ buttonText
          }}<Icon name="material-symbols:open-in-new" class="ml-3 text-xl" />
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "当年度の報酬計算の基礎となる業績データおよび支給額を月別に表示",
  },
  icon: {
    type: String,
    default: "material-symbols:question-mark",
  },
  to: String,
  buttonText: {
    type: String,
    default: "社員指定",
  },
});
</script>
