import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './service/routes'
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
      <Router>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>
)
