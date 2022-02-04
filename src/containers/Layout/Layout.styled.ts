import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  ul{
    display: flex;
    align-items: center;
    li:not(:last-child){
      margin-right: 20px;
    }
  }
`
