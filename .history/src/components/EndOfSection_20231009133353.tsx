import styles from "./EndOfSection.module.scss"
import { ReactSVG } from "react-svg";

interface Star {
    style?: React.CSSProperties
}



const EndOfSection = (props: Star) => {
    return (
        <ReactSVG src="src\assets\star.svg"  className={styles.endOfSection} style={props.style}/>
    )
}

export default EndOfSection