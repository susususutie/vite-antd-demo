import { useState } from 'react'
import { ConfigProvider, Button, App as AntApp } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn' // for date-picker i18n
import Demo from '@/Demo'
import Antd4Demo from '@/Antd4Demo'
import 'antd4/dist/antd.variable.min.css'
import zhCN4 from 'antd4/es/locale/zh_CN'
import { ConfigProvider as ConfigProvider4 } from 'antd4'
import Antd3Demo from '@/Antd3Demo'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'

ConfigProvider4.config({
  theme: {
    primaryColor: '#1b67d2',
    infoColor: '#1b67d2',
    successColor: '#4fcf0e',
    warningColor: '#e1a836',
    errorColor: '#da3437',
    textBaseColor: '#101010',
  },
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConfigProvider
        prefixCls='ant5'
        iconPrefixCls='ant5-icon'
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: '#1b67d2',
            colorInfo: '#1b67d2',
            colorSuccess: '#4fcf0e',
            colorWarning: '#e1a836',
            colorError: '#da3437',
            colorTextBase: '#101010',
            borderRadius: 2,
          },
        }}
      >
        <StyleProvider hashPriority='high' transformers={[legacyLogicalPropertiesTransformer]}>
          <AntApp>
            <Button type='primary' onClick={() => setCount(c => c + 1)}>
              {count}
            </Button>
            <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
            <Demo />
            <ConfigProvider4 locale={zhCN4}>
              <Antd4Demo />
              <Antd3Demo />
            </ConfigProvider4>
          </AntApp>
        </StyleProvider>
      </ConfigProvider>
    </>
  )
}

export default App
