import Menu from "../components/Menu";
import styles from "./About.module.scss"

const About = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>    
            <div className={styles.container}>
                <img src="/src/assets/jj.png" className={styles.image} alt="Jo_pic"></img>
                <div className={styles.text}>
                    <h1 className={styles.header}>That's me.</h1>
                    <div className={styles.box}>
                        <p className={styles.aboutMe}>&emsp; Now, I am determined to find a&nbsp;job where I could try out my programming skills and learn much more in practice.</p>
                    </div>
                </div>
            </div>
            <img src="/src/assets/end_of_section.svg" className={styles.endOfSection}></img>
        </div>
    )
};

export default About;