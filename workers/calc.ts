import { Store } from "redux";
export const taxCalculation = (product_total: number, percentage: number) => {
  let amount = 0;
  amount = product_total * (percentage / 100);
  // return Math.round(amount);
  return amount;
};
