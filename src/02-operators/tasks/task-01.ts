/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRicePrice = 18000;
const friedRiceQty = 3;
const waterPrice = 5000;
const waterQty = 2;
const discount = 10000;

const totalFriedRice = friedRicePrice * friedRiceQty;
const totalWater = waterPrice * waterQty;
const grandTotal = totalFriedRice + totalWater;
const finalPayment = grandTotal - discount;

console.log("Total Fried Rice:", totalFriedRice);
console.log("Total Water:", totalWater);
console.log("Grand Total:", grandTotal);
console.log("Final Payment:", finalPayment);