/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type Patient = {
  id: string;
  name: string;
  age: number;
  department: string;
  admitted: boolean;
  bill: number;
};

const patients: Patient[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(data: Patient[]): number {
  return data.length;
}

function countAdmittedPatients(data: Patient[]): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].admitted) {
      count++;
    }
  }

  return count;
}

function countDischargedPatients(data: Patient[]): number {
  return countTotalPatients(data) - countAdmittedPatients(data);
}

function countPatientsByDepartment(data: Patient[], department: string): number {
  let count: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].department === department) {
      count++;
    }
  }

  return count;
}

function getDepartments(data: Patient[]): string[] {
  const departments: string[] = [];

  for (let i = 0; i < data.length; i++) {
    if (!departments.includes(data[i].department)) {
      departments.push(data[i].department);
    }
  }

  return departments;
}

function findHighestBill(data: Patient[]): number {
  let highest: number = data[0].bill;

  for (let i = 1; i < data.length; i++) {
    if (data[i].bill > highest) {
      highest = data[i].bill;
    }
  }

  return highest;
}

function findLowestBill(data: Patient[]): number {
  let lowest: number = data[0].bill;

  for (let i = 1; i < data.length; i++) {
    if (data[i].bill < lowest) {
      lowest = data[i].bill;
    }
  }

  return lowest;
}

function calculateTotalRevenue(data: Patient[]): number {
  let total: number = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].bill;
  }

  return total;
}

function calculateAverageBill(data: Patient[]): number {
  return calculateTotalRevenue(data) / countTotalPatients(data);
}

function getAdmittedPatientNames(data: Patient[]): string[] {
  const names: string[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].admitted) {
      names.push(data[i].name);
    }
  }

  return names;
}

function printHospitalReport(data: Patient[]): void {
  console.log(`Total patients: ${countTotalPatients(data)}`);
  console.log(`Total admitted patients: ${countAdmittedPatients(data)}`);
  console.log(`Total discharged patients: ${countDischargedPatients(data)}`);

  console.log("Patients per department:");
  const departments: string[] = getDepartments(data);
  for (let i = 0; i < departments.length; i++) {
    console.log(`- ${departments[i]}: ${countPatientsByDepartment(data, departments[i])}`);
  }

  console.log(`Highest hospital bill: Rp${findHighestBill(data)}`);
  console.log(`Lowest hospital bill: Rp${findLowestBill(data)}`);
  console.log(`Average hospital bill: Rp${calculateAverageBill(data)}`);
  console.log(`Total hospital revenue: Rp${calculateTotalRevenue(data)}`);
  console.log(`Admitted patients: ${getAdmittedPatientNames(data).join(", ")}`);
}

printHospitalReport(patients);