/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let readyCount: number = 0;
let unpaidCount: number = 0;
let waitingStockCount: number = 0;
const readyOrderIds: string[] = [];

for (let i = 0; i < orders.length; i++) {
  if (!orders[i].paid) {
    unpaidCount++;
  } else if (!orders[i].stockAvailable) {
    waitingStockCount++;
  } else {
    readyCount++;
    readyOrderIds.push(orders[i].id);
  }
}

console.log(`Orders ready to ship: ${readyCount}`);
console.log(`Unpaid orders: ${unpaidCount}`);
console.log(`Orders waiting for stock: ${waitingStockCount}`);
console.log(`Ready to ship order IDs: ${readyOrderIds.join(", ")}`);