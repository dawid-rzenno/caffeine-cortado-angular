import { ItemBase } from "../shared/models/item-base";
import { createEmptyNutrient, Nutrient } from "./nutrient";

export type ItemNutrition = ItemBase & Nutrition;

export type Nutrition = {
  energy: Nutrient;
  protein: Nutrient;
  totalCarbohydrates: TotalCarbohydrates;
  totalFat: TotalFat;
  cholesterol: Nutrient;
  sodium: Nutrient;
  vitamins: Vitamins;
}

export type TotalFat = Nutrient & {
  saturatedFat: Nutrient;
  transFat: Nutrient;
};

export type TotalCarbohydrates = Nutrient & {
  dietaryFiber: Nutrient;
  sugars: TotalSugars;
};

export type TotalSugars = Nutrient & {
  addedSugars: Nutrient;
};

export type Vitamins = {
  vitaminD: Nutrient;
  calcium: Nutrient;
  iron: Nutrient;
  potassium: Nutrient;
};

export enum Units {
  Gram = 'g',
  Milligram = 'mg',
  Microgram = 'mcg',
  Kilocalorie = 'kcal'
}

export function createEmptyNutrition(): Nutrition {
  return {
    energy: createEmptyNutrient(Units.Kilocalorie),
    protein: createEmptyNutrient(Units.Gram),
    totalCarbohydrates: {
      ...createEmptyNutrient(Units.Gram),
      dietaryFiber: createEmptyNutrient(Units.Gram),
      sugars: {
        ...createEmptyNutrient(Units.Gram),
        addedSugars: createEmptyNutrient(Units.Gram)
      },
    },
    totalFat: {
      ...createEmptyNutrient(Units.Gram),
      saturatedFat: createEmptyNutrient(Units.Gram),
      transFat: createEmptyNutrient(Units.Gram)
    },
    cholesterol: createEmptyNutrient(Units.Milligram),
    sodium: createEmptyNutrient(Units.Milligram),
    vitamins: {
      vitaminD: createEmptyNutrient(Units.Microgram),
      calcium: createEmptyNutrient(Units.Milligram),
      iron: createEmptyNutrient(Units.Milligram),
      potassium: createEmptyNutrient(Units.Milligram),
    }
  }
}
