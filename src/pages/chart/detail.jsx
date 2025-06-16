import {  useParams } from 'react-router-dom'

export default function PageChartDetail() {
  const id = useParams().id

  return <div>{id} </div>
}
