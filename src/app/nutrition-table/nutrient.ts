import { ItemBase } from "../shared/models/item-base";
import { Amount } from "./amount";

export type Nutrient = ItemBase & NutrientBase;

export type NutrientBase = {
  name: string;
  amount: Amount;
  subnutrients?: Nutrient[];
};
