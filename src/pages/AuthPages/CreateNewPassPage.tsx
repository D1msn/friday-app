import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { ErrorMessage } from '@hookform/error-message'
import Button from '../../components/common/Button/Button'
import InputText from '../../components/common/InputText/InputText'

import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import { grayText } from '../../styles/utils.styles'

const Text = styled.p`
  ${grayText};
  margin: 20px 0 90px 0;
  max-width: 350px;
`
const schema = yup.object({
    password: yup.string().min(7).required(),
}).required()
export const CreateNewPassPage = () => {
    const {
        register, handleSubmit, formState: { errors, isValid, isSubmitting },
    } = useForm<{ password: string }>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    return (
        <AuthBodyWrapperStyled onSubmit={handleSubmit(d => console.log(d))}>
            <h2>Create new password</h2>
            <FormWrapper>
                <li className="form-row">
                    <InputText password placeholder="Password" {...register('password')} />
                    <ErrorMessage name="password" errors={errors} render={({ message }) => <p>{message}</p>} />
                </li>
            </FormWrapper>
            <Text>Create new password and we will send you further instructions to email</Text>
            <Button disabled={!isValid} loading={isSubmitting} submit>Create new password</Button>
        </AuthBodyWrapperStyled>
    )
}
