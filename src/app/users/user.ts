export type User = {
	id: number;
	username: string;
	password?: string;
	roleId: number;
	role: UserRole;
	timestamp: Date;
	userId: number;
}

export type UserRole = {
	id: number;
	name: string;
	timestamp: Date;
	userId: number;
}
