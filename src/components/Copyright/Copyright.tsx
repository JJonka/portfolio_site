import styles from "./Copyright.module.scss";

const Copyright = () => {
  return (
    <div data-testid={"copyright"} className={styles.copyright}>
      © 2023 Joanna Jurasz
    </div>
  );
};

export default Copyright;
