<template>
  <el-table
    :data="tableData"
    show-summary
    height="100%"
    :header-cell-style="customHeaderStyle"
    sum-text="支社合計"
  >
    <el-table-column label="社員情報" :fixed="!isMobile">
      <el-table-column fixed prop="employee.regionName" label="営業局名" />
      <el-table-column
        sortable
        min-width="120px"
        fixed
        prop="employee.branchName"
        label="支社名"
      />
      <el-table-column sortable min-width="120px" prop="" label="社員番号" />
      <el-table-column
        sortable
        min-width="120px"
        prop="employee.employeeName"
        label="社員名"
        width="150"
      />
    </el-table-column>
    <el-table-column>
      <el-table-column
        sortable
        min-width="120px"
        prop="employee.employeeNo"
        label="社員番号"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="employee.evaluationStandardCommission"
        label="業績評価基準額 (年額)"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="employee.promisedAnnualCompensation"
        label="最低年収保障 (年間)"
      />
    </el-table-column>

    <el-table-column label="業績評価用:APE(千円)">
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.budget"
        label="当年度予算"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.previousYearResult"
        label="2021年度実績"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="当年度実績"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="達成率"
      />
    </el-table-column>

    <el-table-column label="業績評価用:KP(千円)">
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.budget"
        label="当年度予算"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.previousYearResult"
        label="2021年度実績"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="当年度実績"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="達成率"
      />
    </el-table-column>

    <el-table-column label="業績評価用：陣容数">
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.previousYearResult"
        label="2021年度実績"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="当年度実績"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="達成率"
      />
    </el-table-column>

    <el-table-column label="成長率・達成率・報酬連動係数(確定)">
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="前年度繰越 報酬連動係数"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="達成率合計"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="当年度 報酬連動係数"
      />
      <el-table-column
        sortable
        min-width="120px"
        prop="performance.annualPremiumEquivalent.result"
        label="入社3年超"
      />
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import type { CellStyle } from "element-plus";

defineProps<{
  tableData: any[];
}>();
const { isMobile } = useDevice();

const customHeaderStyle = (data: any): CellStyle<any> => {
  return data.rowIndex == 1
    ? { "background-color": "#f2f6fc", color: "black" }
    : { "background-color": "#4976ba", color: "white" };
};
</script>
