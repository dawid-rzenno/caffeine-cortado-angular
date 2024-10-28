import { ItemBase } from "../shared/models/item-base";
import { AmountBase } from "./amount";

export type NutrientAmountBase = {
  /** (R)ecommended (D)aily (A)mount percentage. */
  rdaPercentage: number;
};
export type NutrientAmount = ItemBase & AmountBase & NutrientAmountBase;
