import { Anchor, Col, Descriptions, Row } from "antd"
import styles from "./index.module.scss"
import { inforMap } from "../../inforMap"
import http from "@/http"
import { useLayoutEffect, useState } from "react"
interface PropsType {
    proId: any
}

const ProductParameter = ({ proId }: PropsType) => {
    const randerInfo = (value: string): string => {
        value = value.toString()
        value = value.replace(/#0#/g, "标配")
        value = value.replace(/#1#/g, "选配")
        value = value.replace(/#2#/g, "无")
        return value
    }
    const [baseInfo, setBaseInfo] = useState<any>({})
    const [engineInfo, setEngineInfo] = useState<any>({})
    const [carBody, setCarBody] = useState<any>({})
    useLayoutEffect(() => {
        http(`/system/carinfo/${proId}`).then((res) => {
            setBaseInfo(res.data.data)
        })
        http(`/system/engineInfo/${proId}`).then((res) => {
            setEngineInfo(res.data.data)
        })
        http(`/system/carbody/${proId}`).then((res) => {
            setCarBody(res.data.data)
        })
    }, [proId])
    return (
        <div className={styles.wrapper}>

            <Descriptions column={1} bordered title="车辆基本信息">
                {baseInfo && Object.keys(baseInfo).map((key, index) => {
                    const itemName = inforMap[key as keyof typeof inforMap]
                    if (baseInfo[key] !== null && itemName !== undefined) {
                        return (
                            <Descriptions.Item key={key} label={itemName}>{randerInfo(baseInfo[key])}</Descriptions.Item>
                        )
                    }
                })
                }
            </Descriptions>
            <Descriptions column={1} bordered title="发动机">
                {engineInfo && Object.keys(engineInfo).map((key, index) => {
                    const itemName = inforMap[key as keyof typeof inforMap]
                    if (engineInfo[key] !== null && itemName !== undefined) {
                        return (
                            <Descriptions.Item key={key} label={itemName}>{randerInfo(engineInfo[key])}</Descriptions.Item>
                        )
                    }
                })
                }
            </Descriptions>
            <Descriptions column={1} bordered title="车身">
                {carBody && Object.keys(carBody).map((key, index) => {
                    const itemName = inforMap[key as keyof typeof inforMap]
                    if (carBody[key] !== null && itemName !== undefined) {
                        return (
                            <Descriptions.Item key={key} label={itemName}>{randerInfo(carBody[key])}</Descriptions.Item>
                        )
                    }
                })
                }
            </Descriptions>

        </div>
    )
}
export default ProductParameter