import { ItemBase } from "../../shared/models/item-base";
import { Nutrient } from "./nutrient";
import { AmountBase } from "./amount";

export type Nutrition = ItemBase & NutritionBase;

export type NutritionBase = {
  energy: AmountBase[];
  macronutrients: Nutrient[];
  vitamins: Nutrient[],
  minerals: Nutrient[]
}
