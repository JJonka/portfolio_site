import styles from "./EndOfSection.module.scss"
import { ReactSVG } from "react-svg";

interface Star {
    height?: string
    width?: string
}



const EndOfSection = (props) => {
    return (
        <ReactSVG src="src\assets\star.svg"  className={styles.endOfSection} height={props.height} width={props.width}/>
    )
}

export default EndOfSection