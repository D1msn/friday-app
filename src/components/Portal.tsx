import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

type PortalPropsType = {
	children: any
}

const Portal = ({ children }: PortalPropsType) => {
    const [container] = useState(() => document.createElement('div'))

    useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}

export default Portal
