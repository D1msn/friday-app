import React, { useEffect } from 'react'
import './App.css'
import {
    Navigate, Route, Routes, useNavigate,
} from 'react-router-dom'
import { RouteNames } from './routes'

import { Layout } from './containers/Layout/Layout'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/AuthPages/LoginPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { UiKitPage } from './pages/UiKitPage/UiKitPage'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'

import { AuthContainer } from './containers/AuthContainer/AuthContainer'
import { RegisterPage } from './pages/AuthPages/RegisterPage'
import { RecoveryPassPage } from './pages/AuthPages/RecoveryPassPage'
import { CreateNewPassPage } from './pages/AuthPages/CreateNewPassPage'

import './main.scss'
import { EmailSendPage } from './pages/AuthPages/EmailSendPage'
import { ProtectedRoutes } from './routes/ProtectedRoutes'
import { useCheckUserMutation } from './core/api/auth-api/auth-api'
import { useActions } from './core/hooks/useActions'
import { HomePageCard } from './pages/HomePage/HomePageCard'

const date = Date.now()

function App() {
    const [checkMeAuth, {
        isLoading, data, isSuccess,
    }] = useCheckUserMutation()
    const { setUser } = useActions()

    useEffect(() => {
        checkMeAuth({}).unwrap()
    }, [])

    if (isLoading) return <p>Loading....</p>

    if (isSuccess) {
        setUser(data)
    }

    return (
        <div className="app-wrapper _container">
            <Routes>
                <Route path={RouteNames.HOME} element={<Layout />}>
                    <Route element={<ProtectedRoutes />}>
                        <Route index element={<HomePage />} />
                        <Route path={RouteNames.PROFILE} element={<ProfilePage />} />
                        <Route path={`${RouteNames.HOME}:id`} element={<HomePageCard />} />
                    </Route>
                </Route>
                <Route path={RouteNames.AUTH} element={<AuthContainer />}>
                    <Route path={RouteNames.LOGIN} element={<LoginPage />} />
                    <Route path={RouteNames.REGISTER} element={<RegisterPage />} />
                    <Route path={RouteNames.RECOVERY} element={<RecoveryPassPage />} />
                    <Route path={RouteNames.EMAIL_SEND_PAGE} element={<EmailSendPage />} />
                    <Route path={RouteNames.NEW_PASSWORD} element={<CreateNewPassPage />} />
                </Route>
                <Route path={RouteNames.UI_KIT} element={<UiKitPage />} />

                <Route path={RouteNames.PAGE_NOT_FOUND} element={<PageNotFound />} />
                <Route path="/*" element={<Navigate to={RouteNames.PAGE_NOT_FOUND} />} />

            </Routes>
        </div>
    )
}

export default App
