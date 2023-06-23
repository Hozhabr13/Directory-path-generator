import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

const WalletLayout = () => (
    <>
        <Header />
        <Sidebar />
            <Outlet />
        <Footer />
    </>
)

export default WalletLayout
