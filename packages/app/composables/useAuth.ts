
export default function () {
  const jobGrade = useState('jobGrade', () =>'CR4');
  const employeeNo = useState('employeeNo', () =>'00123456');
  const employeeName = useState('employeeName', () =>'Dev');

  const isBranchManager = computed(() => {
    return jobGrade.value === 'CR4';
  });

  const isOfficeManager = computed(() => {
    return jobGrade.value === 'CR3';
  });
  return {
    employeeName,
    employeeNo,
    isBranchManager,
    isOfficeManager,
    jobGrade,
  };
}
