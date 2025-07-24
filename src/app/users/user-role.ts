export type UserRole = {
	id: UserRoleIds | number;
	name: string;
}

export enum UserRoleIds {
	User = 1,
	Admin = 2,
}
