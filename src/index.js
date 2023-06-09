import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import './hero.css'
import './navbar.css'
import './project.css'
import './aboutme.css'
import './contact.css'
import './singlepage.css'
import DefaultContextProvider from './Contexts/DefaultContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DefaultContextProvider>
      <Router>
        <App />
      </Router>
    </DefaultContextProvider>
  </React.StrictMode>
)
