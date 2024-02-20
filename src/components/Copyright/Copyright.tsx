import styles from "./Copyright.module.scss";

const Copyright = () => {
  const date = Date.now();
  const year = new Date(date).getFullYear();
  return (
    <div data-testid={"copyright"} className={styles.copyright}>
      © {year} Joanna Jurasz
    </div>
  );
};

export default Copyright;
