/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const hours : number = 7;
const minutes : number = 35;
const ratePerHour : number = 8000;

const totalMinutes : number = hours * 60 + minutes;
const fullHours : number = Math.floor(totalMinutes / 60);
const remainingMinutes : number = totalMinutes % 60;
const billedHours : number = remainingMinutes > 0 ? fullHours + 1 : fullHours;

const totalBeforeDiscount : number = billedHours * ratePerHour;
const isDiscountEligible : boolean = billedHours > 5;
const discountAmount : number = isDiscountEligible ? totalBeforeDiscount * 0.15 : 0;
const finalPayment : number = totalBeforeDiscount - discountAmount;

console.log("Total Playing Time (minutes):", totalMinutes);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Total Billed Hours:", billedHours);
console.log("Total Before Discount:", totalBeforeDiscount);
console.log("Discount Amount:", discountAmount);
console.log("Final Payment:", finalPayment);