import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import RootLayout from './layouts/root-layout'
import User from './pages/users'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 6000, gcTime: 10 * (60 * 1000) } } })


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
    path: '/user-details/:id',
    element: <RootLayout />,
    children: [
      { path: '', element: <User /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
