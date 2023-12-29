export default () => {
  const achievementTableStructure: { columns: TableColumn[] } = {
    columns: [
      {
        label: "社員情報",
        fixed: true,
        columns: [
          {
            label: "営業局名",
            prop: "employee.regionName",
          },
          {
            label: "支社名",
            prop: "employee.branchName",
          },
          {
            label: "社員番号",
          },
          {
            label: "社員名",
            prop: "employee.employeeName",
            width: "150px",
          },
        ],
      },
      {
        label: "業績評価用:APE(千円)",
        columns: [
          {
            label: "当年度予算",
            prop: "performance.annualPremiumEquivalent.budget",
          },
          {
            label: "2021年度実績",
            prop: "performance.annualPremiumEquivalent.previousYearResult",
          },
          {
            label: "当年度実績",
            prop: "performance.annualPremiumEquivalent.result",
          },
          {
            label: "達成率",
            prop: "performance.annualPremiumEquivalent.result",
          },
        ],
      },
      {
        label: "業績評価用:KP(千円)",
        columns: [
          {
            label: "当年度予算",
            prop: "performance.annualPremiumEquivalent.budget",
          },
          {
            label: "2021年度実績",
            prop: "performance.annualPremiumEquivalent.previousYearResult",
          },
          {
            label: "当年度実績",
            prop: "performance.annualPremiumEquivalent.result",
          },
          {
            label: "達成率",
            prop: "performance.annualPremiumEquivalent.result",
          },
        ],
      },
      {
        label: "業績評価用：陣容数",
        columns: [
          {
            label: "2021年度実績",
            prop: "performance.annualPremiumEquivalent.previousYearResult",
          },
          {
            label: "当年度実績",
            prop: "performance.annualPremiumEquivalent.result",
          },
          {
            label: "達成率",
            prop: "performance.annualPremiumEquivalent.result",
          },
        ],
      },
      {
        label: "成長率・達成率・報酬連動係数(確定)",
        columns: [
          {
            label: "前年度繰越 報酬連動係数",
            prop: "performance.annualPremiumEquivalent.result",
          },
          {
            label: "達成率合計",
            prop: "performance.annualPremiumEquivalent.result",
          },
          {
            label: "当年度 報酬連動係数",
            prop: "performance.annualPremiumEquivalent.result",
          },
          {
            label: "入社3年超",
            prop: "performance.annualPremiumEquivalent.result",
          },
        ],
      },
    ],
  };
  return {achievementTableStructure};
};
