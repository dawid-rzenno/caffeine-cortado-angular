import { User } from "../users/user";

export type SignInResponse = {
	token: string;
	expiration: Date;
	user: User;
}
