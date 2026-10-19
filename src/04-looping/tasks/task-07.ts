/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount: number = 0;
let absentCount: number = 0;
const absentNames: string[] = [];

for (let i = 0; i < attendances.length; i++) {
  if (attendances[i].present) {
    presentCount++;
  } else {
    absentCount++;
    absentNames.push(attendances[i].name);
  }
}

const attendancePercentage: number = (presentCount / attendances.length) * 100;

console.log(`Present students: ${presentCount}`);
console.log(`Absent students: ${absentCount}`);
console.log(`Absent student names: ${absentNames.join(", ")}`);
console.log(`Attendance percentage: ${attendancePercentage}%`);