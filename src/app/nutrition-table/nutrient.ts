import { Amount, createEmptyAmount } from "./amount";

export type Nutrient = Amount & {
  dailyValuePercentage: number;
};

export function createEmptyNutrient(unit: string): Nutrient {
  return {
    ...createEmptyAmount(unit),
    dailyValuePercentage: 0,
  }
}
