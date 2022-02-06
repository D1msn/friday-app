import React from 'react'
import Button from '../../components/common/Button/Button'
import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import InputText from '../../components/common/InputText/InputText'
import { ButtonBlock } from '../../styles/ButtonBlock.styled'

export const RegisterPage = () => (
    <AuthBodyWrapperStyled>
        <h2>Sign Up</h2>
        <FormWrapper>
            <li className="form-row">
                <InputText placeholder="Email" />
            </li>
            <li className="form-row">
                <InputText password placeholder="Password" />
            </li>
            <li className="form-row">
                <InputText password placeholder="Confirm password" />
            </li>
        </FormWrapper>
        <ButtonBlock gap={36} style={{ marginTop: 'auto' }}>
            <Button variant="light-blue">Cancel</Button>
            <Button style={{ flexGrow: 1 }}>Register</Button>
        </ButtonBlock>
    </AuthBodyWrapperStyled>
)
