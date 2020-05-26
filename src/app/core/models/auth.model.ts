export type AuthType = 'login' | 'register';

export interface AuthDTO {
    email: string;
    password: string;
    passwordConfirmation?: string;
    firstName?: string;
    lastName?: string;
}
