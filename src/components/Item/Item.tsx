import styles from "./Item.module.scss";

interface Content {
  children: JSX.Element | JSX.Element[] | string;
  page?: string;
}

const Item = (props: Content) => {
  return <div className={styles[`${props.page}`]}>{props.children}</div>;
};

export default Item;
