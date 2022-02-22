import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import Button from '../../components/common/Button/Button'

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

export const MainHeader = styled.header`
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #EBE0E9;
`

export const HeaderLogo = styled(Link)`
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #2D2E46;
`

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const HeaderMenuItem = styled.li`
    
`
export const HeaderMenuLink = styled(NavLink)`
  font-size: 15px;
  letter-spacing: 1px;
  color: #2D2E46;
  min-width: 173px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px 9px 12px;
  border-bottom: 3px solid transparent;
  opacity: 0.5;
  transition: border-bottom-color 0.3s  ease, opacity 0.3s  ease, background-color 0.3s  ease;

  svg {
    margin-right: 8px;
  }

  &:hover {
    font-weight: 500;
    opacity: 1;
    border-bottom-color: #21268F;
    background-color: #dcccdb4d;
  }

  &.active {
    font-weight: 500;
    opacity: 1;
    border-bottom-color: #21268F;
    background-color: #DCCCDB;
  }
`
export const ButtonLogout = styled(Button)`
  background-color: #21268f;
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 13px;
`

export const HeaderName = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`
