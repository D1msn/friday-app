import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { ErrorMessage } from '@hookform/error-message'
import Button from '../../components/common/Button/Button'
import InputText from '../../components/common/InputText/InputText'
import { RouteNames } from '../../routes'

import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
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

type LoginFormType = {
    email: string
    password: string
}

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required()

export const LoginPage = (props: LoginPagePropsTypes) => {
    const {
        register, handleSubmit, formState: { errors, isValid, isSubmitting },
    } = useForm<LoginFormType>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const location = useLocation()

    return (
        <AuthBodyWrapperStyled onSubmit={handleSubmit(d => console.log(d))}>
            <h2>Sign In</h2>
            <LoginFormWrapper>
                <li className="form-row">
                    <InputText
                        placeholder="Email"
                        {...register('email')}
                    />
                    <ErrorMessage name="email" errors={errors} render={({ message }) => <p>{message}</p>} />
                </li>
                <li className="form-row">
                    <InputText
                        password
                        placeholder="Password"
                        {...register('password')}
                    />
                </li>
            </LoginFormWrapper>

            <Forgot to={`/${RouteNames.AUTH}/${RouteNames.RECOVERY}`}>Forgot Password</Forgot>

            <LoginBtn disabled={!isValid} loading={isSubmitting} submit> Login </LoginBtn>

            <GrayText>Don’t have an account?</GrayText>

            <AuthLinkText
                to={`/${RouteNames.AUTH}/${RouteNames.REGISTER}`}
                state={{ from: location }}
            >
                Sign Up
            </AuthLinkText>

        </AuthBodyWrapperStyled>
    )
}
