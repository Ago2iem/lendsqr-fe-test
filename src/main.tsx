import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import './styles/main.scss'

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// import Dashboard from './pages/dashboard'
import Dashboard from './pages/dashboard'
import RootLayout from './layouts/root-layout'
import UserLayout from './layouts/users-layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/dashboard',
    element: <RootLayout />,
    children: [
      { path: '', element: <Dashboard /> },
    ]
  },
  {
    path: '/user-details',
    element: <RootLayout />,
    children: [
      { path: '', element: <UserLayout />, children: [{ path: 'general', element: <div>Inside the stuff not sure where hh</div> }] }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
