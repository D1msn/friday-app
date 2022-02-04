import { profileReducer } from './profile-reducer'
import { authReducer } from './auth-reducer'
import { appReducer } from './app-reducer'

export default {
    profile: profileReducer,
    auth: authReducer,
    app: appReducer,
}
