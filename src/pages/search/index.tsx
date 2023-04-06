import { Button, Col, Form, Input, Row, Space } from "antd"
const { Search } = Input;
const SearchPage = () => {
    const [form] = Form.useForm();
    const onFinish = () => {
        console.log(form.getFieldsValue());
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

        </div>
    )
}

export default SearchPage