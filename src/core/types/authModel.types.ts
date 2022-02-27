export type LoginUserModel = {
    email: string
    password: string
    rememberMe: false
}
export type RegisterUserModel = Omit<LoginUserModel, 'rememberMe'>

export interface IUser {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

export type ForgotEmail = {
    email: string
    from: string
    message: string
}
