<template>
  <div class="grid gap-4">
    <div class="grid gap-4 border-2 p-4">
      <p>Error stuff:</p>
      <button
        class="cursor-pointer outline px-4 py-2"
        :class="{ 'outline-red-500 rounded': isVisible }"
        @click="show('This is a custom error message. Teehee')"
      >
        Trigger popup error
      </button>
    </div>

    <ClientOnly>
      <div class="border-2 p-4">
        <p>Network Status:</p>
        <pre>{{ network }}</pre>
      </div>
    </ClientOnly>

    <div class="border-2 p-4 grid gap-2">
      <p>Fetch:</p>
      <button
        @click="refresh()"
        :disabled="pending"
        class="cursor-pointer outline px-4 py-2"
      >
        Refetch
      </button>

      <p>Status: {{ status }}</p>

      <div v-if="pending" class="animate-pulse">
        <div class="grid grid-cols-3 gap-4 w-1/2">
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          <div class="col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-3"></div>
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="col-span-1"></div>
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="col-span-1"></div>
          <div class="h-2 bg-slate-200 rounded col-span-3"></div>
          <div class="h-2 bg-slate-200 rounded col-span-3"></div>
        </div>
      </div>
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
const network = useNetwork();
const { isVisible, show } = useCustomError();

const { data, pending, error, refresh, status } = useFetch<FakestoreProduct[]>(
  "/api/products",
  {
    key: "fakestore_product",
  }
);

</script>
