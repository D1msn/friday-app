import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const StyledNavLinkStyled = styled(NavLink)`  
    &.active{
      color: red;
    }
`
export const AuthLinkText = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #21268F;
  transition: 0.3s all ease;
  margin-top: 11px;
  
  &:hover{
    color: #d9c9da;
  }
`
