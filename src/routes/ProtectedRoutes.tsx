import React, { useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RouteNames } from './index'
import { useTypedSelector } from '../core/hooks/useTypedSelector'

export const ProtectedRoutes = () => {
    const location = useLocation()
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    const user = useTypedSelector(state => state.userReducer.userInfo)

    const navigateToLogin = <Navigate to={`${RouteNames.AUTH}/${RouteNames.LOGIN}`} state={{ from: location }} />

    return isAuth && user._id ? <Outlet /> : navigateToLogin
}
