import styles from "./LogoIcon.module.scss";
import { ReactSVG } from "react-svg";

interface IProps {
  logo: string;
  logoText: string;
}

const LogoIcon = (props: IProps) => (
  <div className={styles.logoBox}>
    <ReactSVG src={props.logo} className={styles.logo} />
    <div className={styles.logoText}>{props.logoText}</div>
  </div>
);

export default LogoIcon;
