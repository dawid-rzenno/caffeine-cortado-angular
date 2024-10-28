import { ItemBase } from "../shared/models/item-base";
import { NutrientAmountBase } from "./nutrient-amount";

export type Nutrient = ItemBase & NutrientBase;

export type NutrientBase = {
  name: string;
  amount: NutrientAmountBase;
  components?: Nutrient[];
};
