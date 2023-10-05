import Menu from "../components/Menu";
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Let's stay in touch!</h1>
                <div className={styles.logos}>
                    <a href="https://www.linkedin.com/in/joanna-jurasz/" target="_blank">
                        <div className={styles.logoBox}>
                            <img src="/src/assets/linkedin_logo.svg"  alt="linkedin_logo" className={styles.logo}></img>
                            <div className={styles.logoText}>in/joanna-jurasz/</div>
                        </div>
                    </a>
                    <div className={styles.logoBox}>
                        <img src="/src/assets/mail_logo.svg" alt="mail_logo" className={styles.logo}></img>
                        <div className={styles.logoText}>joanna.jurasz21@gmail.com</div>
                    </div>
                    <a href="https://github.com/JJonka" target="_blank">
                        <div className={styles.logoBox}>
                            <img src="/src/assets/github_logo.svg" alt="github_logo" className={styles.logo}></img>
                            <div className={styles.logoText}>github.com/JJonka</div>
                        </div>
                    </a>
                    
                </div>
                <img src="/src/assets/end_of_section.svg" className={styles.endOfSection}></img>
            </div>
        </div>
    )
};

export default Contact;