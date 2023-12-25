<template>
  <div>
    {{ column.columnDef.header }}
    <span v-if="hasTooltip(column)" class="tooltip-icon">(i)</span>
    <!-- Additional logic for other header elements -->
  </div>
</template>

<script>
export default {
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  methods: {
    hasTooltip(column) {
      // Determine if the current column should have a tooltip
      // You can modify this logic based on your requirements
      return column.id === '当年度実績';
    }
  }
};
</script>