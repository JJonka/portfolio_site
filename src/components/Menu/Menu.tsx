import styles from "./Menu.module.scss";
import LinkToPage from "../LinkToPage/LinkToPage";

const Menu = () => (
  <div className={styles.card}>
    <div className={styles.menu}>
      <LinkToPage
        link={"/"}
        urlTo={"http://jjurasz.com/"}
        linkTitle={"Home"}
      ></LinkToPage>
      <LinkToPage
        link={"/about"}
        urlTo={"http://jjurasz.com/about"}
        linkTitle={"About"}
      ></LinkToPage>
      <LinkToPage
        link={"/work"}
        urlTo={"http://jjurasz.com/work"}
        linkTitle={"Work"}
      ></LinkToPage>
      <LinkToPage
        link={"/contact"}
        urlTo={"http://jjurasz.com/contact"}
        linkTitle={"Contact"}
      ></LinkToPage>
    </div>
  </div>
);

export default Menu;
