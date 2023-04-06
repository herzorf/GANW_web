import { Link, Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import { Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { navRoute } from '../router';
const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getMenu = (route: typeof navRoute) => {
    return route.map(item => {
      return {
        key: item.id,
        label: <Link to={item.path}> {item.name}</Link>
      }
    })

  }
  return (
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={getMenu(navRoute)}
        />
      </Header>
      <Content style={{ padding: '0 12px' }}>
        <div className={styles.siteLayoutContent} style={{ background: colorBgContainer, height: "100%" }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2023  警用装备采购中心</Footer>
    </Layout>
  );
};

export default App
