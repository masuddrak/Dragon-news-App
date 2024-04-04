import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/RootRoute'
import { RouterProvider } from 'react-router-dom'
import AuthComponet from './AuthComponent/AuthComponet'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthComponet>
      <RouterProvider router={router} />
    </AuthComponet>
  </React.StrictMode>,
)
