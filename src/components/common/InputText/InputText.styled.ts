import styled from 'styled-components'

export const ShowPass = styled.p`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`

export const StyledInput = styled.input<{ password?: boolean }>`
  font-family: 'Poppins', ui-serif;
  position: relative;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2D2E46;
  background-color: transparent;
  height: 40px;
  padding: 5px 0 5px 0;
  border: 0;
  border-bottom: 1px solid #24254a59;
  transition: 0.3s all ease;
  padding-right: ${props => (props.password && '76px')};
  
  &.password{
    padding-right: 56px;
  }

  &::placeholder{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #2D2E46;
    opacity: 0.5;
  }
  
  &:focus{
    outline: none;
    border-bottom-color: #24254A;
    &::placeholder{
      font-size: 1px;
    }
  }
`
