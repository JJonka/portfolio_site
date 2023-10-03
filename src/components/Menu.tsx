import { Link} from "react-router-dom";
import styles from "./Menu.module.scss"

const Menu = () => {
    
    return (
        <div className={styles.menu}>
            <Link to='/' className={document.URL == "http://localhost:5173/" ? styles.active : styles.link}>Home </Link>
            <Link to='/about' className={document.URL == "http://localhost:5173/about" ? styles.active : styles.link}> About </Link>
            <Link to='/contact' className={document.URL == "http://localhost:5173/contact" ? styles.active : styles.link}> Contact</Link>
        </div>
    )
};

export default Menu;