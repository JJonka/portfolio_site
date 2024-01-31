import styles from "./Project.module.scss";

interface Content {
  children: JSX.Element | JSX.Element[] | string;
}

const Project = (props: Content) => {
  return <div className={styles.project}>{props.children}</div>;
};

export default Project;
