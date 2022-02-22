import React from 'react'
import { Outlet } from 'react-router-dom'
import { RouteNames } from '../../routes'
import { StyledNavLinkStyled } from '../../styles/StyledNavLink.styled'
import { ReactComponent as CardsSvg } from '../../assets/image/cards.svg'
import { ReactComponent as ProfileSvg } from '../../assets/image/profile.svg'
import {
    ButtonLogout,
    HeaderLogo,
    HeaderMenu,
    HeaderMenuItem,
    HeaderMenuLink, HeaderName,
    MainHeader,
    StyledHeader,
} from './Layout.styled'
import { useLogoutUserMutation } from '../../core/api/auth-api/auth-api'
import { useActions } from '../../core/hooks/useActions'
import { useTypedSelector } from '../../core/hooks/useTypedSelector'
import { IUser } from '../../core/types/authModel.types'

export const Layout = () => {
    const [logOut] = useLogoutUserMutation()
    const { setDefaultUser } = useActions()
    const { name } = useTypedSelector(state => state.userReducer.userInfo as IUser)

    const onLogOut = () => {
        logOut({})
        setDefaultUser()
    }

    return (
        <>
            <MainHeader>
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
                <div>
                    <HeaderName>{name}</HeaderName>
                    <ButtonLogout onClick={onLogOut}>LOGOUT</ButtonLogout>
                </div>

            </MainHeader>

            <div className="main _container">
                <Outlet />
            </div>
        </>
    )
}

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
