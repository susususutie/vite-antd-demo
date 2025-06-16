const plainRoutes = [
  // 以下页面为单独页面，不包裹 layout，可作为大屏、全屏404页面，需要放在后台页面之前，优先匹配
  { path: '403', element: 'Page403' },
  { path: '404', element: 'Page404' },
  { path: 'screen', element: 'PageScreen' },
  // 后台管理页面，包裹 layout
  {
    path: '',
    element: 'Layout',
    breadcrumb: '后台',
    children: [
      { index: true, breadcrumb: '主页', element: 'RedirectScopedHome' },
      { path: 'home', breadcrumb: '主页', element: 'PageHome' },
      { path: 'dashboard', breadcrumb: '主页', element: 'PageDashboard' },
      {
        path: 'about',
        breadcrumb: '相关',
        element: 'Outlet',
        children: [
          // index: true === path: '' 对应路径 /about | /about/
          { index: true, breadcrumb: '相关列表', element: 'PageAbout' },
          { path: 'add', breadcrumb: '相关新增', element: 'PageAboutAdd' },
          { path: 'edit/:id', breadcrumb: '相关编辑', element: 'PageAboutEdit' },
          { path: 'detail/:id', breadcrumb: '相关详情', element: 'PageAboutDetail' },
          { path: 'config', breadcrumb: '相关配置', element: 'PageAboutConfig' },
          { path: '*', element: 'RedirectScopedIndex' },
        ],
      },
      {
        path: 'system',
        breadcrumb: '系统',
        element: 'Outlet',
        children: [
          // 1. index、列表页都指向列表页，可通过两个路径访问
          { index: true, breadcrumb: '系统列表', element: 'PageSystemList' },
          { path: 'list', breadcrumb: '系统列表', element: 'PageSystemList' },
          { path: '404', breadcrumb: '相关404', element: 'Page404' },
          { path: ':type', breadcrumb: '系统1|2', element: 'PageSystemType' },
          { path: '*', element: 'RedirectParent404' },
        ],
      },
      {
        path: 'config',
        breadcrumb: '配置',
        element: 'PageConfig',
        children: [
          { path: 'modal', breadcrumb: '配置弹窗', element: 'ConfigModal' },
          // { path: 'modal', breadcrumb: '配置弹窗', element: 'ConfigModal' },
        ],
      },
      {
        path: 'chart',
        breadcrumb: '图表',
        element: 'Outlet',
        children: [
          // 2. index 重定向至列表页
          { index: true, breadcrumb: '图表列表', element: 'RedirectScopedList' },
          { path: 'list', breadcrumb: '图表列表', element: 'PageChartList' },
          { path: 'detail/:id', breadcrumb: '图表详情', element: 'PageChartDetail' },
        ],
      },
      { path: '*', element: 'RedirectRoot404' },
    ],
  },
]

export default plainRoutes