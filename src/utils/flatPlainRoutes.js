export default function flatPlainRoutes(routes, parent) {
  const flatRoutes = []

  const parentPath = parent?.path || ''
  const parentElementPath = parent?.elementPath || []
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index]

    const item = { path: '' }
    if (route.breadcrumb) {
      item.breadcrumb = route.breadcrumb
    }
    if (route.index) {
      item.path = parentPath
    }
    if (!route.index && route.path) {
      item.path = parentPath ? `${parentPath}/${route.path}`.replace(/\/+/g, '/') : route.path
    }
    item.elementPath = parentElementPath.concat(route.element || [])
    flatRoutes.push(item)
    if (route.children?.length) {
      const flatChildren = flatPlainRoutes(route.children, { path: item.path, elementPath: item.elementPath })
      flatRoutes.push(...flatChildren)
    }
  }
  return flatRoutes
}
