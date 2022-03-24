import React, { useEffect } from 'react'
import Portal from '../../Portal'
import styles from './OverlayingPopup.module.scss'

type PopupPropsType = {
	children: any
	onClose: () => void
	isOpened: boolean
}

const Popup = ({ children, onClose, isOpened }: PopupPropsType) => {
    const header = document.querySelector('.header')

    useEffect(() => {
        const scrollWidth = window.innerWidth - document.body.getBoundingClientRect().width

        // @ts-ignore
        if (header)header.style.paddingRight = `${scrollWidth + 50}px`

        document.body.style.overflow = 'hidden'

        return () => {
            // @ts-ignore
            if (header) header.style.paddingRight = ''
            document.body.style.paddingRight = ''
            document.body.style.overflow = ''
        }
    }, [isOpened])

    if (!isOpened) {
        return null
    }

    return (
        <Portal>
            <div className={styles.container} role="dialog">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/control-has-associated-label */}
                <div className={styles.overlay} role="button" tabIndex={0} onClick={onClose} />
                {children}
            </div>
        </Portal>
    )
}

export default Popup
