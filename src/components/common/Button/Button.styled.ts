import styled from 'styled-components'

export const StyledButton = styled.button`
  height: 37px;
  min-width: 124px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #ECECF9;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 18px rgba(33, 38, 143, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.5s ease;

  &:active{
    transform: translateY(5px);
  }

  &:disabled{
    opacity: 0.6;
    cursor: default;
    pointer-events: none;
    padding: 0;
    background-color: #d3d3d3 !important;
    box-shadow: none;
    svg{
      height: 37px;
      circle{
        fill: #21268F;        
      }
    }
  }

  &.blue{
    background-color: #21268F;
    &:hover{
      background-color: lighten(#21268F,5%);
    }
  }
  &.red{
    background-color: #F1453D;
    box-shadow: 0 4px 18px rgba(241, 69, 61, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    &:hover{
      background-color: lighten(#F1453D,5%);
    }
  }
  &.light-blue{
    color: #21268F;
    background-color: #D7D8EF;
    opacity: 0.8;
    box-shadow: none;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    &:hover{
      background-color: lighten(#D7D8EF,5%);
    }
  }
`
