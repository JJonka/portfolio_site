import styles from "./Item.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  page?: string;
}

const Item = (props: IProps) => (
  <div className={styles[`${props.page}`]}>{props.children}</div>
);

export default Item;
