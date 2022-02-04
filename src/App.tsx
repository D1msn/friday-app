import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames } from './routes'

import { Layout } from './containers/Layout/Layout'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { UiKitPage } from './pages/UiKitPage/UiKitPage'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'

import './main.scss'
import { AuthContainer } from './containers/AuthContainer/AuthContainer'

function App() {
    return (
        <div className="app-wrapper">
            <Routes>
                <Route path={RouteNames.HOME} element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path={RouteNames.AUTH} element={<AuthContainer />}>
                        <Route path={RouteNames.LOGIN} element={<LoginPage />} />
                        <Route path={RouteNames.REGISTER} element={<LoginPage />} />
                        <Route path={RouteNames.RECOVERY} element={<LoginPage />} />
                        <Route path={RouteNames.NEW_PASSWORD} element={<LoginPage />} />
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
