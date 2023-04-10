import { Card, Col, Form, Input, Menu, MenuProps, Row, Space } from "antd"
import styles from "./index.module.scss"
import classItem from "./classItem";
import Meta from "antd/es/card/Meta";
import useSearchStore, { proInfo } from "./store";
import { useEffect } from "react";
import test from "../../assets/test.png"
const { Search } = Input;
const SearchPage = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        console.log(form.getFieldsValue());
    };
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
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
                            name="info"
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
                <Col span={16} offset={4}>
                    <div className={styles.centerWrapper}>
                        <Menu onClick={onClick} className={styles.menu} style={{ width: 256 }} mode="vertical" items={classItem} />
                        <img src={test} alt="" />
                    </div>
                </Col>
            </Row>
            <Row style={{ marginTop: "16px" }}>
                <Col span={16} offset={4}>
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