import Menu from "../components/Menu";
import styles from "./About.module.scss"
import EndOfSection from "../components/EndOfSection";

const About = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>    
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.header}>That's me.</h1>
                    <div className={styles.box}>
                        <p className={styles.aboutMe}>&emsp;If I had to describe myself in a few words, I&nbsp;would say that I am reliable, 
                            curiose and always ready to learn something new. I find pleasure in designing and creating things. Nowadays, 
                            I spend time making web applications and improving my programming skills. Besides that, in my spare time 
                            I like to go swimming, jogging or hiking with my friends. 
                        </p>
                    </div>
                </div>
                <img src="/src/assets/jj.svg" className={styles.image} alt="Jo_pic"></img>
            </div>
            <EndOfSection></EndOfSection>
        </div>
    )
};

export default About;