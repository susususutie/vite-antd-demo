import { Space } from 'antd4'
import { Button, Form, Input, Select } from 'antd4'

export default function Antd4Demo() {
  const [form] = Form.useForm()
  const onGenderChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        })
        return
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        })
        return
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        })
    }
  }
  const onFinish = values => {
    console.log(values)
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    })
  }

  return (
    <Form
      name='antd4'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      form={form}
      onFinish={onFinish}
      autoComplete='off'
    >
      <Form.Item
        name='note'
        label='Note'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='gender'
        label='Gender'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder='Select a option and change input text above' onChange={onGenderChange} allowClear>
          <Select.Option value='male'>male</Select.Option>
          <Select.Option value='female'>female</Select.Option>
          <Select.Option value='other'>other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name='customizeGender'
              label='Customize Gender'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item label=' ' colon={false}>
        <Space>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
          <Button htmlType='button' onClick={onReset}>
            Reset
          </Button>
          <Button type='link' htmlType='button' onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
