import React from 'react'
import styled from 'styled-components'
import Button from '../../components/common/Button/Button'
import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import InputText from '../../components/common/InputText/InputText'
import { FormWrapper } from '../../styles/FormWrapper.styled'
import { AuthLinkText } from '../../styles/StyledNavLink.styled'
import { RouteNames } from '../../routes'

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #2D2E46;
  opacity: 0.5; 
  margin-top: 30px;
  max-width: 350px;
`
const SendButton = styled(Button)`
  width: 266px;
  margin-top: 90px;
`

export const RecoveryPassPage = () => (
    <AuthBodyWrapperStyled>
        <h2>Forgot your password?</h2>
        <FormWrapper>
            <li className="form-row">
                <InputText placeholder="Email" />
            </li>
        </FormWrapper>
        <Text>Enter your email address and we will send you further instructions </Text>
        <SendButton>Send Instructions</SendButton>
        <Text>Did you remember your password?</Text>
        <AuthLinkText to={`/${RouteNames.AUTH}/${RouteNames.LOGIN}`}>Try logging in</AuthLinkText>
    </AuthBodyWrapperStyled>
)
