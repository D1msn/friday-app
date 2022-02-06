import React from 'react'
import styled from 'styled-components'
import Button from '../../components/common/Button/Button'
import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import InputText from '../../components/common/InputText/InputText'

const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #2D2E46;
  opacity: 0.5; 
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
