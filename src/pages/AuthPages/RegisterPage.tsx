import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ErrorMessage } from '@hookform/error-message'
import Button from '../../components/common/Button/Button'
import InputText from '../../components/common/InputText/InputText'

import { LocationState } from '../../routes'

import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import { ButtonBlock } from '../../styles/ButtonBlock.styled'

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
    const {
        register, handleSubmit, formState: { errors, isValid, isSubmitting },
    } = useForm<RegisterFormType>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const location = useLocation()
    const navigate = useNavigate()

    const fromPage = (location.state as LocationState)?.from?.pathname || '/'

    return (
        <AuthBodyWrapperStyled onSubmit={handleSubmit(d => console.log(d))}>
            <h2>Sign Up</h2>
            <FormWrapper>
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
                    <ErrorMessage name="password" errors={errors} render={({ message }) => <p>{message}</p>} />
                </li>
                <li className="form-row">
                    <InputText
                        password
                        placeholder="Confirm password"
                        {...register('confirmPass')}
                    />
                    <ErrorMessage name="confirmPass" errors={errors} render={({ message }) => <p>{message}</p>} />
                </li>
            </FormWrapper>
            <ButtonBlock gap={36} style={{ marginTop: 'auto' }}>
                <Button
                    variant="light-blue"
                    onClick={() => navigate(fromPage)}
                >
                    Cancel
                </Button>

                <Button
                    disabled={!isValid}
                    loading={isSubmitting}
                    submit
                    style={{ flexGrow: 1 }}
                >
                    Register
                </Button>
            </ButtonBlock>
        </AuthBodyWrapperStyled>
    )
}
