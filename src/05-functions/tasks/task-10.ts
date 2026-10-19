/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
  student: string;
  course: string;
  completed: boolean;
  score: number;
  duration: number;
};

const enrollments: Enrollment[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

const passingScore: number = 75;


function countTotalEnrollments(data: Enrollment[]): number {
  return data.length;
}

function countCompletedEnrollments(data: Enrollment[]): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].completed) {
      count++;
    }
  }

  return count;
}

function countIncompleteEnrollments(data: Enrollment[]): number {
  return countTotalEnrollments(data) - countCompletedEnrollments(data);
}

function calculateCompletionPercentage(data: Enrollment[]): number {
  return (countCompletedEnrollments(data) / countTotalEnrollments(data)) * 100;
}


function findHighestScore(data: Enrollment[]): number {
  let highest: number = data[0].score;

  for (let i = 1; i < data.length; i++) {
    if (data[i].score > highest) {
      highest = data[i].score;
    }
  }

  return highest;
}

function findLowestScore(data: Enrollment[]): number {
  let lowest: number = data[0].score;

  for (let i = 1; i < data.length; i++) {
    if (data[i].score < lowest) {
      lowest = data[i].score;
    }
  }

  return lowest;
}

function calculateTotalScore(data: Enrollment[]): number {
  let total: number = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].score;
  }

  return total;
}

function calculateAverageScore(data: Enrollment[]): number {
  return calculateTotalScore(data) / countTotalEnrollments(data);
}

function countPassingStudents(data: Enrollment[]): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].score >= passingScore) {
      count++;
    }
  }

  return count;
}


function getCourses(data: Enrollment[]): string[] {
  const courses: string[] = [];

  for (let i = 0; i < data.length; i++) {
    if (!courses.includes(data[i].course)) {
      courses.push(data[i].course);
    }
  }

  return courses;
}

function getEnrollmentsByCourse(data: Enrollment[], course: string): Enrollment[] {
  const result: Enrollment[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].course === course) {
      result.push(data[i]);
    }
  }

  return result;
}

function countStudentsByCourse(data: Enrollment[], course: string): number {
  return countTotalEnrollments(getEnrollmentsByCourse(data, course));
}

function calculateAverageScoreByCourse(data: Enrollment[], course: string): number {
  return calculateAverageScore(getEnrollmentsByCourse(data, course));
}


function calculateTotalLearningHours(data: Enrollment[]): number {
  let total: number = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].duration;
  }

  return total;
}

function calculateAverageLearningDuration(data: Enrollment[]): number {
  return calculateTotalLearningHours(data) / countTotalEnrollments(data);
}


function printCourseStatistics(data: Enrollment[]): void {
  const courses: string[] = getCourses(data);

  for (let i = 0; i < courses.length; i++) {
    console.log(`- ${courses[i]}`);
    console.log(`  Students enrolled: ${countStudentsByCourse(data, courses[i])}`);
    console.log(`  Average score: ${calculateAverageScoreByCourse(data, courses[i])}`);
  }
}

function printDashboard(data: Enrollment[]): void {
  console.log("=== Completion Statistics ===");
  console.log(`Total enrollments: ${countTotalEnrollments(data)}`);
  console.log(`Completed enrollments: ${countCompletedEnrollments(data)}`);
  console.log(`Incomplete enrollments: ${countIncompleteEnrollments(data)}`);
  console.log(`Completion percentage: ${calculateCompletionPercentage(data)}%`);

  console.log("");
  console.log("=== Academic Statistics ===");
  console.log(`Highest score: ${findHighestScore(data)}`);
  console.log(`Lowest score: ${findLowestScore(data)}`);
  console.log(`Average score: ${calculateAverageScore(data)}`);
  console.log(`Students with passing scores: ${countPassingStudents(data)}`);

  console.log("");
  console.log("=== Course Statistics ===");
  printCourseStatistics(data);

  console.log("");
  console.log("=== Learning Statistics ===");
  console.log(`Total learning hours: ${calculateTotalLearningHours(data)}`);
  console.log(`Average learning duration: ${calculateAverageLearningDuration(data)}`);
}

printDashboard(enrollments);