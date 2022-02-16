import React from 'react'
import { Outlet } from 'react-router-dom'
import { RouteNames } from '../../routes'
import { StyledNavLinkStyled } from '../../styles/StyledNavLink.styled'
import { ReactComponent as CardsSvg } from '../../assets/image/cards.svg'
import { ReactComponent as ProfileSvg } from '../../assets/image/profile.svg'
import {
    HeaderLogo, MainHeader, StyledHeader, HeaderMenuItem, HeaderMenuLink, HeaderMenu, MainHeaderWrapper,
} from './Layout.styled'

export const Layout = () => (
    <>
        <MainHeader>
            <MainHeaderWrapper className="_container">
                <HeaderLogo to={RouteNames.HOME}>
                IT-INCUBATOR
                </HeaderLogo>
                <HeaderMenu>
                    <HeaderMenuItem>
                        <HeaderMenuLink to={RouteNames.HOME}>
                            <CardsSvg />
                            Packs list
                        </HeaderMenuLink>
                    </HeaderMenuItem>
                    <HeaderMenuItem>
                        <HeaderMenuLink to={RouteNames.PROFILE}>
                            <ProfileSvg />
                            Profile
                        </HeaderMenuLink>
                    </HeaderMenuItem>
                </HeaderMenu>
            </MainHeaderWrapper>
        </MainHeader>

        <div className="main _container">
            <Outlet />
        </div>
    </>
)

const Header = () => (
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
)
