import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'promise-polyfill/src/polyfill';
import 'unfetch/polyfill';
import 'abortcontroller-polyfill';

import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import 'antd/dist/reset.css';
import { router } from './router';
import { ConfigProvider } from 'antd';
import zhCN from "antd/es/locale/zh_CN"
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';

import {
  RouterProvider,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode >,
)
