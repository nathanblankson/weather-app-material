import { User } from './user.model';

export type AuthType = 'login' | 'register';

export interface AuthDTO {
    email: string;
    password: string;
    passwordConfirmation?: string;
    firstName?: string;
    lastName?: string;
}

export interface AuthRO {
    user: User,
    token: string
}
