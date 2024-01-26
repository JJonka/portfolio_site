import styles from "./EndOfSection.module.scss";
import { ReactSVG } from "react-svg";

const EndOfSection = () => {
  return (
    <ReactSVG
      src="/assets/star.svg"
      data-testid={"endOfSection"}
      className={styles.endOfSection}
    />
  );
};

export default EndOfSection;
