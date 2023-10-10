import Menu from "../components/Menu";
import styles from "./Contact.module.scss"
import EndOfSection from "../components/EndOfSection";
import LogoIcon from "../components/LogoIcon";
import Card from "../components/Card";


const Contact = () => {
    return (
        <Card>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Let's stay in touch!</h1>
                <div className={styles.logos}>
                    <a href="https://www.linkedin.com/in/joanna-jurasz/" target="_blank">
                        <LogoIcon
                            logo = {"src/assets/linkedin_logo.svg"}
                            logoText ={"in/joanna-jurasz/"}
                        ></LogoIcon>
                    </a>
                    <a href="mailto:joanna.jurasz21@gmail.com">
                        <LogoIcon
                            logo = {"src/assets/mail_logo.svg"}
                            logoText ={"joanna.jurasz21@gmail.com"}
                        ></LogoIcon>
                    </a>
                    <a href="https://github.com/JJonka" target="_blank">
                        <LogoIcon
                            logo = {"src/assets/github_logo.svg"}
                            logoText ={"github.com/JJonka"}
                        ></LogoIcon>
                    </a>                    
                </div>
                <EndOfSection></EndOfSection>
            </div>
        </Card>
    )
};

export default Contact;