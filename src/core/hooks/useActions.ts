import { bindActionCreators } from '@reduxjs/toolkit'
import { userActions } from '../store/slices/user-slice/user-slice'
import { useAppDispatch } from './useAppDispatch'

const allActions = {
    ...userActions,
}

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(allActions, dispatch)
}
