export type Amount = {
  value: number,
  unit: string;
}

export function createEmptyAmount(unit: string): Amount {
  return {
    unit,
    value: 0
  }
}
