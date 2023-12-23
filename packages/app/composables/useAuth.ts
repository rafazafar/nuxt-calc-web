
export default function () {
  const jobGrade = useState('jobGrade', () =>'CR4');
  const employeeNo = useState('employeeNo', () =>'00123456');
  const employeeName = useState('employeeName', () =>'Dev');
  
  return {
    jobGrade,
    employeeNo,
    employeeName,
  };
}
