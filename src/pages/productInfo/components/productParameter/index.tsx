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
    const [chassisSteering, setChassisSteering] = useState<any>({})
    const [wheelBraking, setWheelBraking] = useState<any>({})
    const [accessories, setAccessories] = useState<any>({})
    const [lightConfig, setLightConfig] = useState<any>({})
    useLayoutEffect(() => {
        // 获取基本信息
        http(`/system/carinfo/${proId}`).then((res) => {
            setBaseInfo(res.data.data)
        })
        // 获取发动机信息
        http(`/system/engineInfo/${proId}`).then((res) => {
            setEngineInfo(res.data.data)
        })
        // 获取车身信息
        http(`/system/carbody/${proId}`).then((res) => {
            setCarBody(res.data.data)
        })
        // 获取变速箱和底盘信息
        http(`/system/chassissteerIng/${proId}`).then((res) => {
            setChassisSteering(res.data.data)
        })
        // 获取车轮制动信息
        http(`/system/wheelbrakingInfo/${proId}`).then((res) => {
            setWheelBraking(res.data.data)
        })
        // 获取内部配置信息
        http(`/system/accessories/${proId}`).then((res) => {
            setAccessories(res.data.data)
        })
        // 获取灯光配置信息
        http(`/system/lightConfig/${proId}`).then((res) => {
            setLightConfig(res.data.data)
        })
    }, [proId])
    const map = {
        "车辆基本信息": baseInfo,
        "发动机": engineInfo,
        "车身": carBody,
        "变速箱和底盘": chassisSteering,
        "车轮制动": wheelBraking,
        "内部配置": accessories,
        "灯光配置": lightConfig,
    }
    return (
        <div className={styles.wrapper}>
            {Object.keys(map).map((key, index) => {
                const item = map[key as keyof typeof map]
                if (item) {
                    return (
                        <Descriptions column={1} bordered title={key}>
                            {Object.keys(item).map((key, index) => {
                                const itemName = inforMap[key as keyof typeof inforMap]
                                if (item[key] !== null && itemName !== undefined) {
                                    return (
                                        <Descriptions.Item key={key} label={itemName}>{randerInfo(item[key])}</Descriptions.Item>
                                    )
                                }
                            })
                            }
                        </Descriptions>
                    )
                }
            })
            }
        </div>
    )
}
export default ProductParameter