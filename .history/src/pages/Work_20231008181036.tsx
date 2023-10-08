import Menu from "../components/Menu";
import styles from "./Work.module.scss"

const Work = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Technologies I work with</h1>
                <div className={styles.workMap}>
                    <object data="src\assets\techLogos\html.svg" className="logo" />
                    <object data="src\assets\techLogos\css.svg" className="logo" />
                    <object data="src\assets\techLogos\js.svg" className="logo" />
                    <object data="src\assets\techLogos\ts.svg" className="logo" />
                    <object data="src\assets\techLogos\sass.svg" className="logo" />
                    <object data="src\assets\techLogos\npm.svg" className="logo" />
                    <object data="src\assets\techLogos\yarn.svg" className="logo" />
                    <object data="src\assets\techLogos\vsc.svg" className="logo" />
                    <object data="src\assets\techLogos\linux.svg" className="logo" width="250px" />
                    <object data="src\assets\techLogos\windows.svg" className="logo" />

                </div>
                
            </div>
        </div>
    )
};

export default Work;