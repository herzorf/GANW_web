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

                <Col span={8}>
                    <Anchor

                        items={[
                            {
                                key: 'part-1',
                                href: `#${pathname}part-1`,
                                title: 'Part 1',
                            },
                            {
                                key: 'part-2',
                                href: `#${pathname}part-2`,
                                title: 'Part 2',
                            },
                            {
                                key: 'part-3',
                                href: `#${pathname}part-3`,
                                title: 'Part 3',
                            },
                        ]}
                    />
                </Col>
                <Col span={16}>
                    <div id={`#${pathname}part-1`} style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
                    <div id={`#${pathname}part-2`} style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
                    <div id={`#${pathname}part-3`} style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
                </Col>
            </Row>
        </div>
    )
}
export default ProductParameter