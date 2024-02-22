import styles from "./Copyright.module.scss";

interface IProps {
  page: string;
}

const Copyright = (props: IProps) => {
  const date = Date.now();
  const year = new Date(date).getFullYear();
  return (
    <div data-testid={"copyright"} className={styles[`${props.page}`]}>
      © {year} Joanna Jurasz
    </div>
  );
};

export default Copyright;
