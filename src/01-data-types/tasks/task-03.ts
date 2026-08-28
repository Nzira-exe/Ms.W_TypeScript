/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
  studentId: string;
  fullName: string;
  age: number;
  Active: boolean;
};

const student: Student[] = [
{
  studentId: "ST2026001",
  fullName: "Nadia Putri",
  age: 17,
  Active: true,
},
{
  studentId: "ST2026002",
  fullName: "Bagas Saputra",
  age: 18,
  Active: true,
},
{
  studentId: "ST2026003",
  fullName: "Citra Ayu Lestari",
  age: 19,
  Active: false,
}
];

console.log(student);