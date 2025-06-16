import { Outlet, useParams } from 'react-router-dom'
import NavigateLinks from '../../components/NavigateLinks'

export default function PageSystemType() {
  const { type, id } = useParams()
  return (
    <div>
      PageSystem/{type}/{id}
      <Outlet /> <NavigateLinks />
    </div>
  )
}
