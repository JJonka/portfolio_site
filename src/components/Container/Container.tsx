import styles from "./Container.module.scss";

interface Content {
  children: JSX.Element | JSX.Element[] | string;
  page?: string;
}

const Container = (props: Content) => {
  return <div className={styles[`${props.page}`]}>{props.children}</div>;
};

export default Container;
