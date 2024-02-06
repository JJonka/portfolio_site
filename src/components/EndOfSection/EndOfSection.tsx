import styles from "./EndOfSection.module.scss";
import { ReactSVG } from "react-svg";

const EndOfSection = () => (
  <ReactSVG src="/assets/dots.svg" className={styles.endOfSection} />
);

export default EndOfSection;
