import Menu from "../components/Menu";
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <h1 className={styles.header}>Let's stay in touch!</h1>
        </div>
    )
};

export default Contact;