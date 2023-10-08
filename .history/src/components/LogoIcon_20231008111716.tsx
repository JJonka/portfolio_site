import styles from "./LogoIcon.module.scss"

interface Icon {
    logo: string
    altName: string
    logoText: string
}


const LogoIcon = (props: Icon) => {
    return (
        <div className={styles.logoBox}>
            <img src={props.logo}  alt={props.altName} className={styles.logo}></img>
            <div className={styles.logoText}>{props.logoText}</div>
        </div>
    )
}

export default LogoIcon