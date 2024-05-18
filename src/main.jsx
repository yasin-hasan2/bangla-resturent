import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routers/router.jsx';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <HelmetProvider>
  <div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={router} />
  </div>
  </HelmetProvider>
  </AuthProvider>
  </React.StrictMode>,
)
