import { Form, Input, Button, Checkbox, App, Space } from 'antd'

export default function Demo() {
  const { message, modal, notification } = App.useApp()
  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item label='Username' name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name='remember' valuePropName='checked' label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Space>
          <Button onClick={() => message.success('message success')}>message</Button>
          <Button onClick={() => modal.success({ title: 'message success', description: 'desc' })}>modal</Button>
          <Button onClick={() => notification.success({ message: 'notification success', description: 'desc' })}>
            notification
          </Button>
        </Space>
      </Form.Item>

      <Form.Item label={null}>
        <Space>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
          <Button htmlType='reset'>Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
