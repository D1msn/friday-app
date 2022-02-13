import React from 'react'
import styled from 'styled-components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
import { LoginUserModel } from '../../core/types/authModel.types'
import { useLoginUserMutation } from '../../core/api/auth-api/auth-api'
import { useActions } from '../../core/hooks/useActions'

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

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    rememberMe: yup.boolean().required(),
}).required()

export const LoginPage = (props: LoginPagePropsTypes) => {
    const {
        register, handleSubmit, formState: { errors, isValid },
    } = useForm<LoginUserModel>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const navigate = useNavigate()
    const [login, { isLoading, error }] = useLoginUserMutation()
    const { setUser } = useActions()

    const onSubmitLogin = async (data: LoginUserModel) => {
        const user = await login(data).unwrap()
        setUser(user)
        navigate(RouteNames.HOME)
    }

    const location = useLocation()

    return (
        <AuthBodyWrapperStyled onSubmit={handleSubmit(onSubmitLogin)}>
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
                <li className="form-row">
                    <label htmlFor="rememberMe">
                        <input
                            id="rememberMe"
                            type="checkbox"
                            {...register('rememberMe')}
                        />
                        Remember Me
                    </label>
                </li>
            </LoginFormWrapper>

            <Forgot to={`/${RouteNames.AUTH}/${RouteNames.RECOVERY}`}>Forgot Password</Forgot>

            {error && <p>Ошибка авторизации</p>}

            <LoginBtn disabled={!isValid} loading={isLoading} submit> Login </LoginBtn>

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
