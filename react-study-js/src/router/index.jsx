import React from 'react'
import HookStudy from '../pages/HookStudy'
import Home from '../pages/Home'

const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/hookStudy",
    element: <HookStudy/>
  }
]

export default routes
