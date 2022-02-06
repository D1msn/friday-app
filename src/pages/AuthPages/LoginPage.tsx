import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button/Button'
import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import InputText from '../../components/common/InputText/InputText'
import { RouteNames } from '../../routes'
import { AuthLinkText } from '../../styles/StyledNavLink.styled'

const GrayText = styled.p`
  color: #2D2E46;
  opacity: 0.5;
`

const LoginBtn = styled(Button)`
  width: 266px;
  margin-bottom: 30px;
`
const LoginFormWrapper = styled(FormWrapper)`
  margin-bottom: 30px;
`

const Forgot = styled(Link)`
  margin-left: auto;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 60px;
  &:hover{
    color: #21268f;
  }
`

type LoginPagePropsTypes = {

};
export const LoginPage = (props: LoginPagePropsTypes) => (
    <AuthBodyWrapperStyled>
        <h2>Sign In</h2>
        <LoginFormWrapper>
            <li className="form-row">
                <InputText placeholder="Email" />
            </li>
            <li className="form-row">
                <InputText password placeholder="Password" />
            </li>
        </LoginFormWrapper>
        <Forgot to={`/${RouteNames.AUTH}/${RouteNames.RECOVERY}`}>Forgot Password</Forgot>
        <LoginBtn>Login</LoginBtn>
        <GrayText>Don’t have an account?</GrayText>
        <AuthLinkText to={`/${RouteNames.AUTH}/${RouteNames.REGISTER}`}>Sign Up</AuthLinkText>
    </AuthBodyWrapperStyled>
)
