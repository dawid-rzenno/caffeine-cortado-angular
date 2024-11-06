import { ItemBase } from "../../shared/models/item-base";
import { AmountBase } from "./amount";

export type NutrientAmount = ItemBase & NutrientAmountBase;

export type NutrientAmountBase = AmountBase & {
  /** (R)ecommended (D)aily (A)mount percentage. */
  rdaPercentage: number;
};
