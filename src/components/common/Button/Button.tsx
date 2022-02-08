import React, { ComponentProps } from 'react'
import { ReactComponent as ButtonLoader } from '../../../assets/image/button-loader.svg'
import { StyledButton } from './Button.styled'

type SuperButtonPropsType = ComponentProps<typeof StyledButton> & {
    variant?: 'blue' | 'light-blue' | 'red'
    loading?: boolean
}

const Button: React.FC<SuperButtonPropsType> = ({
    loading = false, variant = 'blue', className = '', ...restProps
}) => (
    <StyledButton
        type="button"
        className={`${variant} ${className}`}
        disabled={loading}
        {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    >
        {loading ? <ButtonLoader /> : restProps.children}
    </StyledButton>
)

export default Button
