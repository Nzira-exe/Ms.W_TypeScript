/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student = {
  studentId: string;
  fullName: string;
  gradeLevel: string;
};

type Course = {
  courseId: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
};

type Registration = {
  student: Student;
  course: Course;
  registrationDate: string;
  isPaymentCompleted: boolean;
};

const registrations: Registration[] = [
  {
    student: {
      studentId: "STU001",
      fullName: "Matahari Bulan",
      gradeLevel: "Grade 10",
    },
    course: {
      courseId: "CRS001",
      courseTitle: "Introduction to TypeScript",
      instructorName: "Fajar Imawan",
      totalLearningHours: 20,
    },
    registrationDate: "2026-08-20",
    isPaymentCompleted: true,
  },
  {
    student: {
      studentId: "STU002",
      fullName: "Bumi Langit Angkasa",
      gradeLevel: "Grade 11",
    },
    course: {
      courseId: "CRS002",
      courseTitle: "Advanced JavaScript",
      instructorName: "Cahyaning Pininta Kustia",
      totalLearningHours: 30,
    },
    registrationDate: "2026-08-22",
    isPaymentCompleted: false,
  },
  {
    student: {
      studentId: "STU003",
      fullName: "Awan Bintang Laut",
      gradeLevel: "Grade 12",
    },
    course: {
      courseId: "CRS003",
      courseTitle: "Data Script",
      instructorName: "Rhodotul Jannah",
      totalLearningHours: 25,
    },
    registrationDate: "2026-08-27",
    isPaymentCompleted: false,
  },
];

console.log(registrations);