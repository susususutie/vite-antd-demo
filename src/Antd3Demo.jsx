import { Form } from 'antd3/index'
import 'antd3/index.css'
import { Input, Select, Checkbox, Button, Space } from 'antd4'

function Antd3DemoForm(props) {
  const { form } = props

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} autoComplete='off'>
      <Form.Item label='Username'>{form.getFieldDecorator('username', { validateFirst: true })(<Input />)}</Form.Item>
      <Form.Item label='Password'>
        {form.getFieldDecorator('password', { validateFirst: true })(<Input.Password />)}
      </Form.Item>
      <Form.Item label=' ' colon={false}>
        {form.getFieldDecorator('remember', { validateFirst: true, valuePropName: 'checked' })(
          <Checkbox>Remember me</Checkbox>
        )}
      </Form.Item>
      <Form.Item label='Gender'>
        {form.getFieldDecorator('gender', { validateFirst: true })(
          <Select>
            <Select.Option value='male'>male</Select.Option>
            <Select.Option value='female'>female</Select.Option>
            <Select.Option value='other'>other</Select.Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item label=' ' colon={false}>
        <Space>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
          <Button htmlType='button'>Reset</Button>
          <Button type='link' htmlType='button'>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

const Antd3Demo = Form.create({ name: 'antd3' })(Antd3DemoForm)
export default Antd3Demo
