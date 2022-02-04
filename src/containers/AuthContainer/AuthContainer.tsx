import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContainerWrapper } from './AuthContainer.styled'

export const AuthContainer = () => (
    <AuthContainerWrapper>
        <h1>It-incubator</h1>
        <Outlet />
    </AuthContainerWrapper>
)
