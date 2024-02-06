import styles from "./Container.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  page?: string;
}

const Container = (props: IProps) => (
  <div className={styles[`${props.page}`]}>{props.children}</div>
);

export default Container;
