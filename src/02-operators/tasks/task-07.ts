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

interface HotelBillingInput {
  roomPricePerNight: number;
  nightsStayed: number;
  serviceCharge: number;
  taxRate: number;
  isVipMember: boolean;
}

interface HotelBillingResult {
  roomSubtotal: number;
  discount: number;
  tax: number;
  finalPayment: number;
  freeBreakfast: boolean;
}

function calculateHotelBilling(input: HotelBillingInput): HotelBillingResult {
  const { roomPricePerNight, nightsStayed, serviceCharge, taxRate, isVipMember } = input;

  const roomSubtotal = roomPricePerNight * nightsStayed;

  const vipDiscountRate = 0.12;
  const discount = isVipMember ? roomSubtotal * vipDiscountRate : 0;

  const discountedRoomSubtotal = roomSubtotal - discount;
  const taxableAmount = discountedRoomSubtotal + serviceCharge;
  const tax = taxableAmount * taxRate;

  const finalPayment = discountedRoomSubtotal + serviceCharge + tax;

  const freeBreakfast = nightsStayed >= 3 || isVipMember;

  return {
    roomSubtotal,
    discount,
    tax,
    finalPayment,
    freeBreakfast,
  };
}

const result = calculateHotelBilling({
  roomPricePerNight: 650000,
  nightsStayed: 4,
  serviceCharge: 120000,
  taxRate: 0.11,
  isVipMember: true,
});

console.log(result);