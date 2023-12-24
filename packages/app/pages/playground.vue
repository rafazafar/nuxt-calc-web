<template>
  <div class="grid gap-4">
    <div class="grid gap-4 border-2 p-4">
      <p>Error stuff:</p>
      <button
        class="btn btn-primary px-4 py-2 w-max"
        :disabled="isVisible"
        @click="show('This is a custom error message. Teehee')"
      >
        Trigger popup error
      </button>
    </div>

    <ClientOnly>
      <div class="border-2 p-4">
        <p>Network Status:</p>
        <div class="mockup-code">
          <pre data-prefix="$"><code>{{ network }}</code></pre>
        </div>
      </div>
    </ClientOnly>

    <div class="border-2 p-4 grid gap-2">
      <p>Fetch:</p>
      <button
        @click="refresh()"
        :disabled="pending"
        class="btn btn-primary px-4 py-2 w-max"
      >
        Refetch
      </button>

      <p
        class="badge"
        :class="{
          'badge-warning': status === 'pending',
          'badge-error': status === 'error',
        }"
      >
        Status: {{ status }}
      </p>

      <div v-if="pending" class="loading loading-dots loading-lg"></div>
      <div v-if="data && !pending">
        <div v-for="product in data.slice(0, 2)" :key="product.id">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
        </div>
      </div>
      <div v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useServerSeoMeta({
  title: "🥳",
});
const network = useNetwork();
const { isVisible, show } = useCustomError();

const { data, pending, error, refresh, status } = useFetch<FakestoreProduct[]>(
  "/api/products",
  {
    key: "fakestore_product",
  }
);
</script>
