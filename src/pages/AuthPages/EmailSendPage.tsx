import React from 'react'
import styled from 'styled-components'
import { AuthBodyWrapperStyled } from '../../styles/AuthBodyWrapper.styled'
import { ReactComponent as EmailSvg } from '../../assets/image/email.svg'

const Title = styled.p`
  margin: 24px 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
`
const Text = styled.p`
  max-width: 328px;
  text-align: center;
  color: #2D2E46;
  opacity: 0.7;
`

export const EmailSendPage = () => (
    <AuthBodyWrapperStyled>
        <EmailSvg />
        <Title>Check Email</Title>
        <Text>We’ve sent an Email with instructions to example@mail.com</Text>
    </AuthBodyWrapperStyled>
)
