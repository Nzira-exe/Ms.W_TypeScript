/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

type Student = {
  name: string;
  major: string;
  active: boolean;
};

const students: Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(data: Student[]): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].active) {
      count++;
    }
  }

  return count;
}

function countInactiveStudents(data: Student[]): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (!data[i].active) {
      count++;
    }
  }

  return count;
}

function countStudentsByMajor(data: Student[], major: string): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].major === major) {
      count++;
    }
  }

  return count;
}

function printEnrollmentReport(data: Student[]): void {
  console.log(`Total students: ${data.length}`);
  console.log(`Active students: ${countActiveStudents(data)}`);
  console.log(`Inactive students: ${countInactiveStudents(data)}`);
  console.log(`Software Engineering students: ${countStudentsByMajor(data, "Software Engineering")}`);
  console.log(`Networking students: ${countStudentsByMajor(data, "Networking")}`);
  console.log(`Multimedia students: ${countStudentsByMajor(data, "Multimedia")}`);
}

printEnrollmentReport(students);