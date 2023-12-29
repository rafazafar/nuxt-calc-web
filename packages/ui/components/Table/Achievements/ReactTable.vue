<!-- <script setup lang="ts">
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
  type ColumnDef,
} from "@tanstack/vue-table";
import type { AchievementData } from "./types";
const props = defineProps<{
  tableData: any;
}>();

const userList = useState<AchievementData[]>(
  "tableData",
  () => props.tableData,
);

const columnHelper = createColumnHelper<AchievementData>();

const columns: ColumnDef<any, any>[] = [
  columnHelper.group({
    header: "社員情報",
    footer: (props) => props.column.id,
    columns: [
      columnHelper.accessor("employee.regionName", {
        header: "営業局名",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("employee.branchName", {
        header: "支社名",
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        header: "社員番号",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("employee.employeeName", {
        header: "社員名",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("employee.employeeNo", {
        header: "社員番号",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("employee.evaluationStandardCommission", {
        header: "業績評価基準額 (年額)",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("employee.promisedAnnualCompensation", {
        header: "最低年収保障 (年間)",
        cell: (info) => info.getValue(),
      }),
    ],
  }),
  columnHelper.group({
    header: "業績評価用：APE(千円)",
    footer: (props) => props.column.id,
    columns: [
      columnHelper.accessor("performance.annualPremiumEquivalent.budget", {
        header: "当年度予算",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor(
        "performance.annualPremiumEquivalent.previousYearResult",
        {
          header: "2021年度実績",
          cell: (info) => info.getValue(),
        },
      ),
      columnHelper.accessor("performance.annualPremiumEquivalent.result", {
        header: "当年度実績",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("performance.annualPremiumEquivalent.result", {
        header: "達成率",
        cell: (info) => info.getValue(),
      }),
    ],
  }),
];

const table = useVueTable({
  get data() {
    return userList.value;
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
});
const tableGroups = table.getHeaderGroups();

</script>
<template>
  <div class="overflow-x-auto">
    <table class="table table-xs md:table-sm lg:table-md" aria-label="userTable">
      <thead>
        <tr
          v-for="headerGroup in tableGroups"
        >
          <th
            class=""
            v-for="header in headerGroup.headers"
            :colSpan="header.colSpan"
            :class="{'sticky': header}"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" class="hover">
          <td v-for="cell in row.getVisibleCells()">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template> -->
