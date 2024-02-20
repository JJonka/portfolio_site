import styles from "./Menu.module.scss";
import LinkToPage from "../LinkToPage/LinkToPage";

const Menu = () => (
  <div className={styles.card}>
    <div className={styles.menu}>
      <LinkToPage
        link={"/"}
        urlTo={"http://localhost:5173/"}
        linkTitle={"Home"}
      ></LinkToPage>
      <LinkToPage
        link={"/about"}
        urlTo={"http://localhost:5173/about"}
        linkTitle={"About"}
      ></LinkToPage>
      <LinkToPage
        link={"/work"}
        urlTo={"http://localhost:5173/work"}
        linkTitle={"Work"}
      ></LinkToPage>
      <LinkToPage
        link={"/contact"}
        urlTo={"http://localhost:5173/contact"}
        linkTitle={"Contact"}
      ></LinkToPage>
    </div>
  </div>
);

export default Menu;
