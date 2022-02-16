import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #EBE0E9;
`
export const MainHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;  
`

export const HeaderLogo = styled(Link)`
  flex-grow: 1;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #2D2E46;
`

export const HeaderMenu = styled.ul`
  flex-grow: 2;
  display: flex;
  align-items: center;
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
