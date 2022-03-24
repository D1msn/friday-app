import React from 'react'
import Portal from '../../Portal'

import styles from './FullScreenPopup.module.scss'

type PopupPropsType = {
	children: any
}

const FullScreenPopup = ({ children }: PopupPropsType) => (
    <Portal>
        <div className={styles.popup}>{children}</div>
    </Portal>
)

export default FullScreenPopup
