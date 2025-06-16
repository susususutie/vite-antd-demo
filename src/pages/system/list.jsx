import { Link } from 'react-router-dom'
import NavigateLinks from '../../components/NavigateLinks'

export default function PageSystemList() {
  return <div>PageSystemList
    <ul>
      <li>
        <Link to="./1" >One</Link>
      </li>
      <li>
        <Link to='./2'>Two</Link>
      </li>
    </ul>

    <NavigateLinks />
  </div>
}
