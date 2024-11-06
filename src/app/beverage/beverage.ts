import { ItemBase } from "../shared/models/item-base";

type BeverageBase = unknown;

export type Beverage = ItemBase & BeverageBase & unknown;
