import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../api/auth-api/auth-api'
import { userReducer } from './slices/user-slice/user-slice'
import { packsApi } from '../api/packs-api/packs-api'
import { cardsApi } from '../api/cards-api/cards-api'

export const store = configureStore({
    reducer: {
        userReducer,
        [authApi.reducerPath]: authApi.reducer,
        [packsApi.reducerPath]: packsApi.reducer,
        [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        authApi.middleware,
        packsApi.middleware,
        cardsApi.middleware,
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
