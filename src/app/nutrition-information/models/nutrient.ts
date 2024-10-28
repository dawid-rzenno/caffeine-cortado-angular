import { ItemBase } from "../../shared/models/item-base";
import { NutrientComponent, NutrientComponentBase } from "./nutrient-component";

export type Nutrient = ItemBase & NutrientBase;

export type NutrientBase = NutrientComponentBase & {
  components?: NutrientComponent[];
};


