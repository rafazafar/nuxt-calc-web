<template>
  <div class="grid gap-4">
    <div class="border-2 p-4">
      <p>Error stuff:</p>
      <div class="flex gap-4 flex-wrap">
        <button
          class="btn btn-primary"
          :disabled="isVisible"
          @click="
            show('This is a custom error message. Click outside to dismiss')
          "
        >
          Trigger popup error
        </button>
        <button
          class="btn btn-error"
          @click="showError('Opps lol. errr. sorry?')"
        >
          Trigger Critical Error
        </button>
      </div>
    </div>

    <ClientOnly>
      <div class="border-2 p-4" v-if="vibrateSupported">
        <p>Whats that?</p>
        <p class="text-xs">fun Box</p>
        <button class="btn btn-outline" @click="vibrate()">Click me</button>
      </div>
    </ClientOnly>

    <ClientOnly>
      <div class="border-2 p-4">
        <p>Battery Status:</p>
        <p class="text-xs">Plug / Unplug power to see change</p>
        <div class="mockup-code">
          <pre data-prefix="$"><code>{{ power }}</code></pre>
        </div>
      </div>
    </ClientOnly>

    <ClientOnly>
      <div class="border-2 p-4">
        <p>Network Status:</p>
        <p class="text-xs">Toggle ur wifi to see things change</p>
        <div class="mockup-code">
          <pre data-prefix="$"><code>{{ network }}</code></pre>
        </div>
      </div>
    </ClientOnly>

    <div class="border-2 p-4 grid gap-2">
      <p>Fetch FakeStoreApi via Proxy:</p>
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
const power = useBattery();
const network = useNetwork();
const { vibrate, stop, isSupported: vibrateSupported } = useVibrate({ pattern: [300, 100, 300] })
const { isVisible, show } = useCustomError();

const { data, pending, error, refresh, status } = useFetch<FakestoreProduct[]>(
  "/api/fakestore/products",
  { key: "fakestore_product" }
);
</script>
