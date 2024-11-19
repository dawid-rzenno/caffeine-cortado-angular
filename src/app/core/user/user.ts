import { ItemBase } from "../../shared/models/item-base";

type UserBase = {
  name: string;
  email: string;
};

export type User = ItemBase & UserBase;

export type UserPatch = ItemBase & Partial<UserBase & {}>;
