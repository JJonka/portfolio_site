import styles from "./WorkDate.module.scss";

interface IProps {
  children: string;
}

const WorkDate = (props: IProps) => (
  <div className={styles.date}>
    <i>{props.children}</i>
  </div>
);

export default WorkDate;
