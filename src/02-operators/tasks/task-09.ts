/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const keyboardPrice : number = 850000;
const keyboardQty : number = 1;
const mousePrice : number = 275000;
const mouseQty : number = 2;
const monitorStandPrice : number = 420000;
const monitorStandQty : number = 1;

const voucherValue : number = 100000;
const isPremiumMember : boolean = true;
const vatRate : number = 0.11;
const pointRate : number = 50000;

const subtotal : number =
  keyboardPrice * keyboardQty +
  mousePrice * mouseQty +
  monitorStandPrice * monitorStandQty;

const membershipDiscount : number = isPremiumMember ? subtotal * 0.1 : 0;
const afterMembershipDiscount : number = subtotal - membershipDiscount;
const afterVoucher : number = afterMembershipDiscount - voucherValue;

const paymentBeforeTax : number = afterVoucher;
const vat : number = paymentBeforeTax * vatRate;
const finalPayment : number = paymentBeforeTax + vat;

const rewardPoints : number = Math.floor(paymentBeforeTax / pointRate);

const isFreeShippingEligible : boolean = isPremiumMember || paymentBeforeTax > 1500000;

console.log("Product Subtotal:", subtotal);
console.log("Membership Discount:", membershipDiscount);
console.log("Voucher Deduction:", voucherValue);
console.log("Payment Before Tax:", paymentBeforeTax);
console.log("VAT:", vat);
console.log("Final Payment:", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping Eligibility:", isFreeShippingEligible);