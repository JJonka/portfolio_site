import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface IProps {
  link: string;
  children: string;
}
const Button = (props: IProps) => (
  <Link to={props.link} className={styles.button}>
    {props.children}
  </Link>
);

export default Button;
