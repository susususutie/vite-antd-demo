import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import router from './routes/router'
import './app.css'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn' // for date-picker i18n
import { useContext } from 'react'
import { ThemeContext } from './stores/themeContext'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'

function App() {
  const { prefixCls, iconPrefixCls, ...token } = useContext(ThemeContext).value

  return (
    <ConfigProvider
      prefixCls={prefixCls}
      iconPrefixCls={iconPrefixCls}
      locale={zhCN}
      theme={{
        token: token,
      }}
    >
      <StyleProvider hashPriority='high' transformers={[legacyLogicalPropertiesTransformer]}>
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
