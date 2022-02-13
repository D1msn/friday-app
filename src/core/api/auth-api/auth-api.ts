import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiConfig } from '../../constants/ApiConfig'
import { ForgotEmail, LoginUserModel, RegisterUserModel } from '../../types/authModel.types'

enum AuthApiUrls {
    LOGIN_USER = '/auth/login',
    REGISTER_USER = '/auth/register',
    CHECK_USER_AUTH = '/auth/me',
    LOGOUT_USER = '/auth/me',
    FORGOT_PASSWORD = '/auth/forgot',
    SET_NEW_PASSWORD = '/auth/set-new-password',
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: ApiConfig.BASE_URL, credentials: 'include' }),
    endpoints: (build) => ({
        getPing: build.query({
            query: (date) => `ping?frontTime=${date}`,
        }),
        checkUser: build.mutation({
            query: () => ({
                url: AuthApiUrls.CHECK_USER_AUTH,
                method: 'post',
            }),
        }),
        loginUser: build.mutation({
            query: (body: LoginUserModel) => ({
                url: AuthApiUrls.LOGIN_USER,
                method: 'post',
                body,
            }),
        }),
        logoutUser: build.mutation({
            query: () => ({
                url: AuthApiUrls.LOGOUT_USER,
                method: 'delete',
            }),
        }),
        registerUser: build.mutation({
            query: (body: RegisterUserModel) => ({
                url: AuthApiUrls.REGISTER_USER,
                method: 'post',
                body,
            }),
        }),
        forgotPassword: build.mutation({
            query: (body: ForgotEmail) => ({
                url: AuthApiUrls.FORGOT_PASSWORD,
                method: 'post',
                body,
            }),
        }),
    }),
})

export const {
    useLogoutUserMutation,
    useRegisterUserMutation,
    useCheckUserMutation,
    useLoginUserMutation,
    useForgotPasswordMutation,
} = authApi
