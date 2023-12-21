import styles from "./Menu.module.scss";
import LinkToPage from "./LinkToPage";

const Menu = () => {
  return (
    <div className={styles.card}>
      <div className={styles.menu}>
        <LinkToPage
          link={"/"}
          urlTo={"https://jjurasz.com"}
          linkTitle={"Home"}
        ></LinkToPage>
        <LinkToPage
          link={"/about"}
          urlTo={"https://jjurasz.com/about"}
          linkTitle={"About"}
        ></LinkToPage>
        <LinkToPage
          link={"/work"}
          urlTo={"https://jjurasz.com/work"}
          linkTitle={"Work"}
        ></LinkToPage>
        <LinkToPage
          link={"/contact"}
          urlTo={"https://jjurasz.com/contact"}
          linkTitle={"Contact"}
        ></LinkToPage>
      </div>
    </div>
  );
};

export default Menu;
