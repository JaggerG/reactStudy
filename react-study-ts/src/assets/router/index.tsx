import React, {lazy} from 'react'
import Home from '@/assets/views/Home'

const About = lazy(() => import('@/assets/views/About'))
const MenuOne = lazy(() => import('@/assets/views/MenuOne'))
const MenuTwo = lazy(() => import('@/assets/views/MenuTwo'))
const PageOne = lazy(() => import('@/assets/views/PageOne'))

// 懒加载的模式外面取消套一层loading提示加载组件
const widthLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading</div>}>
    {comp}
  </React.Suspense>
)

const routes = [
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: 'index',
        element: widthLoadingComponent(<PageOne/>)
      },
      {
        path: 'pages/menuOne',
        element: widthLoadingComponent(<MenuOne/>)
      },
      {
        path: 'pages/menuTwo',
        element: widthLoadingComponent(<MenuTwo/>)
      },
      {
        path: 'about',
        element: widthLoadingComponent(<About/>)
      }
    ]
  },

]

export default routes
