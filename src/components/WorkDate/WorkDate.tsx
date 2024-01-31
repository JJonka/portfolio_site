import styles from "./WorkDate.module.scss";

interface Content {
  children: string;
}

const WorkDate = (props: Content) => {
  return (
    <div className={styles.date}>
      <i>{props.children}</i>
    </div>
  );
};

export default WorkDate;
