import React from 'react'
import styled from 'styled-components'
import Button from '../../components/common/Button/Button'
import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import InputText from '../../components/common/InputText/InputText'
import { grayText } from '../../styles/utils.styles'

const Text = styled.p`
  ${grayText};
  margin: 20px 0 90px 0;
  max-width: 350px;
`

export const CreateNewPassPage = () => (
    <AuthBodyWrapperStyled>
        <h2>Create new password</h2>
        <FormWrapper>
            <li className="form-row">
                <InputText password placeholder="Password" />
            </li>
        </FormWrapper>
        <Text>Create new password and we will send you further instructions to email</Text>
        <Button>Create new password</Button>
    </AuthBodyWrapperStyled>
)
