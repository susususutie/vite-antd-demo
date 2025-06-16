import { createBrowserRouter} from 'react-router-dom'
import plainRoutes from './plain-routes'
import ElementMap from './elements'

function getRouteObjects(plainRouteObjects){
  return plainRouteObjects.map(item => {
    if (item.index) {
      return { ...item, element: item.element ? ElementMap[item.element] : null }
    } else {
      return {
        ...item,
        element: item.element ? ElementMap[item.element] : null,
        children: item.children?.length ? getRouteObjects(item.children) : undefined,
      }
    }
  })
}

const routeObjects = getRouteObjects(plainRoutes)

export default createBrowserRouter(routeObjects, { basename: import.meta.env.BASE_URL })