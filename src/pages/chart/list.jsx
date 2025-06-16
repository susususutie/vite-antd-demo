import { Link } from 'react-router-dom'
import Table, { type TableProps } from '../../components/Table'

const columns: TableProps['columns'] = [
  {
    key: 'name',
    title: '名称',
    dataIndex: 'name',
  },
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
  },
  {
    key: 'action',
    title: '操作',
    render: (text, record) => <Link to={`./detail/${record.id}`}>查看</Link>,
  },
]
const dataSource: TableProps['dataSource'] = [
  { id: 1, name: 'Demo1' },
  { id: 2, name: 'Demo1' },
  { id: 3, name: 'Demo1' },
]

export default function PageChartList() {
  return (
    <div>
      <Table rowKey='id' columns={columns} dataSource={dataSource} />
    </div>
  )
}
