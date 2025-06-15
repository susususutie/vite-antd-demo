import { ConfigProvider } from 'antd4'
import { ConfigConsumer } from 'antd4/es/config-provider'

const MergedConfigConsumer = ConfigProvider?.ConfigContext?.Consumer || ConfigConsumer
export default MergedConfigConsumer
