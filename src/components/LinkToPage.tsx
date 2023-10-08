import { Link } from "react-router-dom";
import styles from "./LinkToPage.module.scss"

interface LinkTo  {
    link: string
    urlTo: string
    linkTitle: string
}

const LinkToPage = (props: LinkTo) => {
    return (
        <div>
            <Link to={props.link} className={document.URL == props.urlTo ? styles.active : styles.link}>{props.linkTitle} </Link>
        </div>
    )
}

export default LinkToPage