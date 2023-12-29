export type AchievementData = {
  yearMonth: "2022-03";
  employee: Employee;
  performance: Performance;
  growthRates: GrowthRates;
  overrideKeyPoint: OverrideKeyPoint;
  revisedAnnualizedNewPremium: RevisedAnnualizedNewPremium;
  compensation: Compensation;
};

export type Compensation = {
  basicSalary: number;
  jobGradeCompensation: number;
  minimumMonthlyDeposit: number;
  negativeMonthlyDeposit: number;
  bonus: number;
  performanceSalary: number;
  overrideCommission: number;
  monthlyAdjustments: number;
  additionalCompensation: number;
  logicalAnnualIncomeMonthly: number;
};

export type Employee = {
  employeeNo: string;
  employeeName: "秋元.オリバーストーン.恵子";
  jobGradeCode: "S3C";
  regionCode: string;
  regionName: "東北北海道営業局";
  branchCode: "XC602000";
  branchName: "東京支社";
  evaluationStandardCommission: number;
  promisedAnnualCompensation: number;
};

export type GrowthRates = {
  previousYearCommissionRate: number;
  totalGrowthRate: number;
  totalAchieveRate: number;
  commissionRate: number;
};

export type OverrideKeyPoint = {
  expertResult: number;
  beginnerResult: number;
};

export type Performance = {
  annualPremiumEquivalent: AnnualPremiumEquivalent;
  keyPoint: AnnualPremiumEquivalent;
  staffCount: StaffCount;
};

export type AnnualPremiumEquivalent = {
  budget: number;
  previousYearResult: number;
  result: number;
};

export type StaffCount = {
  previousYearResult: number;
  result: number;
};

export type RevisedAnnualizedNewPremium = {
  expertResult: number;
  expertResultSum: number;
  beginnerResult: number;
  beginnerResultSum: number;
};

export type TableColumn = {
  label: string;
  prop?: string;
  width?: string;
  fixed?: boolean;
  columns?: TableColumn[];
};
