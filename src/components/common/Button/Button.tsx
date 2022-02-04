import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './Button.module.scss'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    variant?: 'blue' | 'light-blue' | 'red'
}

const Button: React.FC<SuperButtonPropsType> = ({ variant = 'blue', className = '', ...restProps }) => (
    <button
        type="button"
        className={`${s.button} ${s[variant]} ${className}`}
        {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
)

export default Button
