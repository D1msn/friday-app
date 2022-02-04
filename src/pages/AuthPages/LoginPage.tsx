import React from 'react'
import Button from '../../components/common/Button/Button'
import { AuthBodyWrapper } from '../../styles/AuthBodyWrapper'

type LoginPagePropsTypes = {

};
export const LoginPage = (props: LoginPagePropsTypes) => (
    <AuthBodyWrapper>
         <h2>Sign In</h2>
        <Button>Login</Button>
    </AuthBodyWrapper>
)
