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
                    <object type="image/svg+xml" data="src\assets\techLogos\css.svg" className={styles.logo} />
                    <object type="image/svg+xml" data="src\assets\techLogos\js.svg" className={styles.logo} />
                    <object type="image/svg+xml" data="src\assets\techLogos\ts.svg" className={styles.logo} />
                    <object type="image/svg+xml" data="src\assets\techLogos\sass.svg" className={styles.logo} />
                    <object type="image/svg+xml" data="src\assets\techLogos\npm.svg" className={styles.logo} />
                    <object type="image/svg+xml" data="src\assets\techLogos\yarn.svg" className={styles.logo} />
                    <object data="src\assets\techLogos\vsc.svg" className={styles.logo} />
                    <object data="src\assets\techLogos\linux.svg" className={styles.logo} width="250px" />
                    <object data="src\assets\techLogos\windows.svg" className={styles.logo} />
                </div>
                
            </div>
        </div>
    )
};

export default Work;