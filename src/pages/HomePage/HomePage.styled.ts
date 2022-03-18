import styled from 'styled-components'
import Button from '../../components/common/Button/Button'

export const HomeWrapper = styled.div`
  max-height: 636px;
  display: flex;  
  width: 100%;
  height: 100vh;
  background-color: #FEFEFF;
  border-radius: 8px;
`
export const HomeTitle = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  margin-bottom: 15px;
`
export const SideBarFilters = styled.div`
  flex-shrink: 0;
  border-radius: 8px 0 0 8px;
  padding: 24px;
  height: 100%;
  background-color: #ECECF9;
`
export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
`

export const FilterTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #2D2E46;
`

export const FilterWrapper = styled.div`
  margin-bottom: 40px;
`

export const ActionsButton = styled(Button)`
  &&{
    box-shadow: none;
    text-shadow: none;
  }

  border-radius: 5px;
  padding: 6px;
  min-width: max-content;
  height: max-content;
  
  &.add{
    margin-left: 70px;
    width: 44%;
    height: 100%;
  }
`
