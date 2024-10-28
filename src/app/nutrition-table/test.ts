import { Nutrition } from "./nutrition";

export const exampleNutrition: Nutrition = {
  id: 0,
  name: 'Item Nutrition',
  energy: {
    value: 200,
    unit: "kcal",
    rdaPercentage: 10
  },
  totalFat: {
    value: 8,
    unit: "g",
    rdaPercentage: 12,
    saturatedFat: {
      value: 3,
      unit: "g",
      rdaPercentage: 15
    },
    transFat: {
      value: 0,
      unit: "g",
      rdaPercentage: 15
    }
  },
  cholesterol: {
    value: 30,
    unit: "mg",
    rdaPercentage: 10
  },
  sodium: {
    value: 150,
    unit: "mg",
    rdaPercentage: 6
  },
  totalCarbohydrates: {
    value: 26,
    unit: "g",
    rdaPercentage: 9,
    dietaryFiber: {
      value: 4,
      unit: "g",
      rdaPercentage: 16
    },
    sugars: {
      value: 12,
      unit: "g",
      rdaPercentage: 24,
      addedSugars: {
        value: 10,
        unit: "g",
        rdaPercentage: 20
      }
    }
  },
  protein: {
    value: 8,
    unit: "g",
    rdaPercentage: 16
  },
  vitamins: {
    vitaminD: {
      value: 2,
      unit: "mcg",
      rdaPercentage: 10
    },
    calcium: {
      value: 260,
      unit: "mg",
      rdaPercentage: 20
    },
    iron: {
      value: 3,
      unit: "mg",
      rdaPercentage: 17
    },
    potassium: {
      value: 350,
      unit: "mg",
      rdaPercentage: 8
    }
  }
};
