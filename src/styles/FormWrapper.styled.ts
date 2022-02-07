import styled from 'styled-components'

export const FormWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  .form-row{
    position: relative;
    width: 100%;
    &:not(:last-child){
      margin-bottom: 24px;
    }
  }
  
`
