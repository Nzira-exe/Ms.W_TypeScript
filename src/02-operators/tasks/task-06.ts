/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hours = 7;
const minutes = 35;
const ratePerHour = 8000;

const totalMinutes = hours * 60 + minutes;
const fullHours = Math.floor(totalMinutes / 60);
const remainingMinutes = totalMinutes % 60;
const billedHours = remainingMinutes > 0 ? fullHours + 1 : fullHours;

const totalBeforeDiscount = billedHours * ratePerHour;
const isDiscountEligible = billedHours > 5;
const discountAmount = isDiscountEligible ? totalBeforeDiscount * 0.15 : 0;
const finalPayment = totalBeforeDiscount - discountAmount;

console.log("Total Playing Time (minutes):", totalMinutes);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Total Billed Hours:", billedHours);
console.log("Total Before Discount:", totalBeforeDiscount);
console.log("Discount Amount:", discountAmount);
console.log("Final Payment:", finalPayment);