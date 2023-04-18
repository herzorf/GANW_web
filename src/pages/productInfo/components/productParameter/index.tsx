import { Descriptions } from "antd"
import styles from "./index.module.scss"
import { inforMap } from "../../inforMap"
interface PropsType {
    productInfoParameter: any
}

const ProductParameter = ({ productInfoParameter }: PropsType) => {
    return (
        <div className={styles.wrapper}>
            <Descriptions column={1} bordered>
                {productInfoParameter && Object.keys(productInfoParameter).map((key, index) => {
                    const itemName = inforMap[key as keyof typeof inforMap]
                    if (productInfoParameter[key] !== null && itemName !== undefined) {
                        return (
                            <Descriptions.Item key={key} label={itemName}>{productInfoParameter[key]}</Descriptions.Item>
                        )
                    }
                })
                }
            </Descriptions>
        </div>
    )
}
export default ProductParameter