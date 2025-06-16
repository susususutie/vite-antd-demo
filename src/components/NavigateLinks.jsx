import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import flatPlainRoutes from '../utils/flatPlainRoutes'
import plainRoutes from '../routes/plain-routes'

const flatRoutes = flatPlainRoutes(plainRoutes, { path: '/' }).map(route => ({
  ...route,
  elementPath: route.elementPath?.join('/') || '',
}))

export default function NavigateLinks() {
  const breakIndex = []
  let lastPath = ''
  flatRoutes.forEach((route, index) => {
    if (route.path !== '/' && (!lastPath || !route.path.startsWith(lastPath))) {
      breakIndex.push(index)
      lastPath = route.path
    }
  })
  return (
    <div
      style={{
        marginTop: 24,
        border: '1px solid #b3b3b3',
        padding: 24,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        fontSize: 16,
      }}
    >
      {flatRoutes.map((route, index) => (
        <Fragment key={index}>
          {breakIndex.includes(index) && <div style={{ width: '100%' }} />}
          <Link to={route.path.replace(/:([a-zA-Z0-9_]+)/, '1')}>
            {route.breadcrumb}({route.path})
          </Link>
        </Fragment>
      ))}
    </div>
  )
}
