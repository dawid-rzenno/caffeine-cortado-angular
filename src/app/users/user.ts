import { UserRole } from "./user-role";

export type User = {
	id: number;
	username: string;
	role: UserRole;
	timestamp: Date;
	userId: number;
}

export type UserForm = {
	id: number;
	username: string;
	roleId: number;
	timestamp: Date;
	userId: number;
}
