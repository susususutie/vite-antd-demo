import { useParams } from 'react-router-dom'
import Antd3Demo from '@/components/Antd3Demo'
import Antd4Demo from '@/components/Antd4Demo'
import Demo from '@/components/Demo'

export default function PageChartDetail() {
  const id = useParams().id

  return (
    <div>
      {id}
      <Antd3Demo />
      <Antd4Demo />
      <Demo />
    </div>
  )
}
