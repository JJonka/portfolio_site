import styles from "./Card.module.scss";

interface IProps {
  children: JSX.Element | string | JSX.Element[];
}

const Card = (props: IProps) => (
  <div className={styles.card}>{props.children}</div>
);

export default Card;
