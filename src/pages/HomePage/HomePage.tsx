import React from 'react'
import Button from '../../components/common/Button/Button'
import { useActions } from '../../core/hooks/useActions'
import { useLogoutUserMutation } from '../../core/api/auth-api/auth-api'

export const HomePage = () => {
    const [logOut] = useLogoutUserMutation()
    const { setDefaultUser } = useActions()

    const onLogOut = () => {
        logOut({})
        setDefaultUser()
    }

    return (
        <div>
        Hello i am Home Page
            <Button onClick={onLogOut}>LOGOUT</Button>
        </div>
    )
}
