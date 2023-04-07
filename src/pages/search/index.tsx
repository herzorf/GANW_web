import { Col, Form, Input, Menu, MenuProps, Row, Space } from "antd"
import styles from "./index.module.scss"
const { Search } = Input;
const SearchPage = () => {
    const [form] = Form.useForm();
    const onFinish = () => {
        console.log(form.getFieldsValue());
    };
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };
    const classItem = [
        {
            label: '警用通信装备',
            key: '1',
            children: [
                {
                    label: '指挥通信',
                    key: '1-1',
                },
            ],
        },
    ];

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

        </div>
    )
}

export default SearchPage