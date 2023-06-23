import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routes from './services/routes'
import './index.css'

// disable-eslint
const container = document.getElementById('root')!
const root = createRoot(container)
// enable-eslint
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  </React.StrictMode>
)
