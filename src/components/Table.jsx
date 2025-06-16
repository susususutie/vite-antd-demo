import './table.css'

export default function Table(props) {
  const { dataSource, columns, rowKey = 'key' } = props

  return (
    <table>
      <colgroup>
        <col />
      </colgroup>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item, index) => (
          <tr key={item[rowKey] ?? index}>
            {columns.map(column => {
              const dataIndex = column.dataIndex
              const value = dataIndex ? item[dataIndex] : item

              return (
                <td key={column.key}>
                  {typeof column.render === 'function' ? column.render(value, item, index) : String(value)}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
