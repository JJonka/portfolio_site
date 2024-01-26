import styles from "./Card.module.scss"

interface Content {
    children: any
}

const Card = (props: Content) => {
    return(
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default Card