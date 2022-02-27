import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../types/authModel.types'

type InitialStateType = {
    isAuth: boolean
    userInfo: IUser
}

const initialState: InitialStateType = {
    isAuth: false,
    userInfo: {
        _id: '',
        avatar: '',
        name: '',
        created: '',
        email: '',
        error: '',
        isAdmin: false,
        publicCardPacksCount: 0,
        rememberMe: false,
        updated: '',
        verified: false,
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.userInfo = action.payload
        },
        setDefaultUser: (state) => {
            state.isAuth = false
            state.userInfo = initialState.userInfo
        },
    },
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
