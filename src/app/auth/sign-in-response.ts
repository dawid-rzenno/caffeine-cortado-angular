import { User } from "./user";

export type SignInResponse = {
	token: string;
	expiration: Date;
	user: User;
}
