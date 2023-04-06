import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className={styles.siteLayoutContent} style={{ background: colorBgContainer, height: "100%" }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App
