import { Descriptions } from "antd"
import { Image } from 'antd';
import styles from "./index.module.scss"
interface PropsType {
    proId: string
}

const ProductIntroduce = ({ proId }: PropsType) => {
    return (
        <Image.PreviewGroup
        >
            <div className={styles.imageWrapper}>
                <Image
                    width={400}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <Image
                    width={400}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                />
            </div>

        </Image.PreviewGroup>
    )
}

export default ProductIntroduce