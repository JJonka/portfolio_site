import Card from "../../components/Card/Card";
import Copyright from "../../components/Copyright/Copyright";
import Menu from "../../components/Menu/Menu";
import Transitions from "../../components/Transitions/Transitions";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <Card>
      <Menu></Menu>
      <div className={styles.container}>
        <Transitions>
          <img src="/assets/stars2.svg" className={styles.imgTop}></img>
          <h1 className={styles.header}>
            Hello, world!
            <br />
            I'm Joanna.
          </h1>
          <h2 className={styles.introduction}>
            A junior fullstack developer, <br />
            ready to work and gain experience.
          </h2>
          <img src="/assets/stars.svg" className={styles.imgBottom}></img>
        </Transitions>
      </div>
      <Transitions>
        <Copyright></Copyright>
      </Transitions>
    </Card>
  );
};

export default HomePage;
