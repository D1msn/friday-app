import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../api/auth-api/auth-api'
import { userReducer } from './slices/user-slice/user-slice'

export const store = configureStore({
    reducer: {
        userReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
