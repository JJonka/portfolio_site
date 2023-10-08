import Menu from "../components/Menu";
import styles from "./Work.module.scss";
import { ReactSVG } from "react-svg";



const Work = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Technologies I work with</h1>
                <div className={styles.logos}>
                    <ReactSVG src="src\assets\techLogos\css.svg" className={styles.logo} />
                    <ReactSVG src="icon.svg" />
                    <ReactSVG src="icon.svg" />
                    <ReactSVG src="icon.svg" />
                    <ReactSVG src="icon.svg" />
                    <ReactSVG src="icon.svg" />
                    <ReactSVG src="icon.svg" />
                    <ReactSVG src="icon.svg" />
                    <ReactSVG src="icon.svg" />
                </div>
                
            </div>
        </div>
    )
};

export default Work;