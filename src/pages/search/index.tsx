import { Col, Form, Input, Menu, MenuProps, Row, Space } from "antd"
import styles from "./index.module.scss"
import classItem from "./classItem";
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
            <Row>
                <Col span={16} offset={4}>

                </Col>
            </Row>

        </div>
    )
}

export default SearchPage