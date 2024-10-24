import { ItemBase } from "../shared/models/item-base";

export type Nutrient = {
  value: number;
  unit: string;
  dailyValuePercentage: number;
};

export type TotalFat = Nutrient & {
  saturatedFat: Nutrient;
  transFat: Nutrient;
};

export type TotalCarbohydrates = Nutrient & {
  dietaryFiber: Nutrient;
  sugars: Sugars;
};

export type Sugars = Nutrient & {
  addedSugars: Nutrient;
};

export type Vitamins = {
  vitaminD?: Nutrient;
  calcium?: Nutrient;
  iron?: Nutrient;
  potassium?: Nutrient;
};

export type Nutrition = ItemBase & {
  energy: Nutrient;
  totalFat: TotalFat;
  cholesterol: Nutrient;
  sodium: Nutrient;
  totalCarbohydrates: TotalCarbohydrates;
  protein: Nutrient;
  vitamins: Vitamins;
};
