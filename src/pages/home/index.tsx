import { Card, Col, Row } from "antd"
import { Link } from "react-router-dom"
import { proInfo, useSearchStore } from "./store"
import Meta from "antd/es/card/Meta"
import test from "../../assets/test.png"
import { useEffect } from "react"
const Home = () => {

    const bears = useSearchStore(state => state.data)
    const fetch = useSearchStore(state => state.fetch)

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div >
            <Row style={{ marginTop: "16px" }}>
                <Col span={20} offset={2}>
                    <Row gutter={16}>
                        {bears?.length !== 0 && bears.map((item: proInfo) => {
                            return (
                                <Col span={6} style={{ marginBottom: "24px" }} key={item.proId} >
                                    <Link to={`/productInfo/${item.proId}`} style={{ display: 'inline-block' }} >

                                        <Card
                                            hoverable
                                            style={{ width: 250 }}
                                            cover={<img style={{ maxHeight: "230px", minHeight: "220px" }} alt="图片" src={item.logoImg} />}
                                        >
                                            <Meta
                                                title={<span style={{ fontSize: "12px" }}>{item.proName}</span>}
                                                description={<div>
                                                    <p>{item.shopName}</p>
                                                    <p>
                                                        <s>{item.marketPrice}</s> &nbsp;
                                                        <span>{item.salesPrice}</span>
                                                    </p>
                                                    <p>商品编号：{item.proId}</p>
                                                </div>}
                                            />
                                        </Card>
                                    </Link>

                                </Col>

                            )
                        })}
                    </Row>
                </Col>
            </Row >
        </div>
    )
}

export default Home