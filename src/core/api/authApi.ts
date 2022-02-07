import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiConfig } from '../constants/ApiConfig'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: ApiConfig.BASE_URL }),
    endpoints: (build) => ({
        getPing: build.query({
            query: (date) => `ping?frontTime=${date}`,
        }),
    }),
})

export const { useGetPingQuery } = authApi
