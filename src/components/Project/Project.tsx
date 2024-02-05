import styles from "./Project.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}

const Project = (props: IProps) => (
  <div className={styles.project}>{props.children}</div>
);

export default Project;
