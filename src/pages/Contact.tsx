import Menu from "../components/Menu";
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Let's stay in touch!</h1>
                <img src="/src/assets/linkedin_logo.svg"></img>
            </div>
        </div>
    )
};

export default Contact;