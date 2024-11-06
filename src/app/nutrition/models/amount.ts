import { ItemBase } from "../../shared/models/item-base";

export type Amount = ItemBase & AmountBase;

export type AmountBase = {
  value: number;
  unit: string;
};
