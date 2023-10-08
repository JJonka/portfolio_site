import styles from "./LogoIcon.module.scss"

interface Icon {
    logo: string
    logoText: string
}


const LogoIcon = (props: Icon) => {
    return (
        <div className={styles.logoBox}>
            <ReactSVG src={props.logo} className={styles.logo} />
            <div className={styles.logoText}>{props.logoText}</div>
        </div>
    )
}

export default LogoIcon