import React, { useState } from 'react'
import MainPopup, { PopupPropsType } from '../MainPopup/MainPopup'
import { SearchInput } from '../../../styles/utils.styles'
import Button from '../../common/Button/Button'

import styles from './InputPopup.module.scss'

type InputPopupPropsTypes = Omit<PopupPropsType, 'children'> & {
    cancelButtonText?: string,
    acceptButtonText?: string,
    onSubmit: (text: string) => void
}

export const InputPopup: React.FC<InputPopupPropsTypes> = ({
    onSubmit,
    acceptButtonText = 'Add',
    cancelButtonText = 'Cancel',
    ...props
}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const onChangeText = (e: string) => {
        setSearchQuery(e)
    }

    const onClickHandler = () => {
        onSubmit(searchQuery)
        setSearchQuery('')
        props.onClose()
    }
    
    return (
        <MainPopup
            {...props}
        >
            <SearchInput
                onChangeText={onChangeText}
                type="text"
                placeholder="Search....."
                className={styles.input}
            />
            <div className={styles.buttons}>
                <Button onClick={() => props.onClose()} variant="light-blue">{cancelButtonText}</Button>
                <Button onClick={onClickHandler} variant="blue">{acceptButtonText}</Button>
            </div>
        </MainPopup>
    )
}
