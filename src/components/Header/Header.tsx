import styles from "./Header.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  page?: string;
}

const Header = (props: IProps) => (
  <div className={styles[`${props.page}`]}>{props.children}</div>
);

export default Header;
