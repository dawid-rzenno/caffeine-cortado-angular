import { ItemBase } from "../shared/models/item-base";
import { NutrientAmountBase } from "./nutrient-amount";

export type NutrientComponent = ItemBase & NutrientComponentBase;

export type NutrientComponentBase = {
  name: string;
  amount: NutrientAmountBase;
}
