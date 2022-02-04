import React from 'react'
import { Outlet } from 'react-router-dom'
import { RouteNames } from '../../routes'
import { StyledNavLink } from '../../styles/StyledNavLink'
import { StyledHeader } from './Layout.styled'

export const Layout = () => (
    <>
        <StyledHeader>
            <ul>
                <li>
                    <StyledNavLink to={RouteNames.HOME}>Home</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={RouteNames.REGISTER}>Register</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={RouteNames.LOGIN}>Login</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={RouteNames.PROFILE}>Profile</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={RouteNames.RECOVERY}>Password recovery</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={RouteNames.NEW_PASSWORD}>New password</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={RouteNames.PAGE_NOT_FOUND}>404 page</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={RouteNames.UI_KIT}>Ui-kit</StyledNavLink>
                </li>
            </ul>
        </StyledHeader>
        <div className="main _container">
            <Outlet />
        </div>
    </>
)
