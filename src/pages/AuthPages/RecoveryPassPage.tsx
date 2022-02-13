import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { ErrorMessage } from '@hookform/error-message'
import { RouteNames } from '../../routes'
import Button from '../../components/common/Button/Button'
import InputText from '../../components/common/InputText/InputText'

import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import { AuthLinkText } from '../../styles/StyledNavLink.styled'
import { grayText } from '../../styles/utils.styles'

const Text = styled.p`
  ${grayText};
  margin-top: 30px;
  max-width: 350px;
`
const SendButton = styled(Button)`
  width: 266px;
  margin-top: 90px;
`

const schema = yup.object({
    email: yup.string().email().required(),
}).required()

export const RecoveryPassPage = () => {
    const {
        register, handleSubmit, formState: { errors, isValid, isSubmitting },
    } = useForm<{ email: string }>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    return (
        <AuthBodyWrapperStyled onSubmit={handleSubmit(d => console.log(d))}>
            <h2>Forgot your password?</h2>
            <FormWrapper>
                <li className="form-row">
                    <InputText placeholder="Email" {...register('email')} />
                    <ErrorMessage name="email" errors={errors} render={({ message }) => <p>{message}</p>} />
                </li>
            </FormWrapper>
            <Text>Enter your email address and we will send you further instructions </Text>
            <SendButton disabled={!isValid} loading={isSubmitting} submit>Send Instructions</SendButton>
            <Text>Did you remember your password?</Text>
            <AuthLinkText to={`/${RouteNames.AUTH}/${RouteNames.LOGIN}`}>Try logging in</AuthLinkText>
        </AuthBodyWrapperStyled>
    )
}
