import { lazy, Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Layout = lazy(() => import('../layouts'))
const FullCenter = lazy(() => import('../components/FullCenter'))
const PageAbout = lazy(() => import('../pages/about'))
const PageAboutAdd = lazy(() => import('../pages/about/add'))
const PageAboutConfig = lazy(() => import('../pages/about/config'))
const PageAboutDetail = lazy(() => import('../pages/about/detail'))
const PageAboutEdit = lazy(() => import('../pages/about/edit'))
const PageChartDetail = lazy(() => import('../pages/chart/detail'))
const PageChartList = lazy(() => import('../pages/chart/list'))
const ConfigModal = lazy(() => import('../pages/config/modal'))
const PageHome = lazy(() => import('../pages/home'))
const PageScreen = lazy(() => import('../pages/screen'))
const PageSystemList = lazy(() => import('../pages/system/list'))
const PageSystemType = lazy(() => import('../pages/system/[type]'))
const PageDashboard = lazy(() => import('../pages/dashboard'))
const PageConfig = lazy(() => import('../pages/config'))

/***
 * 所有页面都加上 Suspense 的体验不好，点击进行路由跳转时，需要先加载下一页面代码，此时页面没有反应
 * 
 */
export const elementMap = {
  Outlet: <Outlet />,
  Layout: (
    <Suspense fallback={<div>loading...</div>}>
      <Layout />
    </Suspense>
  ),
  Redirect403: <Navigate to='/43' replace />,
  Redirect404: <Navigate to='/404' replace />,
  RedirectScopedIndex: <Navigate to='../' replace />,
  RedirectParent403: <Navigate to='../403' replace />,
  RedirectParent404: <Navigate to='../404' replace />,
  RedirectScopedHome: <Navigate to='./home' replace />,
  RedirectScopedList: <Navigate to='./list' replace />,
  RedirectRoot403: <Navigate to='/403' replace />,
  RedirectRoot404: <Navigate to='/404' replace />,

  PageHome: (
    <Suspense fallback={<div>loading...</div>}>
      <PageHome />
    </Suspense>
  ),
  PageDashboard: (
    <Suspense fallback={<div>loading...</div>}>
      <PageDashboard />
    </Suspense>
  ),
  PageAbout: (
    <Suspense fallback={<div>loading...</div>}>
      <PageAbout />
    </Suspense>
  ),
  PageAboutAdd: (
    <Suspense fallback={<div>loading...</div>}>
      <PageAboutAdd />
    </Suspense>
  ),
  PageAboutEdit: (
    <Suspense fallback={<div>loading...</div>}>
      <PageAboutEdit />
    </Suspense>
  ),
  PageAboutDetail: (
    <Suspense fallback={<div>loading...</div>}>
      <PageAboutDetail />
    </Suspense>
  ),
  PageAboutConfig: (
    <Suspense fallback={<div>loading...</div>}>
      <PageAboutConfig />
    </Suspense>
  ),
  PageSystemList: (
    <Suspense fallback={<div>loading...</div>}>
      <PageSystemList />
    </Suspense>
  ),
  PageSystemType: (
    <Suspense fallback={<div>loading...</div>}>
      <PageSystemType />
    </Suspense>
  ),
  PageConfig: (
    <Suspense fallback={<div>loading...</div>}>
      <PageConfig />
    </Suspense>
  ),
  ConfigModal: (
    <Suspense fallback={<div>loading...</div>}>
      <ConfigModal />
    </Suspense>
  ),
  PageChartList: (
    <Suspense fallback={<div>loading...</div>}>
      <PageChartList />
    </Suspense>
  ),
  PageChartDetail: (
    <Suspense fallback={<div>loading...</div>}>
      <PageChartDetail />
    </Suspense>
  ),

  PageScreen: (
    <Suspense fallback={<div>loading...</div>}>
      <PageScreen />
    </Suspense>
  ),
  Page403: (
    <Suspense fallback={<div>loading...</div>}>
      <FullCenter>403</FullCenter>
    </Suspense>
  ),
  Page404: (
    <Suspense fallback={<div>loading...</div>}>
      <FullCenter>404</FullCenter>
    </Suspense>
  ),
}

export default elementMap