import React from 'react'
import { Outlet } from 'react-router-dom'
import { RouteNames } from '../../routes'
import { StyledNavLinkStyled } from '../../styles/StyledNavLink.styled'
import { StyledHeader } from './Layout.styled'

export const Layout = () => (
    <>
        <StyledHeader>
            <ul>
                <li>
                    <StyledNavLinkStyled to={RouteNames.HOME}>Home</StyledNavLinkStyled>
                </li>
                <li>
                    <StyledNavLinkStyled to={`${RouteNames.AUTH}/${RouteNames.REGISTER}`}>
                        Register
                    </StyledNavLinkStyled>
                </li>
                <li>
                    <StyledNavLinkStyled to={`${RouteNames.AUTH}/${RouteNames.LOGIN}`}>
                        Login
                    </StyledNavLinkStyled>
                </li>
                <li>
                    <StyledNavLinkStyled to={`${RouteNames.AUTH}/${RouteNames.RECOVERY}`}>
                        Password recovery
                    </StyledNavLinkStyled>
                </li>
                <li>
                    <StyledNavLinkStyled to={`${RouteNames.AUTH}/${RouteNames.EMAIL_SEND_PAGE}`}>
                        Password recovery
                    </StyledNavLinkStyled>
                </li>
                <li>
                    <StyledNavLinkStyled to={`${RouteNames.AUTH}/${RouteNames.NEW_PASSWORD}`}>
                        New password
                    </StyledNavLinkStyled>
                </li>
                <li>
                    <StyledNavLinkStyled to={RouteNames.PROFILE}>Profile</StyledNavLinkStyled>
                </li>
                <li>
                    <StyledNavLinkStyled to={RouteNames.PAGE_NOT_FOUND}>404 page</StyledNavLinkStyled>
                </li>
                <li>
                    <StyledNavLinkStyled to={RouteNames.UI_KIT}>Ui-kit</StyledNavLinkStyled>
                </li>
            </ul>
        </StyledHeader>
        <div className="main _container">
            <Outlet />
        </div>
    </>
)
