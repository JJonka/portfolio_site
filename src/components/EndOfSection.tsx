import styles from "./EndOfSection.module.scss"
import { ReactSVG } from "react-svg";




const EndOfSection = () => {
    return (
        <ReactSVG src="/star.svg"  className={styles.endOfSection} />
    )
}

export default EndOfSection