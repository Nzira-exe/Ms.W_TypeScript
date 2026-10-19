/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type Submission = {
  student: string;
  submitted: boolean;
  score: number;
};

const submissions: Submission[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

const passingScore: number = 75;

function countSubmitted(data: Submission[]): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted) {
      count++;
    }
  }

  return count;
}

function countMissing(data: Submission[]): number {
  return data.length - countSubmitted(data);
}

function countPassed(data: Submission[]): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted && data[i].score >= passingScore) {
      count++;
    }
  }

  return count;
}

function countRevision(data: Submission[]): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted && data[i].score < passingScore) {
      count++;
    }
  }

  return count;
}

function calculateAverageScore(data: Submission[]): number {
  let total: number = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].score;
  }

  return total / data.length;
}

function findHighestScore(data: Submission[]): number {
  let highest: number = data[0].score;

  for (let i = 1; i < data.length; i++) {
    if (data[i].score > highest) {
      highest = data[i].score;
    }
  }

  return highest;
}

function findLowestScore(data: Submission[]): number {
  let lowest: number = data[0].score;

  for (let i = 1; i < data.length; i++) {
    if (data[i].score < lowest) {
      lowest = data[i].score;
    }
  }

  return lowest;
}

function printSubmissionReport(data: Submission[]): void {
  console.log(`Total students: ${data.length}`);
  console.log(`Submitted assignments: ${countSubmitted(data)}`);
  console.log(`Missing assignments: ${countMissing(data)}`);
  console.log(`Passed students: ${countPassed(data)}`);
  console.log(`Students requiring revision: ${countRevision(data)}`);
  console.log(`Average score: ${calculateAverageScore(data)}`);
  console.log(`Highest score: ${findHighestScore(data)}`);
  console.log(`Lowest score: ${findLowestScore(data)}`);
}

printSubmissionReport(submissions);