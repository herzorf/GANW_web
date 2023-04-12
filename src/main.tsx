import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import 'antd/dist/reset.css';
import { router } from './router';
import { ConfigProvider } from 'antd';
import zhCN from "antd/es/locale/zh_CN"
import {
  RouterProvider,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
