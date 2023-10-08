import Menu from "../components/Menu";
import styles from "./Work.module.scss"

const Work = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Technologies I work with</h1>
                <div className={styles.logos}>
                    <object type="image/svg+xml" data="src\assets\techLogos\html.svg" className={styles.logo} />
                </div>
                
            </div>
        </div>
    )
};

export default Work;