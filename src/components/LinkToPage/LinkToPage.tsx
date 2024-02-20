import { Link } from "react-router-dom";
import styles from "./LinkToPage.module.scss";

interface IProps {
  link: string;
  urlTo: string;
  linkTitle: string;
}

const LinkToPage = (props: IProps) => (
  <div>
    <Link
      to={props.link}
      className={document.URL == props.urlTo ? styles.active : styles.link}
      data-text={props.linkTitle}
    >
      {props.linkTitle}
    </Link>
  </div>
);

export default LinkToPage;
