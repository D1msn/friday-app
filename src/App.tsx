import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
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

function App() {
    return (
        <div className="app-wrapper">
            <Routes>
                <Route path={RouteNames.HOME} element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path={RouteNames.AUTH} element={<AuthContainer />}>
                        <Route path={RouteNames.LOGIN} element={<LoginPage />} />
                        <Route path={RouteNames.REGISTER} element={<RegisterPage />} />
                        <Route path={RouteNames.RECOVERY} element={<RecoveryPassPage />} />
                        <Route path={RouteNames.EMAIL_SEND_PAGE} element={<EmailSendPage />} />
                        <Route path={RouteNames.NEW_PASSWORD} element={<CreateNewPassPage />} />
                    </Route>
                    <Route path={RouteNames.PROFILE} element={<ProfilePage />} />
                    <Route path={RouteNames.UI_KIT} element={<UiKitPage />} />
                    <Route path={RouteNames.PAGE_NOT_FOUND} element={<PageNotFound />} />
                    <Route path="*" element={<Navigate to={RouteNames.PAGE_NOT_FOUND} />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
