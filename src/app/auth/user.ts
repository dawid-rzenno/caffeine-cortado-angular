export type User = {
	id: number;
	username: string;
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
