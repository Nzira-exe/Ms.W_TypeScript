/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000,
];

const threshold: number = 300000;
let totalRevenue: number = 0;
let highest: number = sales[0];
let lowest: number = sales[0];
let bigTransactionCount: number = 0;

for (let i = 0; i < sales.length; i++) {
  totalRevenue += sales[i];

  if (sales[i] > highest) {
    highest = sales[i];
  }

  if (sales[i] < lowest) {
    lowest = sales[i];
  }

  if (sales[i] >= threshold) {
    bigTransactionCount++;
  }
}

const averageTransaction: number = totalRevenue / sales.length;

console.log(`Total sales revenue: Rp${totalRevenue}`);
console.log(`Highest transaction: Rp${highest}`);
console.log(`Lowest transaction: Rp${lowest}`);
console.log(`Transactions >= Rp300000: ${bigTransactionCount}`);
console.log(`Average transaction value: Rp${averageTransaction}`);