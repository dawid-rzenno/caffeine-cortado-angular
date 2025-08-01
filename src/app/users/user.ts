import { UserRole } from "./user-role";
import { ItemBase, ItemUpdateBase } from "../shared/item-base";

export type User = ItemBase & {
	username: string;
	role: UserRole;
}

export type UserDetails = User;

export type CreateUserPayload = Omit<User, keyof ItemBase>

export type UpdateUserPayload = Omit<User, keyof ItemUpdateBase>
