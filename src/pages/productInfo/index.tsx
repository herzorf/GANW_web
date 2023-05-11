import { Badge, Card, Col, Descriptions, Row, Space, Tabs, TabsProps } from "antd"
import styles from "./index.module.scss"
import { Image } from 'antd';
import Red from "../../components/Red";
import { useParams, } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import ProductIntroduce from "./components/productImage";
import http from "../../http";
import ProductParameter from "./components/productParameter";
const ProductInfo = () => {

    const { proId } = useParams()
    const [productInfo, setProductInfo] = useState<any>({})
    const [staffInfo, setStaffInfo] = useState<any>({})
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `商品参数`,
            children: <ProductParameter proId={proId as string} />,
        },
        {
            key: '2',
            label: `商品图片`,
            children: <ProductIntroduce proId={proId as string} />,
        },
    ];

    useLayoutEffect(() => {
        http("/system/productinfo/list", { params: { proId: proId } }).then((res) => {
            const { shopName } = res.data.rows[0]
            http("/system/staff/list", { params: { distributorName: shopName } }).then((res) => {
                setStaffInfo(res.data.rows[0])
            })
            setProductInfo(res.data.rows[0])
        })


    }, [proId])
    return (
        <div className={styles.wrapper}>
            <Row>
                <Col span={5} offset={2}>
                    <Image
                        width={250}
                        src={productInfo.logoImg}
                    />
                </Col>
                <Col span={15}>
                    <Descriptions size="small" column={1} labelStyle={{ fontSize: "18px", width: "100px", textAlign: "right", display: "inline-block" }}
                        contentStyle={{ fontSize: "18px" }}
                        title={<h2 className='overflowTest'
                            style={{ maxWidth: "700px" }}>
                            {productInfo.proName}
                        </h2>} >
                        <Descriptions.Item label="商品报价">{productInfo.marketPrice}</Descriptions.Item>
                        <Descriptions.Item label="市场价格">{productInfo.salesPrice}</Descriptions.Item>
                        <Descriptions.Item label="折扣率"> <Red>{productInfo.discountRate}%</Red></Descriptions.Item>
                    </Descriptions>
                </Col>
                {/* <Col span={6}>
                    <Card title={staffInfo.distributorName} bordered={false} style={{ width: 300 }}>
                        <p> 联系人姓名：<span>{staffInfo.staffName}</span> </p>
                        <p> 联系电话：<span>{staffInfo.phone}</span> </p>
                    </Card>
                </Col> */}
            </Row>
            <Row>
                <Col span={22} offset={2}>
                    <Tabs defaultActiveKey="1" items={items} />
                </Col>
            </Row>
        </div>
    )
}

export default ProductInfo