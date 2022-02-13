import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContainerWrapper } from './AuthContainer.styled'
import { RouteNames } from '../../routes'
import { useTypedSelector } from '../../core/hooks/useTypedSelector'

export const AuthContainer = () => {
    const location = useLocation()
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)

    const navigateToHome = <Navigate to={RouteNames.HOME} state={{ from: location }} />

    return isAuth ? navigateToHome : (
        <AuthContainerWrapper>
            <h1>It-incubator</h1>
            <Outlet />
        </AuthContainerWrapper>
    )
}
