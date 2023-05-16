import { Descriptions } from "antd"
import { Image } from 'antd';
import styles from "./index.module.scss"
import { useLayoutEffect, useState } from "react";
import http from "@/http";
interface PropsType {
    proId: string
}

const ProductIntroduce = ({ proId }: PropsType) => {
    const [productImage, setProductImage] = useState<any>([])
    useLayoutEffect(() => {
        http("/system/img/list", { params: { proId: proId } }).then((res) => {
            setProductImage(res.data.rows)
        })
    }, [proId])
    return (
        <Image.PreviewGroup
        >
            <div className={styles.imageWrapper}>
                {productImage && productImage.map((item: any) => {
                    return <Image width={1000} style={{ marginBottom: "36px" }} src={item.proImg} />
                })}

            </div>

        </Image.PreviewGroup>
    )
}

export default ProductIntroduce