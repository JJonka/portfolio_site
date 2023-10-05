import Menu from "../components/Menu";
import styles from "./Work.module.scss"

const Work = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Work history</h1>
                <div className={styles.workMap}>
                    <div className={styles.box}>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default Work;