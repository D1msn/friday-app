import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/common/Button/Button'
import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import InputText from '../../components/common/InputText/InputText'
import { ButtonBlock } from '../../styles/ButtonBlock.styled'

type RegisterFormType = {
    email: string
    password: string
    confirmPass: string
}

export const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({
        mode: 'onBlur',
    })
    return (
        <AuthBodyWrapperStyled onSubmit={handleSubmit(d => console.log(d))}>
            <h2>Sign Up</h2>
            <FormWrapper>
                <li className="form-row">
                    <InputText placeholder="Email" {...register('email', { required: true })} />
                </li>
                <li className="form-row">
                    <InputText password placeholder="Password" {...register('password', { required: true })} />
                </li>
                <li className="form-row">
                    <InputText password placeholder="Confirm password" {...register('confirmPass', { required: true })} />
                </li>
            </FormWrapper>
            <ButtonBlock gap={36} style={{ marginTop: 'auto' }}>
                <Button variant="light-blue">Cancel</Button>
                <Button submit style={{ flexGrow: 1 }}>Register</Button>
            </ButtonBlock>
        </AuthBodyWrapperStyled>
    )
}
