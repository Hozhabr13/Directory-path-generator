import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/appLayout'
import App from '../App'

const RoutesIntance: FC<any> = () => (
    <>
    <Routes>
        <Route element={<AppLayout />}>
            <Route path="/" element={<App />} />
        </Route>
    </Routes>
    </>
)

export default RoutesIntance
