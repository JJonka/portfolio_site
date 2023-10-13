import Menu from "../components/Menu";
import styles from "./About.module.scss"
import Box from "../components/Box";
import Card from "../components/Card";
import Transitions from "../components/Transitions";
import Copyright from "../components/Copyright";

const About = () => {
    return (
            <Card>
                <Menu></Menu>    
                <Transitions>
                    <div className={styles.container}>
                        <img src="/assets/jj.svg" className={styles.image} alt="Jo_pic"></img>
                        <div className={styles.text}>
                            <h1 className={styles.header}>That's me.</h1>
                            <Box>
                                &emsp;If I had to describe myself in a few words, I&nbsp;would say that I am reliable, 
                                curious about the&nbsp;world and always ready to learn something new. I&nbsp;find pleasure in designing and creating things. Nowadays, 
                                I&nbsp;spend time making web applications and improving my programming skills. Besides that, in my spare time 
                                I like to go swimming, jogging or hiking with my friends.
                            </Box>
                        </div>
                        
                    </div>
                <Copyright></Copyright>
                </Transitions>
            </Card>
    )
};

export default About;