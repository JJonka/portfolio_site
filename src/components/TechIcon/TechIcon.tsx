import { ReactSVG } from "react-svg"
import styles from "./TechIcon.module.scss"

interface Icon {
    icon: string
    tooltipText?: string
}

const TechIcon = (props: Icon) => {
    return (
        <div className={styles.tooltip}>
            <ReactSVG src={props.icon} className={styles.logo}/>
            <span className={styles.tooltiptext}>{props.tooltipText}</span>
        </div>
    )
}
export default TechIcon