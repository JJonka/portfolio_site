import styles from "./Header.module.scss";

interface Content {
  children: JSX.Element | JSX.Element[] | string;
  page?: string;
}

const Header = (props: Content) => {
  return <div className={styles[`${props.page}`]}>{props.children}</div>;
};

export default Header;
