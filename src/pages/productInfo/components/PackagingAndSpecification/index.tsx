import { Descriptions, Divider } from "antd";
import Table, { ColumnsType } from "antd/es/table";

const PackagingAndSpecification = () => {

    return (
        <div>
            <Descriptions
                title="车辆参数"
                bordered
            >
                <Descriptions.Item label="排量(以L或T结尾，例如：1.6L，2.0T)">2.0T</Descriptions.Item>
                <Descriptions.Item label="车身颜色(该车型的可选颜色)	">白、蓝、灰</Descriptions.Item>
                <Descriptions.Item label="载客人数">7</Descriptions.Item>
                <Descriptions.Item label="产地">沧州</Descriptions.Item>
                <Descriptions.Item label="生产企业名称">北京现代</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default PackagingAndSpecification