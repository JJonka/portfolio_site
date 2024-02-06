import styles from "./Box.module.scss";

interface IProps {
  header?: string;
  children: any;
}
const Box = (props: IProps) => (
  <div className={styles.box}>
    {props.header && <h1>{props.header}</h1>}
    <div className={styles.text}>{props.children}</div>
  </div>
);

export default Box;
