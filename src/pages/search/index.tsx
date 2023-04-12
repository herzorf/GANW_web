import { Card, Carousel, Col, Form, Input, Menu, MenuProps, Row, Space } from "antd"
import styles from "./index.module.scss"
import classItem from "./classItem";
import Meta from "antd/es/card/Meta";
import useSearchStore, { proInfo } from "./store";
import { useEffect } from "react";
import test from "../../assets/test.png"
import carouselImage1 from "../../assets/carousel/image1.jpeg"
import carouselImage2 from "../../assets/carousel/image2.jpeg"
import carouselImage3 from "../../assets/carousel/image3.jpeg"
import carouselImage4 from "../../assets/carousel/image4.jpeg"
import carouselImage5 from "../../assets/carousel/image5.jpeg"
import carouselImage6 from "../../assets/carousel/image6.jpeg"
const { Search } = Input;
const SearchPage = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        const { productInfo } = form.getFieldsValue()
        fetch({ proName: productInfo })
    };
    const onClick: MenuProps['onClick'] = (e) => {
        fetch({ secondSortName: e.key })

    };

    const bears = useSearchStore(state => state.proInfo)
    const fetch = useSearchStore(state => state.fetch)
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            <Row>
                <Col span={16} offset={4}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="productInfo"
                            rules={[{ required: true, message: "请输入要查询的车辆信息" }]}
                        >
                            <Search
                                placeholder="请输入查询的车辆信息"
                                allowClear
                                enterButton="搜索"
                                size="large"
                                onSearch={form.submit}
                            />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2}>
                    <div className={styles.centerWrapper}>
                        <Menu onClick={onClick} className={styles.menu} style={{ width: '20%' }} mode="vertical" items={classItem} />
                        <div className={styles.carousel}>
                            <Carousel autoplay dots={{ className: "dot" }} >
                                <img src={carouselImage1} alt="" />
                                <img src={carouselImage2} alt="" />
                                <img src={carouselImage3} alt="" />
                                <img src={carouselImage4} alt="" />
                                <img src={carouselImage5} alt="" />
                                <img src={carouselImage6} alt="" />
                            </Carousel>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row style={{ marginTop: "16px" }}>
                <Col span={20} offset={2}>
                    <Row gutter={16}>
                        {bears?.length !== 0 && bears.map((item: proInfo) => {
                            return (
                                <Col span={6} key={item.proId} style={{ marginBottom: "24px" }}>
                                    <Card
                                        hoverable
                                        style={{ width: 220 }}
                                        cover={<img alt="test" src={test} />}
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
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default SearchPage