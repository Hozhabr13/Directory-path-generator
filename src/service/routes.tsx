import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../pages/account'
import Wallet from '../pages/wallet'
import App from '../App'

const RoutesIntance = () => (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/*" element={<Wallet />} />
    </Routes>
)

export default RoutesIntance
