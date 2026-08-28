/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type AttendanceRecord = {
  employeeId: string;
  employeeName: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
  totalWorkingHours: number;
  isPresent: boolean;
};

const attendanceData: AttendanceRecord[] = [
  {
    employeeId: "EMP001",
    employeeName: "Bowser",
    date: "2026-08-25",
    checkInTime: "09:00",
    checkOutTime: "17:00",
    totalWorkingHours: 8,
    isPresent: true,
  },
  {
    employeeId: "EMP002",
    employeeName: "Luigi",
    date: "2026-08-25",
    checkInTime: "10:00",
    checkOutTime: "19:00",
    totalWorkingHours: 9,
    isPresent: true,
  },
  {
    employeeId: "EMP003",
    employeeName: "Mario",
    date: "2026-08-25",
    checkInTime: "",
    checkOutTime: "",
    totalWorkingHours: 0,
    isPresent: false,
  },
];

console.log(attendanceData);