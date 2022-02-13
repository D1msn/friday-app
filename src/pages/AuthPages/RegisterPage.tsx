import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'

import { ErrorMessage } from '@hookform/error-message'
import Button from '../../components/common/Button/Button'
import InputText from '../../components/common/InputText/InputText'

import { LocationState, RouteNames } from '../../routes'

import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import { ButtonBlock } from '../../styles/ButtonBlock.styled'
import { useRegisterUserMutation } from '../../core/api/auth-api/auth-api'
import { RegisterUserModel } from '../../core/types/authModel.types'

const ErrorText = styled.p`
  color: red;
  margin-top: 20px;
  font-size: 16px;
`

type RegisterFormType = {
    email: string
    password: string
    confirmPass: string
}

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(7).required(),
    confirmPass: yup.string().min(7).oneOf([yup.ref('password')], 'Пароль не совпадает').required(),
}).required()

export const RegisterPage = () => {
    const [registerError, setRegisterError] = useState('')
    const [registerUser, { isLoading }] = useRegisterUserMutation()

    const {
        register, handleSubmit, reset, formState: { errors, isValid },
    } = useForm<RegisterFormType>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const location = useLocation()
    const navigate = useNavigate()

    const fromPage = (location.state as LocationState)?.from?.pathname || '/'

    const onSubmitRegister = async (data: RegisterFormType) => {
        const registerModel: RegisterUserModel = {
            email: data.email,
            password: data.password,
        }
        try {
            await registerUser(registerModel).unwrap()
            navigate(`/${RouteNames.AUTH}/${RouteNames.LOGIN}`)
        } catch (e: any) {
            setRegisterError(e.data.error)
        } finally {
            reset()
        }
    }

    return (
        <AuthBodyWrapperStyled onSubmit={handleSubmit(onSubmitRegister)}>
            <h2>Sign Up</h2>
            <FormWrapper>
                <li className="form-row">
                    <InputText
                        disabled={isLoading}
                        placeholder="Email"
                        {...register('email')}
                    />
                    <ErrorMessage name="email" errors={errors} render={({ message }) => <p>{message}</p>} />
                </li>
                <li className="form-row">
                    <InputText
                        disabled={isLoading}
                        password
                        placeholder="Password"
                        {...register('password')}
                    />
                    <ErrorMessage name="password" errors={errors} render={({ message }) => <p>{message}</p>} />
                </li>
                <li className="form-row">
                    <InputText
                        disabled={isLoading}
                        password
                        placeholder="Confirm password"
                        {...register('confirmPass')}
                    />
                    <ErrorMessage name="confirmPass" errors={errors} render={({ message }) => <p>{message}</p>} />
                </li>
            </FormWrapper>

            {registerError && <ErrorText>{registerError}</ErrorText>}

            <ButtonBlock gap={36} style={{ marginTop: 'auto' }}>
                <Button
                    variant="light-blue"
                    onClick={() => navigate(fromPage)}
                >
                    Cancel
                </Button>

                <Button
                    disabled={!isValid}
                    loading={isLoading}
                    submit
                    style={{ flexGrow: 1 }}
                >
                    Register
                </Button>
            </ButtonBlock>
        </AuthBodyWrapperStyled>
    )
}
