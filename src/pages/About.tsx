import Menu from "../components/Menu";
import styles from "./About.module.scss"

const About = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>    
            <h1 className={styles.header}>This is me.</h1>
        </div>
    )
};

export default About;