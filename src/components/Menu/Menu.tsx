import styles from "./Menu.module.scss";
import LinkToPage from "../LinkToPage/LinkToPage";

const Menu = () => (
  <div className={styles.card}>
    <div className={styles.menu}>
      <LinkToPage link={"/"} urlTo={"/"} linkTitle={"Home"}></LinkToPage>
      <LinkToPage
        link={"/about"}
        urlTo={"/about"}
        linkTitle={"About"}
      ></LinkToPage>
      <LinkToPage
        link={"/work"}
        urlTo={"/work"}
        linkTitle={"Work"}
      ></LinkToPage>
      <LinkToPage
        link={"/contact"}
        urlTo={"/contact"}
        linkTitle={"Contact"}
      ></LinkToPage>
    </div>
  </div>
);

export default Menu;
