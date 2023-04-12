import { Badge, Card, Col, Descriptions, Row, Space, Tabs, TabsProps } from "antd"
import styles from "./index.module.scss"
import { Image } from 'antd';
import tesla from "../../assets/carousel/tesla.png"
const ProductInfo = () => {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `商品介绍`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: '2',
            label: `包装与规格`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `服务保障`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `成交记录`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '5',
            label: `评价记录`,
            children: `Content of Tab Pane 3`,
        },
    ];
    const onChange = (key: string) => {
        console.log(key);
    };
    return (
        <div className={styles.wrapper}>
            <Space direction="vertical" size="large"  >
                <Row>
                    <Col span={6} offset={2}>
                        <Image
                            width={300}
                            src={tesla}
                        />
                    </Col>
                    <Col span={10}>
                        <Descriptions title="郑州日产汽车 纳瓦拉 四驱 汽油自动 ZN1035UCK6C 尊贵型" >
                            <Descriptions.Item label="商品报价">150000</Descriptions.Item>
                            <Descriptions.Item label="市场价格">120000</Descriptions.Item>
                            <Descriptions.Item label="折扣率">12%</Descriptions.Item>
                            <Descriptions.Item label="近三个月的成交均价">暂无</Descriptions.Item>
                            <Descriptions.Item label="库  存">
                                50
                            </Descriptions.Item>
                            <Descriptions.Item label="结算方式">支付宝</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={4}>
                        <Card title="郑州日产汽车销售有限公司" bordered={false} style={{ width: 300 }}>
                            <p> 联系人姓名：<span>景向阳</span> </p>
                            <p> 联系电话<span>15837116369</span> </p>
                            <p>描述相符度：暂无 </p>
                            <p> 服 务 态 度 ：暂无 </p>
                            <p>发 货 速 度 ：暂无</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={2}>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </Col>
                </Row>
            </Space>
        </div>


    )
}

export default ProductInfo