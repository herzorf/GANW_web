import { Link, Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { navRoute } from '../router';
const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getMenu = (route: typeof navRoute) => {
    return route.map(item => {
      return (<Menu.Item>
        <Link to={item.path}>
          {item.name}
        </Link>
      </Menu.Item>)
    })

  }
  return (
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          {getMenu(navRoute)}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className={styles.siteLayoutContent} style={{ background: colorBgContainer, height: "100%" }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App
