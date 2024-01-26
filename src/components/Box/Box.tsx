import styles from "./Box.module.scss"

interface BoxTexts {
    header?: string
    children: any
}
const Box = (props: BoxTexts) => {
    return (
        <div className={styles.box}>
            {props.header && <h1>{props.header}</h1>}
            <div className={styles.text}>{props.children}</div>
        </div>
    )
}

export default Box
