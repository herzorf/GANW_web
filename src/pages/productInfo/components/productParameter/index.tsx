import { Descriptions } from "antd"
import styles from "./index.module.scss"
interface PropsType {
    content?: string
}

const ProductParameter = ({ content }: PropsType) => {
    return (
        <div className={styles.wrapper}>
            <Descriptions column={1} bordered>
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>

            </Descriptions>
        </div>
    )
}
export default ProductParameter