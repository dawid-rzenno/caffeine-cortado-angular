export type Id = number;

export type ItemBase = ItemUpdateBase & {
	id: Id,
}

export type ItemUpdateBase = {
	timestamp: Date;
	userId: Id;
}
