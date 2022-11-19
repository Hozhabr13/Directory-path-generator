import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../pages/account'
import Wallet from '../pages/wallet'
import NotFound from '../pages/notFound'
import WalletLayout from '../layouts/walletLayout'
import App from '../App'

const RoutesIntance: FC<any> = () => (
    <>
    <Routes>
        <Route element={<WalletLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wallet">
            <Route path=":id" element={<Wallet />} />
            <Route index element={<Wallet />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
    </>
)

export default RoutesIntance
