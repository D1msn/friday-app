import React, {
    ChangeEvent, ComponentProps, KeyboardEvent, useState,
} from 'react'

import { ShowPass, StyledInput } from './InputText.styled'

export type SuperInputTextPropsType = ComponentProps<typeof StyledInput> & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: boolean
    errorText?: string
    password?: boolean
}

const InputText: React.FC<SuperInputTextPropsType> = React.forwardRef(({
    password = false,
    onChange, onChangeText,
    onKeyPress, onEnter,
    ...restProps
}, forwardedRef) => {
    const [showPass, setShowPass] = useState(false)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e)
        if (onChangeText) onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if (onKeyPress) onKeyPress(e)
        if (onEnter && e.key === 'Enter') onEnter()
    }

    return (
        <>
            <StyledInput
                type={showPass || !password ? 'text' : 'password'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                password={password}
                ref={forwardedRef}
                {...restProps}
            />
            {password && <ShowPass className="unselectable" onClick={() => setShowPass(!showPass)}>{showPass ? 'Скрыть' : 'Показать'}</ShowPass>}
        </>
    )
})

export default InputText
