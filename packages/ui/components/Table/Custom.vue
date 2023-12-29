<template>
  <el-table
    :data="tableData"
    show-summary
    height="100%"
    :header-cell-style="customHeaderStyle"
    sum-text="支社合計"
  >
    <el-table-column
      v-for="column in tableStructure.columns"
      :prop="column.prop"
      :label="column.label"
      :width="column.width ?? columnDefaultWidth"
      :fixed="column.fixed"
    >
      <el-table-column
        v-for="subColumn in column.columns"
        :prop="subColumn.prop"
        :label="subColumn.label"
        :width="subColumn.width ?? columnDefaultWidth"
        :fixed="subColumn.fixed"
      />
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import type { CellStyle } from "element-plus";
import type { TableColumn } from "./types";

const props = defineProps<{
  tableData: any[];
  tableStructure: { defaultWidth?: string; columns: TableColumn[] };
}>();
const columnDefaultWidth = props.tableStructure.defaultWidth ?? "110px";
const customHeaderStyle = (data: any): CellStyle<any> => {
  return data.rowIndex == 1
    ? { "background-color": "#f2f6fc", color: "black" }
    : { "background-color": "#4976ba", color: "white" };
};
</script>
