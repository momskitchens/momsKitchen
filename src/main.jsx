import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Protected from './components/Protected.jsx'
import MenuPage from './pages/MenuPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    // errorElement :  add error page.
    children:[
      {
        path: '/',
        element: <HomePage />
      },
      {
        path : '/login',
        element: (
          <Protected  authentication={false}>
                 <LoginPage />
          </Protected>
        )
      },
      {
        path : '/signup',
        element: (
          <Protected  authentication={false}>
                 <SignupPage />
          </Protected>
        )
      },
      {
        path : '/menu',
        element: (
          <Protected  authentication={true}>
                 <MenuPage />
          </Protected>
        )
      },
      // {
      //   path : '/contact-us',
      //   element: (
      //     <Protected  authentication={true}>
      //            <Contact />
      //     </Protected>
      //   )
      // },
      // {
      //   path : '/about-us',
      //   element: (
      //     <Protected  authentication={true}>
      //            <About />
      //     </Protected>
      //   )
      // },
      // {
      //   path : '/profile',
      //   element: (
      //     <Protected  authentication={true}>
      //            <Profile />
      //     </Protected>
      //   )
      // }, 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={store}  >
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
