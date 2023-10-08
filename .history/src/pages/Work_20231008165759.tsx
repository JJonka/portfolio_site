import Menu from "../components/Menu";
import styles from "./Work.module.scss"

const Work = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Technologies I work with</h1>
                <div className={styles.workMap}>
                    <object data="src\assets\techLogos\css.svg" className="logo" />
                </div>
                
            </div>
        </div>
    )
};

export default Work;