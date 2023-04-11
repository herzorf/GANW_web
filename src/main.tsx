import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import 'antd/dist/reset.css';
import { router } from './router';
import {
  HashRouter,
  RouterProvider,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
