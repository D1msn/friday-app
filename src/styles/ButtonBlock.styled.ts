import styled from 'styled-components'

type Props = {
    gap: number
}

export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  [type=button]{
    &:not(:last-child){
      margin-right: ${(props: Props) => props.gap && `${props.gap}px`};
    }
  }

`
