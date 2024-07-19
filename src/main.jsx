import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import SignUp from './components/SignUp.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Login from './components/Login.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={store}  >
    {/* <SignUp /> */}
    <Login />
    </Provider>
  </React.StrictMode>,
)
