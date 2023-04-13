import { Badge, Card, Col, Descriptions, Row, Space, Tabs, TabsProps } from "antd"
import styles from "./index.module.scss"
import { Image } from 'antd';
import tesla from "../../assets/carousel/tesla.png"
import Red from "../../components/Red";
import { useParams, } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import ProductIntroduce from "./components/productIntroduce";
import PackagingAndSpecification from "./components/PackagingAndSpecification";
import Serve from "./components/serve";
import http from "../../http";
const ProductInfo = () => {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `商品介绍`,
            children: <ProductIntroduce />,
        },
        {
            key: '2',
            label: `包装与规格`,
            children: <PackagingAndSpecification />,
        },
        {
            key: '3',
            label: `服务保障`,
            children: <Serve />,
        },
    ];
    const { proId } = useParams()
    // useEffect(() => {
    //     http("/system/staff/list", { params: {} })
    // }, [])
    useLayoutEffect(() => {
        console.log(proId)
    }, [])
    return (
        <div className={styles.wrapper}>
            <Space direction="vertical" size="large"  >
                <Row>
                    <Col span={5} offset={2}>
                        <Image
                            width={300}
                            src={tesla}
                        />
                    </Col>
                    <Col flex={0} span={10}>
                        <Descriptions size="small" column={1} labelStyle={{ fontSize: "18px", width: "100px", textAlign: "right", display: "inline-block" }} contentStyle={{ fontSize: "18px" }} title={<h2 className='overflowTest' style={{ maxWidth: "700px" }}>郑州日产汽车 纳瓦拉 四驱 汽油自动 ZN1035UCK6C 尊贵型</h2>} >
                            <Descriptions.Item label="商品报价">150000</Descriptions.Item>
                            <Descriptions.Item label="市场价格">120000</Descriptions.Item>
                            <Descriptions.Item label="折扣率"> <Red>12%</Red></Descriptions.Item>
                            <Descriptions.Item label="库存"> 50 </Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={6}>
                        <Card title="郑州日产汽车销售有限公司" bordered={false} style={{ width: 300 }}>
                            <p> 联系人姓名：<span>景向阳</span> </p>
                            <p> 联系电话：<span>15837116369</span> </p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={2}>
                        <Tabs defaultActiveKey="1" items={items} />
                    </Col>
                </Row>
            </Space>
        </div>


    )
}

export default ProductInfo