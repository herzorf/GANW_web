import styles from "./index.module.scss"
interface PropsType {
    children: string
}

const Red = (props: PropsType) => {
    return <span className={styles.wrapper}>{props.children}</span>
}

export default Red