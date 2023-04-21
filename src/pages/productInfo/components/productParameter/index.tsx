import { Anchor, Col, Descriptions, Row } from "antd"
import styles from "./index.module.scss"
import { inforMap } from "../../inforMap"
import { useLocation, useRoutes } from "react-router-dom"
interface PropsType {
    productInfoParameter: any
}

const ProductParameter = ({ productInfoParameter }: PropsType) => {
    const { pathname } = useLocation()
    return (
        <div className={styles.wrapper}>
            {/* <Descriptions column={1} bordered>
                {productInfoParameter && Object.keys(productInfoParameter).map((key, index) => {
                    const itemName = inforMap[key as keyof typeof inforMap]
                    if (productInfoParameter[key] !== null && itemName !== undefined) {
                        return (
                            <Descriptions.Item key={key} label={itemName}>{productInfoParameter[key]}</Descriptions.Item>
                        )
                    }
                })
                }
            </Descriptions> */}
            <Row>
                <Anchor
                    style={{ border: "1px solid red" }}
                    items={[
                        {
                            key: 'part-1',
                            href: '#part-1',
                            title: 'part1'
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: 'part2'
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'part3',
                        },
                    ]}
                />

                <Col span={16}>
                    <div id="part-1" style={{ minHeight: '100vh', background: 'rgba(255,0,0,0.02)' }} />
                    <div id="part-2" style={{ minHeight: '100vh', background: 'rgba(0,255,0,0.02)' }} />
                    <div id="part-3" style={{ minHeight: '100vh', background: 'rgba(0,0,255,0.02)' }} />
                </Col>
            </Row>
        </div>
    )
}
export default ProductParameter