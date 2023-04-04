import React, {useState} from 'react';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {useLocation, useNavigate} from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('栏目1', '1', <PieChartOutlined />),
//   getItem('栏目2', '2', <DesktopOutlined />),
//   getItem('用户', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('关于', '/about', <FileOutlined />),
// ];

const items: MenuItem[] = [
  {
    label: '首页',
    key: '/index',
    icon: <PieChartOutlined/>,
  },
  {
    label: '栏目',
    key: 'pages',
    icon: <TeamOutlined/>,
    children: [
      {
        label: '菜单一',
        key: '/pages/menuOne',
        icon: <DesktopOutlined/>,
      },
      {
        label: '菜单二',
        key: '/pages/menuTwo',
        icon: <DesktopOutlined/>,
      }
    ]
  },
  {
    label: '关于',
    key: '/about',
    icon: <FileOutlined/>,
  }
]

const Comp: React.FC = () => {
  const currentRoute = useLocation().pathname
  const currentMenu: string = currentRoute.split('/')[1]
  console.log(currentMenu)
  const [openKeys, setOpenkeys] = useState([currentMenu]);
  const navigateTo = useNavigate()
  const menuClick = (e: { key: string }) => {
    // 点击跳转到对应的路由 编程式导航
    navigateTo(e.key)
  }

  const onMenuClick = (keys: string[]) => {
    console.log(keys)
    setOpenkeys([keys[keys.length - 1]])
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={onMenuClick}
      openKeys={openKeys}
    />
  )
}

export default Comp;
