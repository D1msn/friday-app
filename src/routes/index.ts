export enum RouteNames {
    HOME = '/',
    AUTH = 'auth',
    REGISTER = 'register',
    LOGIN = 'login',
    PROFILE = 'profile',
    RECOVERY = 'recovery',
    NEW_PASSWORD = 'new-password',
    UI_KIT = 'ui-kit',
    PAGE_NOT_FOUND = '404',
    EMAIL_SEND_PAGE = 'send-email',
}

export interface LocationState {
    from: {
        pathname: string;
    };
}
