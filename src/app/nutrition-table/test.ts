import { ItemNutrition } from "./item-nutrition";

export const exampleNutrition: ItemNutrition = {
  id: 0,
  name: 'Item Nutrition',
  energy: {
    value: 200,
    unit: "kcal",
    dailyValuePercentage: 10
  },
  totalFat: {
    value: 8,
    unit: "g",
    dailyValuePercentage: 12,
    saturatedFat: {
      value: 3,
      unit: "g",
      dailyValuePercentage: 15
    },
    transFat: {
      value: 0,
      unit: "g",
      dailyValuePercentage: 15
    }
  },
  cholesterol: {
    value: 30,
    unit: "mg",
    dailyValuePercentage: 10
  },
  sodium: {
    value: 150,
    unit: "mg",
    dailyValuePercentage: 6
  },
  totalCarbohydrates: {
    value: 26,
    unit: "g",
    dailyValuePercentage: 9,
    dietaryFiber: {
      value: 4,
      unit: "g",
      dailyValuePercentage: 16
    },
    sugars: {
      value: 12,
      unit: "g",
      dailyValuePercentage: 24,
      addedSugars: {
        value: 10,
        unit: "g",
        dailyValuePercentage: 20
      }
    }
  },
  protein: {
    value: 8,
    unit: "g",
    dailyValuePercentage: 16
  },
  vitamins: {
    vitaminD: {
      value: 2,
      unit: "mcg",
      dailyValuePercentage: 10
    },
    calcium: {
      value: 260,
      unit: "mg",
      dailyValuePercentage: 20
    },
    iron: {
      value: 3,
      unit: "mg",
      dailyValuePercentage: 17
    },
    potassium: {
      value: 350,
      unit: "mg",
      dailyValuePercentage: 8
    }
  }
};
