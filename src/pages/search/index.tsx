import { Card, Col, Form, Input, Menu, MenuProps, Row, Space } from "antd"
import styles from "./index.module.scss"
import classItem from "./classItem";
import Meta from "antd/es/card/Meta";
import data from "./data";
const { Search } = Input;
const SearchPage = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        console.log(form.getFieldsValue());
    };
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

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
                                enterButton="Search"
                                size="large"
                                onSearch={form.submit}
                            />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col span={16} offset={4}>
                    <Menu onClick={onClick} className={styles.menu} style={{ width: 256 }} mode="vertical" items={classItem} />
                </Col>
            </Row>
            <Row style={{ marginTop: "16px" }}>
                <Col span={16} offset={4}>
                    <Row gutter={16}>
                        {data.map(item => {
                            return (
                                <Col span={6} key={item.productId} style={{ marginBottom: "24px" }}>
                                    <Card
                                        hoverable
                                        style={{ width: 220 }}
                                        cover={<img alt="example" src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1037811875/O1CN01hfDzc01PinRRNxL3y_!!1037811875.jpg_460x460Q90.jpg_.webp" />}
                                    >
                                        <Meta
                                            title={<p>{item.productName}</p>}
                                            description={item.productType}
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