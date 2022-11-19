import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routes from './services/routes'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

// disable-eslint
const container = document.getElementById('root')!
const root = createRoot(container)
// enable-eslint
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
